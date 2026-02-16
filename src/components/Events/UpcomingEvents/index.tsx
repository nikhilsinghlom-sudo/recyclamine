// import KnowMore from "../../TextCTA";
import FadeUp from "../../Animation/FadeUp";


export default function UpcomingEvents() {
  return (
    <section className='upcoming-events'>
      <div className='container'>
        <FadeUp duration={1} delay={0.2} threshold={0.2}>
        <div className='content-wrapper'>
          <h4>Upcoming Events</h4>
        </div>
        <div className="upcoming-event-card">
          <div className="img-placeholder">
              <img src={`${process.env.PUBLIC_URL}/images/homepage/events/upcoming/upcoming-event-post.jpg`} alt="Events and experiences" />
          </div>
          {/* <div className="caption">
            <h4>Events and experiences</h4>
            <p>Join our interesting events and experiences to get to know lots of women</p>
            <KnowMore to="#" title="See Details" color="white"/>
            <div className="knowmore mt-3">
            </div>
          </div> */}
        </div>
        </FadeUp>
      </div>
    </section>


  );
}
