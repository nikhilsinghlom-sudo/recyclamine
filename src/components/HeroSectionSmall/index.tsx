import FadeUp from "../Animation/FadeUp";
import KnowMore from "../TextCTA";

interface HeroSectionSmallProps {
    bgimg: string,
    heading: any;
    url: any,
}

const HeroSectionSmall: React.FC<HeroSectionSmallProps> = ({ bgimg, heading, url }) => {
    return (
        <section className="herosectionsmall">
            <div className="sectionbg">
                <img src={bgimg} alt={heading} />
            </div>
            <div className="caption">
                <div className="container">
                    <div className="content-wrapper">
                        <FadeUp duration={1} delay={0.2} threshold={0.2}>
                            <h3>{heading}</h3>
                            <KnowMore to={url} title="Let’s connect" color="white" />
                        </FadeUp>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSectionSmall;

