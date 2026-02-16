
import InsideHeader from "../../components/InsideHeader";
import HeroStatement from "../../components/HeroStatement";
import CaseStudyCard from "../../components/CaseStudyCard";

const CaseStudies: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/casestudies/casestudies-banner.jpg`} alt_title="CaseStudies" />
            <HeroStatement title="Case Studies" content="Introducing Recyclamine, a ground-breaking advancement in thermoset composites that revitalizes non-recyclable epoxy composites, " />
            <section className="case-studies">
                <div className="container">
                    <CaseStudyCard />
                </div>
            </section>
        </>
    )
}
export default CaseStudies;