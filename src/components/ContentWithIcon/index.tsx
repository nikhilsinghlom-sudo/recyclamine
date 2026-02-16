import FadeUp from "../Animation/FadeUp";
import KnowMore from "../TextCTA";

interface ContentWithIconProps {
    bgimg: string,
    heading: any;
    subheading?: any
    description: any,
    imgsrc: string,
    sectionclass?: string;
    link_title?: string;
    url?: string;
}

const ContentWithIcon: React.FC<ContentWithIconProps> = ({ bgimg, heading, subheading, description, imgsrc, sectionclass, link_title, url }) => {
    return (
        <section className={`contentwithicon ${sectionclass}`}>
            <div className="sectionbg">
                <img src={bgimg} alt={heading} />
             </div>
            <div className="caption">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="content-wrapper">
                                 <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                 {/* <h3>{title}</h3>  */}
                                <h4>{heading}</h4>
                                <h5>{subheading}</h5>
                                <p>{description}</p>
                                    {url && (
                                        <KnowMore 
                                            to={url} 
                                            title={link_title} 
                                            color="white" 
                                            target={url.startsWith('http') ? '_blank' : undefined} 
                                        />
                                    )}
                                    
                                </FadeUp>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 offset-lg-2">
                            <div className="image-wrapper">
                                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                    <img src={imgsrc} alt={heading} />
                                </FadeUp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWithIcon;