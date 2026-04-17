import React from "react";
import InsideHeader from "../../components/InsideHeader";
// import PlyrPlayer from "../../components/VideoPlayer";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const EventDetail: React.FC = () => {
  //   const options: Plyr.Options = {
  //     controls: ["play-large"], // Custom controls
  //     settings: [], // Settings options
  //     autoplay: false, // Autoplay option
  //     // muted: false, // Mute video initially
  //     // clickToPlay: true
  //     hideControls: true,
  //   };

  // const navigate = useNavigate();

  return (
    <>
      <InsideHeader
        imgsrc={`${process.env.PUBLIC_URL}/images/events/events-banner.jpg`}
        title="Events"
        alt_title="Events"
      />

      <section className="applications-detail event-detail">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="applications-detail-lhs">
                <hr />
                <p>
                  10<sup>th</sup> - 12<sup>th</sup> March 2026 Paris-Nord
                  Villepinte
                </p>
                <div className="backtopage">
                  <Link to={"/events"}>&#60; Back</Link>
                  <br />
                  {/* <button onClick={() => navigate('/', { state: { scrollTo: 'past-events' } })}>{'<'} Back</button> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="applications-detail-content">
                <aside>
                  <div className="maintitle">
                    <h4>JEC WORLD 2026</h4>
                    <p>
                      At JEC World 2026, Recyclamine showcased its cutting-edge
                      solutions for circular, sustainable composites. Our
                      technology for recycling epoxy composites was on display,
                      highlighting how we are enabling more sustainable
                      practices in the industry. <br />
                      <br />
                      Rajesh Balakrishnan, CEO, Aditya Birla Advanced Materials, shared
                      insights on the importance of collaboration across the
                      value chain to close the loop on circular composites. He
                      stressed that success in sustainability requires bringing
                      together OEMs, recyclers, and other stakeholders to invest
                      in and work toward long-term solutions.
                    </p>
                  </div>
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-1.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-2.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-3.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-4.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-5.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-6.jpg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-7.jpeg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec-world-2026-8.jpg`}
                    alt="JEC WORLD 2026"
                  />
                </aside>
                {/* <aside>
                  <PlyrPlayer
                    videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/Holy x Recyclamine updated.mp4`}
                    options={options}
                  />
                </aside>
                <aside>
                  <PlyrPlayer
                    videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/jec-world-2025.mp4`}
                    options={options}
                  />
                </aside> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="applications-detail-lhs">
                <hr />
                <p> Catack-H MoU signing</p>
                <div className="backtopage">
                  <Link to={"/events"}>&#60; Back</Link>
                  <br />
                  {/* <button onClick={() => navigate('/', { state: { scrollTo: 'past-events' } })}>{'<'} Back</button> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8 mt-5">
              <div className="applications-detail-content">
                <aside>
                  <div className="maintitle">
                    <h4>Catack-H MoU signing</h4>
                    <p>
                      Recyclamine also took a significant step forward with
                      Catack-H by signing a Memorandum of Understanding (MoU) to
                      form a strategic partnership focused on the recycling of
                      composites. This collaboration aims to develop scalable
                      and commercially viable solutions to address End-of-Life
                      waste in the composites industry, reinforcing both
                      companies’ commitment to sustainable innovation and
                      cross-border collaboration.
                    </p>
                  </div>
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/Catack-H MoU signing 1.jpg`}
                    alt="Catack-H MoU signing"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/Catack-H MoU signing 2.jpg`}
                    alt="Catack-H MoU signing"
                  />
                </aside>
                <aside>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/Catack-H MoU signing 3.jpg`}
                    alt="Catack-H MoU signing"
                  />
                </aside>
                {/* <aside>
                  <PlyrPlayer
                    videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/Holy x Recyclamine updated.mp4`}
                    options={options}
                  />
                </aside>
                <aside>
                  <PlyrPlayer
                    videoUrl={`${process.env.PUBLIC_URL}/video/events/jec-world-2025/jec-world-2025.mp4`}
                    options={options}
                  />
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
