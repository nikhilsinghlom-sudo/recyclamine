// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import SplitHeroSection from "../../components/SplitHeroSection";
import InsideVideoHeader from "../../components/InsideVideoHeader";




import AccordionSlider from "../../components/AccordionSlider";


const OurPhilosophyAndValues: React.FC = () => {
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
            <InsideVideoHeader title="Recyclamine is built on the philosophy of “The Planet is Mine”" vidsrc={`${process.env.PUBLIC_URL}/video/banners/our-philosophy.mp4`} />
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
                </div>
            </section >
        </>
    )
}


export default OurPhilosophyAndValues;
