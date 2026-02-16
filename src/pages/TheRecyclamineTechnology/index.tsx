import InsideHeader from "../../components/InsideHeader";
// import SplitHeroSection from "../../components/SplitHeroSection";
// import HeroStatement from "../../components/HeroStatement";
import HeroStatementLarge from "../../components/HeroStatementLarge";
import HeroNativeVideo from '../../components/HeroNativeVideo';
// import HeroVideo from '../../components/HeroVideo'; 
import PlyrPlayer from "../../components/VideoPlayer";
import FadeUp from "../../components/Animation/FadeUp";


export default function RecyclamineTechnology() {

    const options: Plyr.Options = {
        controls: ['play-large'], // Custom controls
        settings: [], // Settings options
        autoplay: false, // Autoplay option
        // muted: false, // Mute video initially
        // clickToPlay: true
        hideControls: true,
    };


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/the-technology-and-how-it-works.jpg`} title="The Recyclamine Technology" alt_title="The Recyclamine Technology" />


            <HeroStatementLarge sectionclass="grey" title="How it works" content="Recyclamine’s patented chemistry works by introducing unique cleavable bonds into the cured matrix, enabling full recyclability at end-of-life. Components perform like any high-performance thermoset but when immersed in the recycling solution, the resin can be cleanly broken down, allowing valuable fibers and thermoplastic resin to be recovered and reused. It’s advanced chemistry with a simple goal, high-performance composites that don’t become permanent waste." />

            <HeroNativeVideo videoSrc={`${process.env.PUBLIC_URL}/video/how-do-we-do-it1.mp4`} caption="" />


            {/* <SplitHeroSection theme='blue' layout_order='' contenttype='' subheading='' heading='The Process' description={
                <>
                    <strong>Our patented recycling process empowers you to recover and reuse composites effortlessly. By simply dipping composite parts in a low-energy recycling solution at around 100°C, we transform waste into opportunity.</strong><br />
                    <br />
                    This efficient and cost-effective method operates at low to medium temperatures, minimising energy consumption while maximising results.
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/The Process.jpg`} /> */}


            <section className={`split-hero-section white`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                            <div className="image-wrapper">
                                <PlyrPlayer provider="youtube" embedId="BbxzFKh94YI" options={options} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="content-wrapper">
                                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                    
                                    <h4 className="text-blue"><strong>The Process</strong></h4>
                                    <p>Recyclamine unlocks recycling with a simple, low-energy process, just immerse the cured part in a heated solution (70–90°C), and the resin breaks down for recovery.</p>
                                    <p>This efficient, cost-effective method delivers high quality and high-value material reclamation while cutting energy use and waste, turning end-of-life into new beginnings.</p>
                                    {/* <p><strong>Watch this video to know how Recyclamine is helping Kanoa Surfboards in making 100% recyclable surfboards</strong></p> */}
                                </FadeUp>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







        </>
    )
}
