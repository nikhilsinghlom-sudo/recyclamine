import InsideHeader from "../../components/InsideHeader";
import SplitHeroSection from "../../components/SplitHeroSection";
import HeroStatement from "../../components/HeroStatement";
import HeroStatementLarge from "../../components/HeroStatementLarge";
import HeroNativeVideo from '../../components/HeroNativeVideo';



export default function TechnologyHowItWorks() {
  return (
    <>
      <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/the-technology-and-how-it-works.jpg`} title="Technology & How it Works" alt_title="The Recyclamine Revolution" />


      <HeroStatement title="The Technology & How it Works" content="Introducing Recyclamine, a ground-breaking advancement in thermoset composites that revitalizes non-recyclable epoxy composites, establishing a path to perpetual recyclability. Recyclamine Technology works by employing advanced epoxy resins and specially designed curing agents to facilitate the recycling of thermosetting composites."/>



      <SplitHeroSection theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='The Approach' description={
        <>
          <strong>This innovative approach facilitates a targeted recycling process, converting thermosetting epoxies into "thermoplastics."</strong><br/>
          <br />

          As a result, valuable materials such as reinforcing fibers, epoxy matrix, and other composite components can be recovered and reused efficiently, paving the way for cleaner, more sustainable production cycles.
        </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/The Approach.jpg`} />

      <SplitHeroSection theme='blue' layout_order='' contenttype='' subheading='' heading='The Process' description={
        <>
          <strong>Our patented recycling process empowers you to recover and reuse composites effortlessly. By simply dipping composite parts in a low-energy recycling solution at around 100°C, we transform waste into opportunity.</strong><br/>
          <br />
        This efficient and cost-effective method operates at low to medium temperatures, minimising energy consumption while maximising results.
            </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/The Process.jpg`} />

        {/* <SplitHeroSection theme='white-spacing mb-0' layout_order='reverse' contenttype='' subheading='' heading='See, how do we do it!' description={
          <>
            Experience the versatility of our epoxy systems, crafted to offer a remarkable spectrum of properties, from fast to slow reactivity and varying thermal and chemical resistance to an array of mechanical strengths.
            Best of all, integrating Recyclamine systems into your existing processes is effortless. No capital investment, staff training, or setup adjustments are required.
        </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/the-recyclamine-revolution/See how do we do it.jpg`} imgtitle="Embrace innovation and enjoy a smooth transition towards enhanced performance and sustainability today!" /> */}


      <HeroStatementLarge sectionclass="white" title="See, how do we do it!" content="Experience the versatility of our epoxy systems, crafted to offer a remarkable spectrum of properties, from fast to slow reactivity and varying thermal and chemical resistance to an array of mechanical strengths. Best of all, integrating Recyclamine systems into your existing processes is effortless. No capital investment, staff training, or setup adjustments are required." />

      <HeroNativeVideo videoSrc={`${process.env.PUBLIC_URL}/video/how-do-we-do-it.mp4`} caption="Embrace innovation and enjoy a smooth transition towards enhanced performance and sustainability today!"/>




    </>
  )
}
