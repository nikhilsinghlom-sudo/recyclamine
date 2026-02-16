import { Link } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";
// import { Link } from "react-router-dom";


const BlogAndStories: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/the-gun-sails-banner.webp`} title="The Gun Sails von Osterhausen (Kanoa Surfboards) & Aditya Birla Advanced Materials Collaborative Innovation Towards Sustainable Surfboards" alt_title="The Gun Sails von Osterhausen (Kanoa Surfboards) & Aditya Birla Advanced Materials Collaborative Innovation Towards Sustainable Surfboards" className="normalheading" />

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
                                <aside>
                                    <h4>Customer Introduction:</h4>
                                    <p>Kanoa Surfboards is a premium surfboard brand based in Germany, known for its high-performance and custom-designed boards. The company designs, manufactures, and sells surfboards across Europe and is rapidly expanding its presence. Kanoa has earned recognition for combining advanced engineering with a deep passion for surfing, offering boards that cater to a wide range of enthusiasts—from beginners to seasoned professionals. Their focus is on creating surfboards that harmonize cutting-edge technology, sustainability, and craftsmanship.</p>
                                    <p><Link to={"https://kanoa-surfboards.com/"} target="_blank">https://kanoa-surfboards.com</Link></p>
                                </aside>

                                <aside>
                                    <h4>Problem Identification:</h4>
                                    <p>The Kanoa and the surfboard industry faces significant challenges regarding process waste (which is 10 – 15%) and end-of-life (EOL) waste, contributing to environmental concerns. As surfing has grown in popularity, the environmental impact of surfboards has become more apparent. Many surfboards are thrown away improperly, either discarded in landfills or incinerated. As more surfboards are produced, the accumulation of EOL boards continues to increase, exacerbating the global waste problem. Around 1.3 million surfboards are sold worldwide each year and majority of boards are landfilled or incinerated after EoL. Also, a surfboard factory can produce as much as 3 tons of waste for every 100 surfboards made.</p>
                                </aside>


                                <aside>
                                    <h4>Recyclamine Project:</h4>
                                    <p>In a pioneering step toward achieving 100% recyclability in surfboard manufacturing, Kanoa Surfboards and Aditya Birla Advanced Materials teams began a fruitful collaboration. Discussions focused on understanding the process requirements, product specifications, and the end product expectations for the new surfboard. Aditya Birla introduced its patented Recyclamine epoxy system, Recyclamine 024RG/ R/ 013H3 as a potential solution for creating a fully recyclable surfboard. Recyclamine is a sustainable epoxy resin designed for better recyclability, a crucial feature for reducing surfboard waste at the end of life. Kanoa team carried out lab evaluations of the new epoxy resin. The results were promising, with the resin meeting key processing and product specifications. As no changes in processing parameters were required, Kanoa could integrate the new resin seamlessly into their existing manufacturing workflow, minimizing disruptions. The Kanoa team moved swiftly to conduct trials on their Honey Roots Technology-based surfboard.</p>
                                </aside>

                                <aside>
                                    <h4>Result &amp; outcome:</h4>
                                    <p>The results were a success. Recyclamine epoxy system not only met all the processing requirements but also passed the end-product specifications, proving its viability for surfboard manufacturing. The trial surfboard demonstrated excellent strength, durability, and overall performance while being completely aligned with sustainability goals. Honey Roots Technology has been honoured by the JEC WORLD INNOVATION AWARD 2025 in the Sports & leisure category.</p>
                                    <div className="row mt-3 gy-lg-5 imagegrid">
                                        
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                            <figure className="vimg">
                                                <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/hrt-surfboard-made-with-recyclamine.png`} alt="" />
                                                <figcaption className="mt-4">
                                                    <p>HRT Surfboard made with Recyclamine</p>
                                                </figcaption>
                                          </figure>
                                          </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                            <figure><img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/sports-and-leisure.jpg`} alt="" /></figure>
                                        </div>
                                        </div>
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




