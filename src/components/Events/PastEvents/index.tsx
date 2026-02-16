import { Link } from "react-router-dom";
import FadeUp from "../../Animation/FadeUp";

export default function PastEvents() {
  return (
    <section id="past-events" className="past-events">
      <div className="container">
        <div className="content-wrapper">
          <FadeUp duration={1} delay={0.2} threshold={0.2}>
            <h4>Past Events</h4>
            <ul>
              <li><Link to={"/events/jec-world-2025"}>
                <p className="event-date">4<sup>th</sup> - 6<sup>th</sup>  March 2025 | Nord Villepinte Paris</p>
                <h6>JEC WORLD 2025</h6>
                <p>JEC World 2025 has been nothing short of inspiring! Recyclamine continues to make waves by showcasing our sustainable solutions that are transforming the composites industry. We’ve connected with more innovators, shared ideas, and collaborated on advancing eco-friendly manufacturing practices.</p>
              </Link></li>

              <li><Link to={"#"}>
                <p className="event-date">23<sup>rd</sup> - 25<sup>th</sup>  Oct 2024 | Chennai Trade India</p>
                <h6>Windergy India 2024 wind Power Forever (6<sup>th</sup> International Trade Fair and Conference)</h6>
                <p>At Windergy India 2024, visit Recyclamine’s stall to discover how we’re reshaping the future of wind turbines with the world’s only recyclable epoxy solutions.</p>
              </Link></li>
              <li><Link to={"#"}>
                <p className="event-date">9<sup>th</sup> - 12<sup>th</sup> Sept 2024 | San Diego Convention Centre, CA</p>
                <h6>CAMX(The Composites and Advanced Materials Expo)</h6>
                <p>The largest composites and advanced materials event in North America, where we’re showcasing Recyclamine – a revolutionary technology that makes epoxy-based composites recyclable.</p>
              </Link></li>
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
