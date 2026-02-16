import InsideHeader from "../../components/InsideHeader";
// import { Link } from "react-router-dom";


const BlogAndStories: React.FC = () => {


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/hanyang-abg/hanyang-university-korea-thumb.jpg`} title="Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry" alt_title="Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry" className="normalheading" />

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
                                    <h4>Hanyang University Introduction:</h4>
                                    <p>Hanyang University, established in 1939, is one of South Korea's leading private universities, located in Seoul. It has a strong emphasis on engineering, science, and technology. The university is renowned for its high-quality research, particularly in the fields of engineering, architecture, and IT.</p>    
                                    <p>Its research institutes and collaborations are well-regarded, and the university has consistently ranked highly in both national and international assessments. Hanyang is also known for its innovation-driven educational environment, and a strong focus on providing practical, industry-relevant skills to its students.</p>
                                    <p>Hanyang has also built strong ties with industries, fostering partnerships that lead to ground breaking work in fields such as robotics, renewable energy, automotive, sustainability and engineering.</p>
                                    
                                </aside>
                                <aside>
                                    <h6>Recyclamine Project:</h6>
                                    <p>The Recyclable Hydrogen Type IV Pressure Vessel developed by Aditya Birla Chemicals (Advanced Materials) in collaboration with Hanyang University, Korea leverages from the patented and disruptive Recyclamine technology that enables end of life recycling of hydrogen pressure vessels.</p>
                                    <p>Volume 52L, 700 bar Hydrogen Type IV Pressure Vessel was fabricated from thermoplastic liner (PA6) wrapped by carbon fiber reinforcement and recyclable epoxy using filament winding process. The pressure vessel passed the stringent burst pressure test requirement (&#62;1575 bar). Hanyang University has initiated discussion with automobile companies for the commercial scale production and implementation of CFRP Hydrogen Type IV Pressure Vessel.</p>
                                    
                                    <div className="row mt-4">
                                     <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                       <figure>
                                                <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/hanyang-abg/01.jpg`} alt="Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry" />
                                       </figure>
                                    </div>
                                     <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                       <figure>
                                                <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/hanyang-abg/02.jpg`} alt="Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry" />
                                       </figure>
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




