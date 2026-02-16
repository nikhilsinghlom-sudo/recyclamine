import InsideHeader from "../../components/InsideHeader";
// import { Link } from "react-router-dom";


const BlogAndStories: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/siemens-gamesa-renewable-energy/siemens-gamesa-renewable-energy-banner.webp`} title="Siemens Gamesa Renewable Energy X Aditya Birla Advanced Materials" alt_title="Siemens Gamesa Renewable Energy X Aditya Birla Advanced Materials" className="normalheading" />

            <section className="applications-detail storiesblogs">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                            <div className="applications-detail-lhs">
                                <ul>
                                    <li><Link to={"#"}>Section 1</Link></li>
                                    <li><Link to={"#"}>Section 2</Link></li>
                                    <li><Link to={"#"}>Section 3</Link></li>
                                    <li><Link to={"#"}>Section 4</Link></li>
                                    <li><Link to={"#"}>Section 5</Link></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                            <div className="applications-detail-content">
                                {/* <aside>
                                    <div className="maintitle">
                                        
                                        <h6>Title here</h6>
                                    </div>
                                    <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong></p>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reiciendis perferendis dicta voluptas sint optio. Deleniti voluptate ex, dignissimos suscipit mollitia a accusamus cum quam sapiente repudiandae molestias corporis at.</p>
                                    <p><img src={`${process.env.PUBLIC_URL}/images/blog/placeholder-16-9.jpeg`} alt="" /></p>
                                </aside> */}
                                {/* <aside>
                                    <h4>National Composites Centre,UK X Aditya Birla Advanced Materials</h4>
                                    <p>Collaborative Innovation Towards Sustainable Surfboards</p>
                                </aside> */}
                                <aside>
                                    <h4>About Siemens Gamesa Renewable Energy:</h4>
                                    <p>Siemens Gamesa Renewable Energy (SGRE), a global leader in the
                                        renewable energy sector, has long been committed to driving the transition to
                                        a low-carbon future. Specializing in the design, manufacturing, installation,
                                        and servicing of wind turbines, Siemens Gamesa plays a crucial role in both
                                        the onshore and offshore wind energy markets. With over 143 GW of installed
                                        capacity globally and operations in more than 90 countries, Siemens Gamesa
                                        is helping to reduce global reliance on fossil fuels and combat climate change.</p>
                                </aside>
                                <aside>
                                    <h4>Challenge Identification:</h4>
                                    <h6>Recycling of Wind Turbine Blades:</h6>
                                    <ul>
                                        <li>Wind turbine blades, made from durable composite materials, are difficult to recycle at the end of their life, presenting a significant environmental challenge.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <h6>Growing Number of Decommissioned Blades:</h6>
                                    <ul>
                                        <li>As the wind energy sector expands, the increasing number of
                                            decommissioned blades is projected to exceed 40 million by 2050,
                                            escalating the need for sustainable recycling solutions.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <h6>Inefficiency of Traditional Recycling Methods:</h6>
                                    <ul>
                                        <li>Conventional recycling methods, such as shredding and grinding,
                                            are ineffective for wind turbine blades due to their complex, multi-
                                            layered construction, leading to pollution and energy inefficiency.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <h6>Landfilling and Incineration:</h6>
                                    <ul>
                                        <li>Many decommissioned blades are disposed of through landfilling or
                                            incineration, resulting in environmental harm and lost opportunities for
                                            material recovery.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <h6>Environmental and Economic Costs:</h6>
                                    <ul>
                                        <li>The current disposal practices incur both environmental costs, such
                                            as pollution, and economic burdens related to waste management and
                                            resource loss.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <h6>The Recyclamine Project:</h6>
                                    <p>In response to this challenge, Aditya Birla Advanced Materials and Siemens
                                        Gamesa have collaborated to develop the world’s first fully recyclable wind
                                        turbine blade. Leveraging Siemens Gamesa’s ongoing commitment to wind
                                        circularity and Aditya Birla’s innovation in materials, the partnership set out to
                                        create a new, cost-effective solution for recycling blades.</p>
                                    <p>The R&amp;D teams from both companies worked closely together to develop a
                                        groundbreaking recyclable epoxy resin system, utilizing Aditya Birla’s
                                        proprietary Recyclamine technology. This resin system has been designed
                                        for improved processability, with slower reactivity that allows for faster curing
                                        compared to conventional materials. As a result, production times in blade
                                        manufacturing are significantly reduced. Importantly, the recyclable blade is
                                        produced using the same proven IntegralBlade manufacturing process,
                                        ensuring no increased risk in implementation.</p>
                                </aside>

                                <aside>
                                    <h6>Results &amp; Impact:</h6>
                                    <p>The development of this recyclable resin system has been a transformative
                                        advancement for the wind energy industry. Unlike traditional materials, this
                                        resin enables the recycling of wind turbine blades, allowing for the recovery of
                                        both the resin matrix and reinforcement. These recovered materials can then
                                        be repurposed, effectively closing the loop and making wind turbine blade
                                        disposal more sustainable.</p>
                                    <p>This successful collaboration between Aditya Birla Advanced Materials and
                                        Siemens Gamesa has been a game changer, not only in the wind energy
                                        sector but also in the broader quest for sustainability and circularity. By
                                        launching the world’s first recyclable wind turbine blade, Siemens Gamesa
                                        has taken a monumental step towards ensuring that the future of wind energy
                                        is both environmentally friendly and sustainable.</p>
                                    <p>This partnership reflects our joint commitment to reducing carbon emissions,
                                        advancing sustainable technologies, and helping to pave the way for a circular
                                        economy in the renewable energy sector.</p>
                                </aside>







                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogAndStories;




