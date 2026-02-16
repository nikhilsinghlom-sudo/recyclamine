import InsideHeader from "../../components/InsideHeader";
import HeroStatement from "../../components/HeroStatement";
import VerticalTabs from "../../components/VerticalTabs";

const OurPresence: React.FC = () => {
  return (
    <>
      <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/about/our-presence/recyclamine-about-us-our-presence.jpg`} title="Pushing Limits,</br> Redefining Possibilities" alt_title="Our Presence" />

<section className="our-presence">
        <HeroStatement title="OUR PRESENSE" content="With state-of-the-art plants and facilities for research & development, application development and technical services at Thailand, India and Germany, Aditya Birla Advanced Materials serves global & local customers through our on-ground operations that span the globe. We are geared to help optimize productivity, minimize cost & time, resolve challenges, drive innovation and vitalize footprint." />

            <VerticalTabs/>

      </section>

    </>
  );
};

export default OurPresence; 