import React from "react";
import ImageFrame from "../ImageFrame";
import KnowMore from "../TextCTA";
import FadeUp from "../Animation/FadeUp";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import { Pagination, EffectFade, Autoplay, A11y } from "swiper/modules"; // Import necessary modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// interface HeroImage {
//   src: string;
//   url?: string;
//   linktitle?: string;
//   description?: string;
// }

interface SplitHeroSectionProps {
  id?: string;
  contenttype?: string;
  subheading?: string;
  heading: string;
  description: any;
  url?: string | HeroImage;
  linktitle?: string;
  imgsrc: string | string[] | HeroImage[];
  imgtitle?: string;
  theme: string;
  layout_order: string;
}

interface HeroImage {
  src: string;
  url?: string;
  linktitle?: string;
  description?: string;

  heading?: string;
}

const SplitHeroSection: React.FC<SplitHeroSectionProps> = ({
  id,
  subheading,
  contenttype,
  heading,
  description,
  url,
  linktitle,
  imgsrc,
  imgtitle,
  theme,
  layout_order,
}) => {
  const images: HeroImage[] = React.useMemo(() => {
    if (typeof imgsrc === "string") {
      return [{ src: imgsrc }];
    }
    if (Array.isArray(imgsrc)) {
      // If array of strings, map to HeroImage
      if (typeof imgsrc[0] === "string") {
        return (imgsrc as string[]).map((src) => ({ src }));
      } else {
        return imgsrc as HeroImage[];
      }
    }
    return [];
  }, [imgsrc]);

  const [activeIndex, setActiveIndex] = React.useState(0);

  // always a HeroImage because imgsrc is HeroImage[]
  const activeImage = images[activeIndex];

  // const activeLinkUrl = activeImage?.url || url || "#";
  // const activeLinkTitle = activeImage?.linktitle || linktitle || "Know More";

  // If you want dynamic description per slide:
  // const activeDescription =
  //   typeof activeImage?.description === "string"
  //     ? activeImage.description
  //     : description; // fallback to prop description

  return (
    <section
      className={`split-hero-section ${theme} ${contenttype} ${layout_order}`}
      id={id}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* IMAGE COLUMN */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-5">
            <div className="image-wrapper object-fit:none">
              <Swiper
                modules={[Pagination, EffectFade, Autoplay, A11y]}
                slidesPerView={1}
                effect="fade"
                speed={600}
                loop
                autoplay={{ delay: 3000 }}
                onSlideChange={(swiper: any) =>
                  setActiveIndex(swiper.realIndex)
                } // fix TS7006
              >
                {images.map(
                  (
                    item,
                    index, //fix TS7006
                  ) => (
                    <SwiperSlide key={index}>
                      <div className="slide-content">
                        <ImageFrame
                          className="white-small"
                          src={item.src}
                          alt={item.heading || `Slide ${index}`}
                        />

                        {/* {item.heading && (
                        <h3 className="slide-heading">{item.heading}</h3>
                      )} */}

                        {/* Optional description */}
                        {/* {item.description && (
                        <p className="slide-description">{item.description}</p>
                      )} */}
                      </div>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>

              {imgtitle && (
                <div className="imgtitle">
                  <p>{imgtitle}</p>
                </div>
              )}
            </div>
          </div>

          {/* CONTENT COLUMN (UNCHANGED) */}
          {/* CONTENT COLUMN */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="content-wrapper">
              <FadeUp duration={1} delay={0.2} threshold={0.2}>
                {subheading && (
                  <div className="eyebrow-text">
                    <h5>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`}
                        alt="Logo"
                      />{" "}
                      {subheading}
                    </h5>
                  </div>
                )}

                {/* STATIC HEADING */}
                <h4 className="text-blue">
                  <strong>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: heading, // static heading
                      }}
                    />
                  </strong>
                </h4>

                {/* STATIC DESCRIPTION */}
                <p>{description}</p>

                {/* DYNAMIC SLIDE HEADING */}
                {activeImage?.heading && (
                  <h5 className="text-blue slide-heading">
                    <strong>{activeImage.heading}</strong>
                  </h5>
                )}

                {/* DYNAMIC SLIDE DESCRIPTION */}
                {activeImage?.description && (
                  <p className="slide-description">{activeImage.description}</p>
                )}

                {/* Slide-specific link */}
                {activeImage?.url && (
                  <div className="industry-use-case-link">
                    <KnowMore
                      to={activeImage.url}
                      title={activeImage.linktitle || "Know More"}
                      color="blue"
                    />
                  </div>
                )}
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHeroSection;

// {images.map((item, index) => {
//     const imageContent = (
//         <ImageFrame
//             className="white-small"
//             src={item.src}
//             alt={`Slide ${index}`}
//         />
//     );

//     return (
//         <SwiperSlide key={index}>
//             {item.url ? (
//                 <Link to={item.url} className="hero-slide-link">
//                     {imageContent}
//                 </Link>
//             ) : (
//                 imageContent
//             )}
//         </SwiperSlide>
//     );
// })}
