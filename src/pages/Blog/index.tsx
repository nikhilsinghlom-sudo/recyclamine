import { Link } from "react-router-dom";
import InsideHeader from "../../components/InsideHeader";

const Blog: React.FC = () => {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/blog/blog-banner.jpg`} title="Blog" alt_title="Blog" />

            <section className="blog-listing">
                <div className="container">
                    <div className="sectionheading">
                        <h4>Blogs</h4>
                    </div>
                    <div className="featured-blog">
                        <div className="featured-card">
                            <div className="featured-card-img">
                                <img src={`${process.env.PUBLIC_URL}/images/blog/Featured-Blog.jpg`} alt="" />
                            </div>
                            <div className="featured-card-body">
                                <h6>03 Sep 2024</h6>
                                <h4>The future of e-commerce: trends shaping the online shopping experience in 2024</h4>
                                <h6 className="mb-0">Commerce</h6>
                                <Link className="stretched-link" to={"#"}></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row bloggrid">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                            <ul className="leftnav">
                                <li><Link to={"#"}>Filter 1</Link></li>
                                <li><Link to={"#"}>Filter 2</Link></li>
                                <li><Link to={"#"}>Filter 3</Link></li>
                                <li><Link to={"#"}>Filter 4</Link></li>
                                <li><Link to={"#"}>Filter 5</Link></li>
                                <li><Link to={"#"}>Filter 6</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                            <div className="list-content">

                                <div className="blog-card">
                                    <Link to={"/blog-detail"}>
                                    <div className="row g-0 align-items-start">
                                        <div className="col-md-5">
                                            <figure className="blog-card-thumb">
                                                <img src={`${process.env.PUBLIC_URL}/images/blog/blog01.jpg`} alt="What is Lorem Ipsum" />
                                            </figure>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="blog-card-body">
                                                    <h6 className="blog-card-label"><span>CAT</span></h6>
                                                    <h5>The standard Lorem Ipsum passage, used since the 1500s</h5>
                                                    <p><small className="text-body-secondary">Oct 12, 2023</small></p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                
                                <div className="blog-card">
                                    <Link to={"/blog-detail"}>
                                    <div className="row g-0 align-items-start">
                                        <div className="col-md-5">
                                            <figure className="blog-card-thumb">
                                                <img src={`${process.env.PUBLIC_URL}/images/blog/blog01.jpg`} alt="What is Lorem Ipsum" />
                                            </figure>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="blog-card-body">
                                                    <h6 className="blog-card-label"><span>CAT</span></h6>
                                                    <h5>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                                    <p><small className="text-body-secondary">Oct 12, 2023</small></p>
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                
                                <div className="blog-card">
                                    <Link to={"/blog-detail"}>
                                    <div className="row g-0 align-items-start">
                                        <div className="col-md-5">
                                            <figure className="blog-card-thumb">
                                                <img src={`${process.env.PUBLIC_URL}/images/blog/blog01.jpg`} alt="What is Lorem Ipsum" />
                                            </figure>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="blog-card-body">
                                                    <h6 className="blog-card-label"><span>CAT</span></h6>
                                                    <h5>Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h5>
                                                    <p><small className="text-body-secondary">Oct 12, 2023</small></p>
                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>

                                


                            </div>
                        </div>
                    </div>










                    
                </div>
            </section>


        </>
    )
}

export default Blog;