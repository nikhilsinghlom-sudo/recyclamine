import React from 'react';
import { Link } from 'react-router-dom';
export default function NewsCase() {
    return (
        <section className="news-case-section">
                <div className="container">
                    <div className="section-title">
                        <h2><span>News /</span> Case Studies</h2>
                    </div>
                    <div className="viewmore"><Link className="linkcta dark" to={'#'}>View more cases <span></span></Link>
 </div>
                    <div className="row g-0">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className='news-case-card'>
                                <div className="image-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/newscase/01.jpg`} alt="Insight" />
                                </div>
                                <div className="caption">
                                    <div className='-news-case-subhead'>
                                        <h6>INSIGHT</h6>
                                    </div>
                                    <div className='news-case-disc'>                                            <h5>HEIGHTEN YOUR SPIRITS.</h5>
                                        <p>Integrating mood lighting across evening to dawn images can increase engagement with your audiences.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className='news-case-card'>
                                <div className="image-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/newscase/01.jpg`} alt="Insight" />
                                </div>
                                <div className="caption">
                                    <div className='-news-case-subhead'>
                                        <h6>INSIGHT</h6>
                                    </div>
                                    <div className='news-case-disc'>                                            <h5>HEIGHTEN YOUR SPIRITS.</h5>
                                        <p>Integrating mood lighting across evening to dawn images can increase engagement with your audiences.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className='news-case-card'>
                                <div className="image-wrapper">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/newscase/01.jpg`} alt="Insight" />
                                </div>
                                <div className="caption">
                                    <div className='-news-case-subhead'>
                                        <h6>INSIGHT</h6>
                                    </div>
                                    <div className='news-case-disc'>                                            <h5>HEIGHTEN YOUR SPIRITS.</h5>
                                        <p>Integrating mood lighting across evening to dawn images can increase engagement with your audiences.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}