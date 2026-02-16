import InsideHeader from "../../components/InsideHeader";
import ContentWithIcon from "../../components/ContentWithIcon";
import Teams from "../../components/Teams";
import SplitHeroSection from "../../components/SplitHeroSection";

import AccordionSlider from "../../components/AccordionSlider";

import HeroStatement from "../../components/HeroStatement";


const TheGenesisofRecyclamine: React.FC = () => {

    const accordionItems = [
        {
            id: "0",
            title: "Cost-effectiveness and Economic Viability",
            content: "By focusing on the lifecycle costs and the economic benefits of using recyclable materials, Recyclamine positions itself as a cost-effective solution for manufacturers looking to invest in sustainability.",
            img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
        },
        {
            id: "1",
            title: "Innovation and Technological Advancement",
            content: "Recyclamine represents a significant technological breakthrough in the materials science and composites industry, providing a recyclable solution without compromising performance. It demonstrates the brand's commitment to R&D, pushing the boundaries of what's possible in epoxy resin technology.",
            img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
        },
        {
            id: "2",
            title: "Performance and Reliability",
            content: "Ensuring that product performance, durability, and reliability remain top-notch, meeting or exceeding the industry standards set by traditional, non-recyclable epoxies.",
            img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
        },
        {
            id: "3",
            title: "Versatility and Application Diversity",
            content: "Catering to a wide range of industries and applications, from wind turbine blades and automotive components to sports equipment and beyond, highlighting its adaptability to different manufacturing needs and product specifications.",
            img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
        },
        {
            id: "4",
            title: "Sustainability and Environmental Responsibility",
            content: "Offering eco-friendly alternatives to traditional epoxy resins, this pillar emphasizes the product's role in reducing environmental impact, supporting a circular economy, and meeting the growing demand for green manufacturing practices.",
            img: "/images/philosophy-and-values/brand-value-pillers/Performance and Reliability.jpg",
        },
    ];




    return (
        <>


            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/insideheader/the-genesis-of-recyclamine.jpg`} title="Our Genesis, Philosophy & Values" alt_title="The Legacy (Aditya Birla Chemicals and Aditya Birla Advanced Materials)" />




            <SplitHeroSection layout_order='reverse' theme='light' subheading='' heading='The Need' description={
                <>
                    <strong>Thermoset plastics have been indispensable across industries due to their strength, but their non-recyclable nature contributes to vast amounts of industrial waste.</strong>
                    <br />
                    <br />
                    As sustainability becomes a prime focus of government norms and regulations, it is ever more essential for millennials and centennials of the market to demand for eco-friendly products. Not only that, their checklist will also include a quick, smooth and seamless transition to sustainable solutions with minimal to no investments into new infrastructure.
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/the-need.jpg`} />


            <HeroStatement title="Genesis" content="Recognizing the environmental impact of non-recyclable composites, we developed innovative technology, that enable industries to recycle materials that were once deemed impossible to reuse. Our approach empowers a more sustainable future, where every material has the potential for a second life." />



            <SplitHeroSection layout_order='' theme='blue' subheading='' heading='Recyclamine is the answer to all these challenges.' description={
                <>
                    Recyclamine’s recyclable epoxy solution addresses this, providing industries with a circular approach to waste while upholding strength and durability.
                </>
            } url='' imgsrc={`${process.env.PUBLIC_URL}/images/about/recyclamine-is-the-answer-to-all-these-challenges.jpg`} />


            <ContentWithIcon bgimg={`${process.env.PUBLIC_URL}/images/about/abc-bg.jpg`} heading={
                <>
                    The Technology: Recyclamine’s patented technology is a recyclable thermoset epoxy that enables recovery of fibers and epoxy without sacrificing mechanical performance.
                </>}
                description="This innovation is based on closed-loop recycling, allowing materials to return to the production cycle.Recyclamine technology is designed to interface seamlessly with current systems to optimise performance while driving eco-friendly initiatives to reuse and recycle materials, ultimately paving the way for sustainability in a more circular economy." imgsrc={`${process.env.PUBLIC_URL}/images/Recyclamine-Logo.svg`} />





            <SplitHeroSection contenttype="contentlarge" layout_order='reverse' subheading='' heading='Recyclamine is built on the philosophy of “The Planet is Mine”. ' description={
                <>
                    It has a significant presence in specialty chemicals value chain through offerings in epoxy, food phosphates, sulphites, and water treatment chemicals.A principle that emphasises shared responsibility for the environment
                    <br />
                    <br />
                    Recyclamine’s approach to recycling is holistic, focused on creating value while reducing waste across every industry it serves, and ultimately impacting in the long-term health and sustainability of the planet.
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/philosophy-and-values/the-planet-is-mine-cover.jpg`} theme='light' />

            <section className="contentwithicon philosophy five-pillers">
                <div className="sectionbg">
                    <img src={`${process.env.PUBLIC_URL}/images/about/abc-bg.jpg`} alt="" />
                </div>
                <div className="caption">
                    <div className="container">
                        <div className="heading">
                            <h3>The brand’s value pillars encapsulate the essence of Recyclamine and its contribution to advancing sustainable manufacturing practices.</h3>
                        </div>
                        <AccordionSlider items={accordionItems} />
                    </div>
                    {/* console.log("dataaaa",accordionItems); */}
                    
                </div>
            </section >

            <ContentWithIcon sectionclass='abam' bgimg={`${process.env.PUBLIC_URL}/images/about/abc-bg.jpg`} heading={
                <>
                Recyclamine: Aditya Birla Advanced Materials' Flagship Innovation for Sustainable Solutions.
                </>
            } subheading={
                <>
                   Aditya Birla Advanced Materials’s diverse portfolio strengthens its foundation across primary sectors like, <strong>Construction, Coatings, Composites,</strong> and, <strong>Electronics, </strong> along with specialized industries such as, <strong>Wind, Aerospace, Automotive,</strong> and, <strong>Sports.</strong>  
                </>}
                description="Through innovations in waterborne, bio-sourced, and recyclable solutions, Aditya Birla Advanced Materials has established itself as a reliable partner for advanced technologies worldwide. Acquisition of the award-winning Recyclamine technology in 2019 has further amplified its proposition to deliver sustainable, high-impact solutions." imgsrc={`${process.env.PUBLIC_URL}/images/about/IndustrySection.png`} url='https://www.abg-am.com/company/operations?page=contact-us' link_title='Know More' />
            
            <Teams />
        </>
    );
};

export default TheGenesisofRecyclamine;