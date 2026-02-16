import InsideHeader from "../../components/InsideHeader";
import SplitHeroSection from "../../components/SplitHeroSection";
// import HeroStatement from "../../components/HeroStatement";
// import CaseStudies from '../../components/CaseStudies';


const Sustainability: React.FC = () => {



    // const caseStudiesData = [
    //   {
    //     headingtype: 'large',
    //     subheading: '',
    //     heading: 'The Recyclamine Ecosystem',
    //     description: 'The Recyclamine Ecosystem is shaping a future where sustainable practices are not just an option, but the standard, and where innovation thrives across industries. It’s a dynamic network designed to support sustainable manufacturing throughout every stage of production. Insert icons for each of the below points.',
    //     "points": [
    //       {
    //         "icon": "Collaboration.svg",
    //         "title": "Collaboration",
    //         "description": "We partner with industries to develop customized recycling solutions that address the unique needs of each sector"
    //       },
    //       {
    //         "icon": "Innovation.svg",
    //         "title": "Innovation",
    //         "description": "Our advanced technology transforms waste into valuable, reusable resources, continually expanding the possibilities of composite materials"
    //       },
    //       {
    //         "icon": "Education.svg",
    //         "title": "Education",
    //         "description": "We equip businesses and consumers with the knowledge and tools to make informed, sustainable choices"
    //       }
    //     ],
    //     link_title: 'Know more',
    //     url: '',
    //         imgsrc: '/images/sustainability/Recyclamine-Ecosystem.jpg',
    //   },
    //   // {
    //   //   headingtype: 'large',
    //   //   subheading: 'Case Study',
    //   //   heading: 'Study Heading 2',
    //   //   description: 'Description for case study 2.',
    //   //   link_title: 'Learn more',
    //   //   url: '/case-study-2',
    //   //   imgsrc: '/images/homepage/case-studies/Revolutionary Material Use.jpg',
    //   // },
    // ];


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/sustainability/sustainability-banner.jpg`} title="Sustainability" alt_title="Sustainability" />

            {/* <SplitHeroSection id='ThePlanet' theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='The Planet is Mine' description={
                <>
                    At Recyclamine, we believe the future of our planet is in our hands. Our commitment goes beyond creating eco-friendly materials; we are leading the charge in making a meaningful environmental impact. By providing recyclable alternatives to traditional epoxy resins, we reduce carbon footprint, support a circular economy, and help advance global sustainability goals. With Recyclamine, we are shaping a future where the planet is ours to protect, preserve, and pass on to future generations.
                    
                               
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/sustainability/The Planet is Mine.jpg`} /> */}


            <section className="recycling-solutions">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <h4>Existing Recycling Solutions Vs. Recyclamine</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <p>Traditionally over 75% of composite waste has been landfilled or incinerated, increasing pollution, releasing CO2 and harmful gases, and destroying the valuable virgin materials that make strong, lightweight structures possible. </p>
                            <p>Some emerging composite recycling methods—such as pyrolysis, solvolysis, and mechanical grinding, offer the possibility to recycle composites rather than destroying them. However, each process has benefits and drawbacks.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="recycling-solutions bg-white">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <h4>The Recyclamine difference:</h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <ul className="customlist mt-0">
                                <li>Recyclamine brings circular recycling to
                                    Thermoset plastics for the first time, recovering
                                    100% of the materials for re-use.</li>
                                <li>Recyclamine uses a low energy,
                                    low impact recycling method, when compared
                                    to landfill (environmentally damaging), thermal
                                    recycling (energy intensive), and mechanical
                                    methods (property degrading).</li>
                                <li>Recyclamine offers a balanced approach between energy efficiency and recovery of high quality recycled materials.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="sustainability-table table-responsive">
                        <img src={`${process.env.PUBLIC_URL}/images/sustainability/sustainability-table.jpg`} alt="" />
                        {/* <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Landfill</th>
                                    <th scope="col">Incineration</th>
                                    <th scope="col">Pyrolysis</th>
                                    <th scope="col">Shredding</th>
                                    <th scope="col">Traditional Solvolysis</th>
                                    <th scope="col">Recyclamine</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Environmental Pollution</th>
                                    <td>Soil, groundwater pollution</td>
                                    <td>Greenhouse Emissions, carcinogens</td>
                                    <td>SOx, NOx, VOCs, dioxin. CO2</td>
                                    <td>Dust, air pollution</td>
                                    <td>Waste Solvent</td>
                                    <td>Waste water, can be distilled.</td>
                                </tr>
                                <tr>
                                    <th scope="row">Reinforcement Material Recovery</th>
                                    <td>Not Possible</td>
                                    <td>Possible with degardation</td>
                                    <td>Possible</td>
                                    <td>Not Possible</td>
                                    <td>Possible</td>
                                    <td>Possible</td>
                                </tr>
                                <tr>
                                    <th scope="row">Resin Recovery</th>
                                    <td>Not Possible</td>
                                    <td>Not Possible</td>
                                    <td>Not Possible</td>
                                    <td>Not Possible</td>
                                    <td>Not Possible</td>
                                    <td>Possible</td>
                                </tr>
                                <tr>
                                    <th scope="row">Carbon Footprint</th>
                                    <td>High</td>
                                    <td>High</td>
                                    <td>Med</td>
                                    <td>Low</td>
                                    <td>Med</td>
                                    <td>Low</td>
                                </tr>


                            </tbody>
                        </table> */}
                    </div>
                </div>
            </section>

            
            <SplitHeroSection id='Lifecycle' theme='grey white-spacing' layout_order='reverse' contenttype='' subheading='' heading='Lifecycle & Carbon Footprint' description={
                <>Recyclamine is committed to reducing the lifecycle impact and carbon footprint of composite
                    materials. Here’s how we’re making a difference:
                    <ul className="customlist">
                        <li><strong>Minimizing Emissions:</strong> By recycling and repurposing materials, we reduce the need for
                            virgin resources, cutting down on greenhouse gas emissions</li>
                        <li><strong>Our recyclable composites:</strong> Our recyclable composites ensure that materials are
                            used for longer, minimizing waste</li>
                        <li><strong>Supporting Sustainability Goals:</strong> We align with global efforts to reduce carbon
                            footprints, making it easier for industries to meet their sustainability targets</li>
                    </ul>
                    Recyclamine isn’t just a product, it’s a pathway to a sustainable future where both innovation
                    and environmental responsibility go hand in hand.
                </>} linktitle="Click here to know how Recyclamine collaborated with NCC" url='/success-stories/ncc-uk-and-aditya-birla-advanced-materials' imgsrc={`${process.env.PUBLIC_URL}/images/sustainability/Lifecycle & Carbon Footprint.jpg`} />



            <SplitHeroSection id='The4Rs' theme='white white-spacing' layout_order='' contenttype='' subheading='' heading='The 4Rs of Recyclability' description={
                <>Our mission is to enable pollution-free recycling while deriving tangible value through circular economy. Here’s how we do it:
                    <ul className="customlist">
                        <li><strong>Recycling:</strong> Our advanced technology enables the recycling of composite materials, turning what would be waste into valuable resources.</li>
                        <li><strong>Recovery:</strong> Recyclamine allows us to recover precious raw materials, ensuring nothing is wasted.</li>
                        <li><strong>Repurposing:</strong> The recovered materials are repurposed into new products, from automotive parts to wind turbine blades, ensuring a sustainable production cycle.
                       </li>
                        <li><strong>Reduction:</strong> The Recyclamine enables overall reduction in requirements for new materials.</li>
                    </ul>
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/sustainability/The-4Rs-of-Recyclability.jpg`} />


            {/* <CaseStudies caseStudies={caseStudiesData} /> */}






            {/* <SplitHeroSection id='TheRecyclamine' theme='white-spacing' layout_order='' contenttype='' subheading='' heading='The Recyclamine Ecosystem' description={
                <>
                    The <strong>Recyclamine Ecosystem</strong> is built on collaboration, innovation, and sustainability. It’s a
                    comprehensive network that supports sustainable manufacturing from start to finish.
                    <ul className="customlist">
                        <li><strong>Collaboration:</strong> We work closely with industries to create tailored recycling solutions that
                            meet the specific needs of each sector.</li>
                        <li><strong>Innovation:</strong> Our cutting-edge technology transforms waste into reusable resources,
                            pushing the boundaries of what's possible in composite materials.</li>
                        <li><strong>Education:</strong> We empower businesses and consumers alike, providing them with the
                            knowledge and tools to make sustainable decisions.</li>
                    </ul>
                    The Recyclamine Ecosystem is shaping a future where sustainable practices are the norm,
                    and innovation thrives across every industry.
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/sustainability/The Recyclamine Ecosystem.jpg`} /> */}



            {/* <SplitHeroSection theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='Recyclamine Impact Stories (case studies & experiments)' description={
                <>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/972x972.jpg`} /> */}



        </>

    )
}
export default Sustainability;