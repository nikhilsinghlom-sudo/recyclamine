import InsideHeader from "../../components/InsideHeader";
// import { Link } from "react-router-dom";


const BlogAndStories: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/cobra-abg/cobra-abg-banner.jpg`} title="Cobra International X Aditya Birla Advanced Materials Collaboration for Closed-Loop Recycling in Composite Manufacturing" alt_title="Cobra International X Aditya Birla Advanced Materials Collaboration for Closed-Loop Recycling in Composite Manufacturin" className="normalheading" />

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
                                    <h4>About Cobra International:</h4>
                                    <p>Cobra International, based in Thailand, is a leading manufacturer specializing in high-end composite products for a variety of industries, including water sports, automotive, marine, and luxury accessories. With over 40 years of experience, Cobra has become a trusted name in the design, development, and production of strong, lightweight, and aesthetically appealing composite components.</p>
                                    <p>Known for its legacy in the water sports industry, Cobra produces premium composite parts for windsurfing, surfing, stand-up paddleboarding (SUP), and kitesurfing. The company also manufactures structural and visual components for the automotive sector and supplies lightweight, high-performance parts for marine applications, including boats and yachts. By leveraging advanced manufacturing technologies such as Autoclave prepreg, Compression Molding, Resin Transfer Molding (RTM), Infusion, and Sandwich Core Construction, Cobra consistently delivers high-quality, durable composite products.</p>
                                </aside>

                                <aside>
                                    <h6>Recyclamine Project: Key Highlights</h6>
                                    <ul>
                                        <li><strong>Objective:</strong> The Recyclamine Project focuses on developing recyclable epoxy thermoset systems to enable closed-loop recycling in composite manufacturing, aiming to reduce material waste and promote sustainability.</li>
                                        <li><strong>Technology:</strong> The project utilizes Aditya Birla's Recyclamine technology, which makes it possible to recycle thermoset composites, traditionally seen as non-recyclable, through a low-energy, low-temperature process.</li>
                                        <li><strong>Closed-Loop Recycling:</strong> The technology allows for the recovery and reuse of materials such as fiberglass, carbon fiber, and resin components, helping create a circular economy within composite manufacturing.</li>
                                        <li><strong>Integration with Cobra International:</strong> Cobra uses Recyclamine resin in their water sports fin molds, incorporating it into their Resin Transfer Molding (RTM) process to create high-performance, recyclable tooling.</li>
                                    </ul>
                                </aside>
                                <aside>
                                    <p>The collaboration between Cobra International and Aditya Birla Advanced Materials marks a significant step towards sustainability in composite manufacturing. By integrating Recyclamine technology, both companies are leading the way in reducing waste, promoting recycling, and contributing to a greener future, while setting new industry standards for responsible manufacturing.
</p>
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




