import { Link } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";
import KnowMore from "../../components/TextCTA";

const SuccessStories: React.FC = () => {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/stories-and-blogs/stories-and-blogs-banner.webp`} title="Success Stories" alt_title="Success Stories" />

            <section className="blog-listing">
                <div className="container">
                    <div className="sectionheading">
                        <h4>Latest Success Stories</h4>
                    </div>
                    <div className="featured-blog">
                        <div className="featured-card">
                            <div className="featured-card-img">
                                <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/the-gun-sails/the-gun-sails-banner.webp`} alt="" />
                            </div>
                            <div className="featured-card-body">
                                {/* <h6>03 Sep 2024</h6> */}
                                <h4>The Gun Sails von Osterhausen (Kanoa Surfboards) & Aditya Birla Advanced Materials Collaborative Innovation Towards Sustainable Surfboards</h4>
                                {/* <h6 className="mb-0">Commerce</h6> */}
                                <KnowMore to="/success-stories/the-gun-sails-von-osterhausen" title="Know More" color="white" />
                            </div>
                        </div>
                    </div>

                    <div className="bloggrid">
                        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <ul className="leftnav">
                                <li><Link to={"#"}>Filter 1</Link></li>
                                <li><Link to={"#"}>Filter 2</Link></li>
                                <li><Link to={"#"}>Filter 3</Link></li>
                                <li><Link to={"#"}>Filter 4</Link></li>
                                <li><Link to={"#"}>Filter 5</Link></li>
                                <li><Link to={"#"}>Filter 6</Link></li>
                            </ul>
                        </div> */}

                            <div className="list-content">
                                <div className="row gy-5 row-cols-1 row-cols-sm-1 row-cols-md-2">
                                    <div className="col">
                                        <div className="blog-card">
                                        <Link to={"/success-stories/ncc-uk-and-aditya-birla-advanced-materials"}>
                                                <div className="row g-0 align-items-start">
                                                    <div className="col-md-5">
                                                        <figure className="blog-card-thumb">
                                                        <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/ncc2.webp`} alt="National Composites Centre,UK X Aditya Birla Advanced Materials" />
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="blog-card-body">
                                                        <h6 className="blog-card-label"><span>Success Stories</span></h6>
                                                        <h5>NCC, UK & Aditya Birla Advanced Materials</h5>
                                                            {/* <p><small className="text-body-secondary">Oct 12, 2023</small></p> */}
                                                        <p>Collaborative Innovation towards Sustainable Kayaks</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* <div className="col">
                                        <div className="blog-card">
                                        <Link to={"/success-stories/siemens-gamesa-renewable-energy-x-aditya-birla-advanced-materials"}>
                                                <div className="row g-0 align-items-start">
                                                    <div className="col-md-5">
                                                        <figure className="blog-card-thumb">
                                                        <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/siemens-gamesa-renewable-energy/siemens-gamesa-renewable-energy-thumb.webp`} alt="Siemens Gamesa Renewable Energy X Aditya Birla Advanced Materials" />
                                                        </figure>
                                                    </div>
                                                    <div className="col-md-7">
                                                        <div className="blog-card-body">
                                                            <h6 className="blog-card-label"><span>Success Stories</span></h6>
                                                            <h5>Siemens Gamesa Renewable Energy X Aditya Birla Advanced Materials</h5>
                                                            
                                                            <p>A Collaboration that Drives Innovation in Recyclable Wind Turbine Blades.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div> */}


                                <div className="col">
                                    <div className="blog-card">
                                        <Link to={"/success-stories/cobra-international-x-aditya-birla-advanced-materials-collaboration"}>
                                            <div className="row g-0 align-items-start">
                                                <div className="col-md-5">
                                                    <figure className="blog-card-thumb">
                                                        <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/cobra-abg/cobra-abg-thumb.jpg`} alt="Cobra ABG Collaboration" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="blog-card-body">
                                                        <h6 className="blog-card-label"><span>Success Stories</span></h6>
                                                        <h5>Cobra International X Aditya Birla Advanced Materials Collaboration</h5>
                                                        {/* <p><small className="text-body-secondary">Oct 12, 2023</small></p> */}
                                                        <p>Cobra International, based in Thailand, is a leading manufacturer specializing in high-end composite products for a variety of industries</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>


                                <div className="col">
                                    <div className="blog-card">
                                        <Link to={"/success-stories/hanyang-university-korea-and-aditya-birla-advanced-materials-collaboration"}>
                                            <div className="row g-0 align-items-start">
                                                <div className="col-md-5">
                                                    <figure className="blog-card-thumb">
                                                        <img src={`${process.env.PUBLIC_URL}/images/stories-and-blogs/hanyang-abg/hanyang-university-korea-thumb.png`} alt="Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry" />
                                                    </figure>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="blog-card-body">
                                                        <h6 className="blog-card-label"><span>Success Stories</span></h6>
                                                        <h5>Hanyang University, Korea & Aditya Birla Advanced Materials Collaboration on Recyclable Hydrogen Type IV pressure vessel for Sustainability & Circularity in Automobile Industry</h5>
                                                        {/* <p><small className="text-body-secondary">Oct 12, 2023</small></p> */}
                                                        {/* <p></p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>


                    
                                </div>
                            </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SuccessStories;