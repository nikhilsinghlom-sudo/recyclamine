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
                                <p>23<sup>rd</sup> - 25<sup>th</sup> October 2024<br /> Chennai Trade India</p>
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
                                        <h4>Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)</h4>
                                        <p>At Windergy India 2024, visit Recyclamine’s stall to discover how we’re reshaping the future of wind turbines with the world’s only recyclable epoxy solutions.</p>
                                    </div>
                                </aside>
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-1.jpg`} alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)" />
                                </aside>
                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-2.jpg`} alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)" />
                                </aside>

                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-3.jpg`} alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)" />
                                </aside>

                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-4.jpg`} alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)" />
                                </aside>

                                <aside>
                                    <img src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-5.jpg`} alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default EventDetail;
