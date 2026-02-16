import InsideHeader from "../../components/InsideHeader";
import HeroStatement from "../../components/HeroStatement";
import { Link } from "react-router-dom";
import ImageWithCaption from "../../components/ImageWithCaption";


import applicationsData from "../../data/applications.json"; // Import JSON data


// Define the structure of each application
interface ApplicationProps {
    id: string;
    title: string;
    thumbImage: string;
    bannerImage: string;
    shortDesc: string;
    details: string;
    sections: Array<{
        title: string;
        subTitle: string;
        content: string | string[];
        contentImg: string;
    }>;
    clients: string[];
    // letsconnect: string[];
    faq: Array<{
        title: string;
        content: string;
    }>;
}



const Applications: React.FC = () => {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/applications/Wind blade Spar Cap/Wind blades & Spar Caps banner.webp`} title="Industries" alt_title="Industries" />
            <HeroStatement title="Industries" content="Discover how Recyclamine’s revolutionary recyclable epoxy technology transforms industries by providing sustainable, high-performance solutions for composite materials. Explore each industry to understand how Recyclamine’s recyclable epoxy can support your performance and sustainability goals." />
            <section className="applications">
                <div className="container">
                    <div className="row gy-4 row-cols-1 row-cols-lg-3">
                        {applicationsData.map((appList: ApplicationProps) => (
                            <div className="col" key={appList.id}>
                                <div className="application-card">
                                    <Link to={appList.id}>
                                        <div className="application-card-img">
                                            <img src={`${process.env.PUBLIC_URL}/images/applications/${appList.thumbImage}`} alt={appList.title} />
                                        </div>
                                        <div className="application-card-description">
                                            <h4>{appList.title}</h4>
                                            <p>{appList.shortDesc}</p>
                                        </div>
                                        <button type="button"><img src={`${process.env.PUBLIC_URL}/images/icons/circle-arrow-white.svg`} alt="" /></button>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            <ImageWithCaption bgimg={`${process.env.PUBLIC_URL}/images/applications/Applications-banner-bottom.jpg`} heading="Want to know more about how epoxy can be truly recycled to change the world?" url="/contact-us" link_title="Know More"/>

        </>
    );
};

export default Applications;
