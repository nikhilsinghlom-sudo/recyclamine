
import ImageFrame from "../ImageFrame";
import KnowMore from "../TextCTA";
import FadeUp from '../Animation/FadeUp';

interface SplitHeroSectionWhiteProps {
    contenttype?: string,
    subheading?: string,
    heading: string,
    description: any,
    url: string,
    imgsrc: string,
    theme: string,
    layout_order: string,
}


const SplitHeroSection: React.FC<SplitHeroSectionWhiteProps> = ({ subheading, contenttype, heading, description, url, imgsrc, theme, layout_order }) => {
    return (
        <section className={`split-hero-section white ${theme} ${contenttype} ${layout_order}`}>
            <div className="container">
                <div className="row g-lg-0 align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="image-wrapper">
                            {/* <FadeUp duration={1} delay={0.2} threshold={0.2}> */}
                                <ImageFrame className='white-small' src={imgsrc} alt={heading} />
                            {/* </FadeUp> */}
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="content-wrapper">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                {subheading && (
                                    <div className="eyebrow-text">
                                        <h5><img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" /> {subheading}</h5>
                                    </div>
                                )}
                                <h2 className="text-blue"><strong>{heading}</strong></h2>
                                <p>{description}</p>
                                {url && (
                                    <KnowMore to={url} title="Know More" color="blue" />
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

