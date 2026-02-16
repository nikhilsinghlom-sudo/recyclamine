import { Link } from "react-router-dom"
import InsideHeader from "../../components/InsideHeader"
import KnowMore from "../../components/TextCTA"

export default function Resources() {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/casestudies/casestudies-banner.jpg`} title="Resources" alt_title="CaseStudies" />
            <section className="resources">

                {/* Publication */}

                <section className="publication-section">
                    <div className="container">
                        <div className="sectiontitle">
                            <h4>Publication</h4>
                        </div>
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
                            <div className="col">
                                <div className="publication-card">
                                    <figure>
                                        <Link to={"#"}>
                                            <div className="publication-card-img">
                                                <img src={`${process.env.PUBLIC_URL}/images/resources/publications-placeholder.jpg`} alt="Publication" />
                                            </div>
                                            <figcaption>
                                                <h5>The State of US. Early Stage Venture & Startups: 3Q23</h5>
                                                <p>In collaboration with Ramp</p>
                                                <KnowMore to="#" title="Know More" color="blue" />
                                            </figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                            <div className="col">
                                <div className="publication-card">
                                    <figure>
                                        <Link to={"#"}>
                                            <div className="publication-card-img">
                                                <img src={`${process.env.PUBLIC_URL}/images/resources/publications-placeholder.jpg`} alt="Publication" />
                                            </div>
                                            <figcaption>
                                                <h5>The State of US. Early Stage Venture & Startups: 3Q23</h5>
                                                <p>In collaboration with Ramp</p>
                                                <KnowMore to="#" title="Know More" color="blue" />

                                            </figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                            <div className="col">
                                <div className="publication-card">
                                    <figure>
                                        <Link to={"#"}>
                                            <div className="publication-card-img">
                                                <img src={`${process.env.PUBLIC_URL}/images/resources/publications-placeholder.jpg`} alt="Publication" />
                                            </div>
                                            <figcaption>
                                                <h5>The State of US. Early Stage Venture & Startups: 3Q23</h5>
                                                <p>In collaboration with Ramp</p>
                                                <KnowMore to="#" title="Know More" color="blue" />

                                            </figcaption>
                                        </Link>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles */}

                <section className="articles-section">
                    <div className="container">
                        <div className="sectiontitle">
                            <h4>Articles</h4>
                        </div>
                        <div className="row gx-lg-5 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table custom-table">
                                        <tbody>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col">
                                <div className="table-responsive">
                                    <table className="table custom-table">
                                        <tbody>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td>The State of U.S. Early-Stage Venture: 1Q23 <span>Report</span></td>
                                                <td><Link to={"#"}> <img src={`${process.env.PUBLIC_URL}/images/icons/right-arrow-light.svg`} alt="Arrow" /></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* White paper */}



                <section className="whitepaper-section">
                    <div className="container">
                        <div className="sectiontitle">
                            <h4>White Papers</h4>
                        </div>
                        <div className="row gx-lg-4 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-4">
                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div className="col">
                                <div className="wp-card">
                                    <figure>
                                        <div className="wp-logo"><img src={`${process.env.PUBLIC_URL}/images/resources/icon-placeholder.svg`} alt="Brand icon" /></div>
                                        <figcaption>
                                            <h5>connectly.ai</h5>
                                            <p>Series B $100M Seo 2024</p>
                                            <p>connectly.ai</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>



                            
                        </div>
                    </div>
                </section>








            </section>

        </>
    )
}
