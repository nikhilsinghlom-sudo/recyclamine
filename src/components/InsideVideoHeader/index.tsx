import { title } from "process";
import Breadcrumb from "../Breadcrumb";

interface InsideVideoHeaderProps {
    vidsrc: string;
    title?: string
}

const InsideVideoHeader: React.FC<InsideVideoHeaderProps> = ({ vidsrc, title }) => {
    return (
        <section className="insideheader">
            <div className="banner-video">
                <video className="lazy" loop muted autoPlay playsInline>
                    <source src={vidsrc} type="video/mp4" />
                    Your browser does not support the HTML5 Video element.
                </video>
            </div>

            <div className="bannerheading"><div className="container"><h2>{title}</h2></div></div>

            <div className="caption">
                <div className="container">
                    <Breadcrumb />
                </div>
            </div>

        </section>
    );
};

export default InsideVideoHeader;
