import PastEvents from './PastEvents';
import UpcomingEvents from './UpcomingEvents';


export default function index() {
   return (
      <section className='events'>
         <div className='container'>
            <div className="row g-0">
               <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-1">
                  <UpcomingEvents />
               </div>
               <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-12">
                  <PastEvents />
               </div>
            </div>
         </div>
      </section>
   );
}
