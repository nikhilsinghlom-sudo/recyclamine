import React from "react";
// import Events from "../../components/Events";
import InsideHeader from "../../components/InsideHeader";
import KnowMore from "../../components/TextCTA";

const EventsList: React.FC = () => {
  return (
    <>
      <InsideHeader
        imgsrc={`${process.env.PUBLIC_URL}/images/events/events-banner.jpg`}
        title="Events"
        alt_title="Events"
      />

      {/*
    <Events /> */}

      <section className="events-listing">
        <div className="container">
          <div className="events-listing-header">
            <h3>Upcoming Events</h3>
          </div>
          <section className="event-list-sec pastevnt">
            <div className="row gx-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jec world 2026.svg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      10<sup>th</sup> - 12<sup>th</sup> March 2026
                    </span>
                  </h6>
                  <h5>JEC WORLD 2026</h5>
                  <h6>PARIS-NORD VILLEPINTE</h6>
                  <p>Stall position- 6M05</p>
                  <KnowMore
                    to="https://www.jec-world.events/"
                    title="View Event Details"
                    color="blue"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="event-list-sec ">
            <div className="row gx-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/upcoming/Windergy Hamburg.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      22<sup>nd</sup> - 26<sup>th</sup> September 2026
                    </span>
                  </h6>
                  <h5>Windergy Hamburg 2026</h5>
                  <h6>Germany</h6>
                  <KnowMore
                    to="https://www.windenergyhamburg.com/?gad_source=1"
                    title="Know More"
                    color="blue"
                    target="_blank"
                  />


                </div>
              </div>
            </div>
          </section>
          <div className="events-listing-header">
            <h3>Past Events</h3>
          </div>

          <section className="event-list-sec ">
            <div className="row gx-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/upcoming/Windergy.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      29<sup>th</sup> - 31<sup>st</sup> October 2025
                    </span>
                  </h6>
                  <h5>Windergy 2025</h5>
                  <h6>Chennai, India</h6>
                  <p>Stall Position- Hall 3, E503</p>
                  <KnowMore
                    to="https://www.windergy.in"
                    title="Know More"
                    color="blue"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="event-list-sec">
            <div className="row gx-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/upcoming/Husum Wind.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      16<sup>th</sup> - 19<sup>th</sup> September 2025
                    </span>
                  </h6>
                  <h5>Husum Wind 2025</h5>
                  <h6>Germany</h6>
                  <p>Stall Position- Hall 1, 1D01</p>
                  <KnowMore
                    to="https://www.husumwind.com/en/e/husum-wind-2025.54921"
                    title="Know More"
                    color="blue"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="event-list-sec">
            <div className="row gx-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/upcoming/CAMX.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      8<sup>th</sup> - 11<sup>th</sup> September 2025
                    </span>
                  </h6>
                  <h5>CAMX</h5>
                  <h6>Orlando, FL</h6>
                  <p>Stall position- R13</p>
                  <KnowMore
                    to="https://www.thecamx.org/conference-program"
                    title="Know More"
                    color="blue"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="events-listing-header">{/* <h3></h3> */}</div>
          <section className="event-list-sec pastevnt">
            <div className="row gx-lg-5">
              {/* <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                        <div className='event-list-date'>
                            <h5>March</h5>
                            <hr />
                            <h4>4<sup>th</sup> - 6<sup>th</sup> 2025</h4>
                        </div>
                    </div> */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/jee-world-2025/01.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      4<sup>th</sup> - 6<sup>th</sup> March 2025
                    </span>
                  </h6>
                  <h5>JEC WORLD 2025</h5>
                  <h6>Nord Villepinte Paris</h6>
                  <p>
                    JEC World 2025 has been nothing short of inspiring!
                    Recyclamine continues to make waves by showcasing our
                    sustainable solutions that are transforming the composites
                    industry. We’ve connected with more innovators, shared
                    ideas, and collaborated on advancing eco-friendly
                    manufacturing practices.
                  </p>
                  <KnowMore
                    to="/events/jec-world-2025"
                    title="View Event Details"
                    color="blue"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="event-list-sec">
            <div className="row gx-lg-5">
              {/* <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                        <div className='event-list-date'>
                            <h5>Oct</h5>
                            <hr />
                            <h4>23<sup>rd</sup> - 25<sup>th</sup> 2024</h4>
                        </div>
                    </div> */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference/Windergy-India-2024-wind-Power-Forever-(6th-International-Trade-Fair-and-Conference)-thumb.jpg`}
                    alt="Windergy India 2024 wind Power Forever (6th International Trade Fair and Conference)"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      23<sup>rd</sup> - 25<sup>th</sup> October 2024
                    </span>
                  </h6>
                  <h5>
                    Windergy India 2024 wind Power Forever (6th International
                    Trade Fair and Conference)
                  </h5>
                  <h6>Chennai Trade India</h6>
                  <p>
                    At Windergy India 2024, visit Recyclamine’s stall to
                    discover how we’re reshaping the future of wind turbines
                    with the world’s only recyclable epoxy solutions.
                  </p>
                  <KnowMore
                    to="/events/windergy-india-2024-wind-power-forever-6th-international-trade-fair-and-conference"
                    title="View Event Details"
                    color="blue"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="event-list-sec">
            <div className="row gx-lg-5">
              {/* <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                        <div className='event-list-date'>
                            <h5>Sept</h5>
                            <hr />
                            <h4>9<sup>th</sup> - 12<sup>th</sup> 2024</h4>
                        </div>
                    </div> */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-img">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/events/camx/camx-thumbnail.jpg`}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="event-list-desc">
                  <h6 className="date">
                    <span>
                      9<sup>th</sup> - 12<sup>th</sup> September 2024
                    </span>
                  </h6>
                  <h5>CAMX(The Composites and Advanced Materials Expo)</h5>
                  <h6>San Diego Convention Centre, CA</h6>
                  <p>
                    The largest composites and advanced materials event in North
                    America, where we’re showcasing Recyclamine, a revolutionary
                    technology that makes epoxy-based composites recyclable.
                  </p>
                  <KnowMore
                    to="/events/camx-the-composites-and-advanced-materials-expo"
                    title="View Event Details"
                    color="blue"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default EventsList;
