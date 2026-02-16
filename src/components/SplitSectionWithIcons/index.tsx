import React from "react";
import KnowMore from "../../components/TextCTA"; // Adjust import path as needed

// ------------------------
// Type Definitions
// ------------------------

interface KnowMoreProps {
  to: string;
  title: string;
  color: string;
}

interface IconItem {
  src: string;
  alt: string;
  text: string;
}

interface SplitSectionWithIconsProps {
  title: string;
  subtitle?: string;
  description: string[];
  knowMore: KnowMoreProps;
  icons: IconItem[];
  iconsHeading?: string;
}

// ------------------------
// Component
// ------------------------

const SplitSectionWithIcons: React.FC<SplitSectionWithIconsProps> = ({
  title,
  subtitle,
  description,
  knowMore,
  icons,
  iconsHeading,
}) => {
  return (
    <section className="hmabout">
      <div className="container">
        <div className="eyebrow-text">
          {subtitle && (
            <h5>
              <img
                src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`}
                alt="Logo"
                className="about-logo"
              />
              {subtitle}
            </h5>
          )}
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="hmabout-lhs">
              <h4 className="text-blue">{title}</h4>
              {/* {description.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))} */}

              {description.map((htmlString, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: htmlString }}
                />
              ))}

              {knowMore?.title && (
                <KnowMore
                  to={knowMore.to}
                  title={knowMore.title}
                  color={knowMore.color}
                />
              )}
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="hmabout-rhs">
              <h5>{iconsHeading}</h5>
              {/* <ul className={`${icons.length === 1 ? 'single-icon' : 'hmabout-icons'}`}>
                                {icons.map((icon, index) => (
                                    <li key={index}>
                                        
                                        <img src={`${process.env.PUBLIC_URL}${icon.src}`} alt={icon.alt} /> */}
              {/* <img src={`${process.env.PUBLIC_URL}/images/about/abam/cetepox.png`} alt="Logo" className="about-logo"/>
                                        <img src={`${process.env.PUBLIC_URL}/images/about/abam/epotec.png`} alt="epotec.png" className="about-logo"/>
                                        <img src={`${process.env.PUBLIC_URL}/images/about/abam/epotec.png`} alt="epotec.png" className="about-logo"/>
                                        <img src={`${process.env.PUBLIC_URL}/images/about/abam/epotec.png`} alt="epotec.png" className="about-logo"/> */}
              {/* <p>{icon.text}</p>
                                    </li>
                                ))}
                                
                            </ul> */}
              <ul className="hmabout-icons">
                {icons.map((icon, index) => (
                  <li key={index}>
                    <img
                      src={`${process.env.PUBLIC_URL}${icon.src}`}
                      alt={icon.alt}
                    />
                    <p>{icon.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSectionWithIcons;
