import React from 'react';
import InsideHeader from "../../components/InsideHeader";
// import PlyrPlayer from "../../components/VideoPlayer";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const EventDetail: React.FC = () => {

    // const options: Plyr.Options = {
    //     controls: ['play-large'], // Custom controls
    //     settings: [], // Settings options
    //     autoplay: false, // Autoplay option
    //     // muted: false, // Mute video initially
    //     // clickToPlay: true
    //     hideControls: true,
    // };

    // const navigate = useNavigate();


    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/events/events-banner.jpg`} title="Events" alt_title="Events" />


            <section className="applications-detail event-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="applications-detail-lhs">
                                <hr />
                                <p>9<sup>th</sup> - 12<sup>th</sup> September 2024<br/> San Diego Convention Centre, CA</p>
                                <div className='backtopage'>
                                    <Link to={"/events"}>&#60; Back</Link><br />
                                    {/* <button onClick={() => navigate('/', { state: { scrollTo: 'past-events' } })}>{'<'} Back</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="applications-detail-content">
                                <aside>
                                    <div className='maintitle'>
                                        <h4>CAMX(The Composites and Advanced Materials Expo)</h4>
                                        <p>The largest composites and advanced materials event in North America, where we’re showcasing Recyclamine – a revolutionary technology that makes epoxy-based composites recyclable.</p>
                                    </div>
                                </aside>
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/CAMX-Image-1.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside>
                               
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/CAMX-Image-2.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside>
                               
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/CAMXImage-3.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside>
                               
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/CAMXImage-4.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside>
                               
                                {/* <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/Germany-Lab.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside>
                               
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/camx/Thailand-Plant-Day-photo.jpg`} alt="CAMX(The Composites and Advanced Materials Expo)" />
                                </aside> */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default EventDetail;
