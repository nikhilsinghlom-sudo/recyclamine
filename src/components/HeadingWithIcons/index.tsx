import React from "react";
import FadeUp from "../Animation/FadeUp";
interface Icon {
    src: string;
    alt: string;
}
interface SectionWithHeadingAndIconsProps {
    heading: string;
    description?: string;        
    icons: Icon[];
    animationDuration?: number;
}
const SectionWithHeadingAndIcons: React.FC<SectionWithHeadingAndIconsProps> = ({
    heading,
    description,
    icons,
    animationDuration = 1,
}) => {
    return (
        <section className="heading-with-icons bg-lightgrey">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="heading-with-icons-lhs">
                            <h4>{heading}</h4>
                            {description && <p>{description}</p>}
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 offset-md-1">
                        <div className="heading-with-icons-rhs">
                            <ul className="row gx-md-5 row-cols-2 row-cols-sm-2 row-cols-md-3">
                                {icons.map(({ src, alt }, index) => (
                                    <li key={alt + index} className="col">
                                        <figure>
                                            <FadeUp
                                                duration={animationDuration}
                                                delay={0.1 * (index + 1)}
                                                threshold={0.1 * (index + 1)}
                                            >
                                                <img src={src} alt={alt} />
                                                <p>{alt}</p>
                                            </FadeUp>
                                        </figure>
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

export default SectionWithHeadingAndIcons;
