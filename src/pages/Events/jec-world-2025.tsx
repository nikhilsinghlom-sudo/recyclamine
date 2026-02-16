import React from 'react';
import InsideHeader from "../../components/InsideHeader";
import PlyrPlayer from "../../components/VideoPlayer";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const EventDetail: React.FC = () => {

    const options: Plyr.Options = {
        controls: ['play-large'], // Custom controls
        settings: [], // Settings options
        autoplay: false, // Autoplay option
        // muted: false, // Mute video initially
        // clickToPlay: true
        hideControls: true,
    };
    
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
                              <p>4<sup>th</sup> - 6<sup>th</sup> March 2025 Nord Villepinte Paris</p>
                              <div className='backtopage'>
                                  <Link to={"/events"}>&#60; Back</Link><br/>
                                  {/* <button onClick={() => navigate('/', { state: { scrollTo: 'past-events' } })}>{'<'} Back</button> */}
                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-lg-8">
                          <div className="applications-detail-content">
                              <aside>
                                  <div className='maintitle'>
                                      <h4>JEC WORLD 2025</h4>
                                      <p>JEC World 2025 has been nothing short of inspiring! Recyclamine continues to make waves by showcasing our sustainable solutions that are transforming the composites industry. We’ve connected with more innovators, shared ideas, and collaborated on advancing eco-friendly manufacturing practices.</p>
                                  </div>
                              </aside>
                              <aside>
                                  <img src={`${process.env.PUBLIC_URL}/images/events/jee-world-2025/01.jpg`} alt="JEC WORLD 2025" />
                                </aside>
                              <aside>
                                  <img src={`${process.env.PUBLIC_URL}/images/events/jee-world-2025/02.jpg`} alt="JEC WORLD 2025" />
                              </aside>   
                              <aside>
                                  <PlyrPlayer videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/Holy x Recyclamine updated.mp4`} options={options}/>
                              </aside>   
                              <aside>
                                  <PlyrPlayer videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/jec-world-2025.mp4`} options={options}/>
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
