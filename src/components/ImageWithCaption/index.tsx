import FadeUp from "../Animation/FadeUp";
import KnowMore from "../TextCTA";

interface ImageWithCaptionProps {
    bgimg: string,
    heading: string;
    url: string,
    link_title: string
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ bgimg, heading, url, link_title }) => {
    return (
        <section className="imagewithcaption">
            <div className="sectionbg">
                <img src={bgimg} alt={heading} />
            </div>
            <div className="caption">
                <div className="container">
                    <div className="content-wrapper">
                        <FadeUp duration={1} delay={0.2} threshold={0.2}>
                            <h3>{heading}</h3>
                            <KnowMore to={url} title={link_title} color="white" />
                        </FadeUp>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImageWithCaption;

