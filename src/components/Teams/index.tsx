// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/types';

import { Swiper, SwiperSlide } from 'swiper/react';
import FadeUp from "../Animation/FadeUp";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useState, useCallback } from 'react';



// interface TeamsProps{
//     name: string,
//     profile_img: string,
//     bio: string,
// }


const Teams: React.FC = () => {


   const [swiperRef, setSwiperRef] = useState<SwiperClass>();

   const handlePrevious = useCallback(() => {
      swiperRef?.slidePrev();
   }, [swiperRef]);

   const handleNext = useCallback(() => {
      swiperRef?.slideNext();
   }, [swiperRef]);



   return (
      <section className="teams">
         <div className="container">
            <div className="team-header">
               <div className='row align-items-center'>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
                     <FadeUp duration={1} delay={0.2} threshold={0.2}>
                        <h3>The Team</h3>
                        <p>The driving force behind Recyclamine includes chemists, engineers, and sustainability experts, committed to transforming the future of composites with a focus on sustainable circularity. Get in touch with below key points of contact for any queries or collaborations.</p>
                     </FadeUp>
                  </div>
                  <div className='col-12 col-sm-12 col-md-12 col-lg-2 offset-lg-2'>
                     <div className='swiper-nav'>
                        <button type='button' onClick={handlePrevious}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3337 17.3346H9.51366L14.3577 23.148C14.8297 23.7133 14.7523 24.5546 14.187 25.0253C13.6203 25.4973 12.7803 25.42 12.3083 24.8546L5.64166 16.8546C5.58966 16.792 5.56433 16.7186 5.52566 16.6493C5.49366 16.5933 5.45499 16.5453 5.43099 16.484C5.37099 16.3306 5.33499 16.1693 5.33499 16.0066C5.33499 16.0053 5.33366 16.0026 5.33366 16.0013C5.33366 16 5.33499 15.9973 5.33499 15.996C5.33499 15.8333 5.37099 15.672 5.43099 15.5186C5.45499 15.4573 5.49366 15.4093 5.52566 15.3533C5.56433 15.284 5.58966 15.2106 5.64166 15.148L12.3083 7.14797C12.5737 6.83197 12.9523 6.66797 13.3337 6.66797C13.635 6.66797 13.9377 6.7693 14.187 6.9773C14.7523 7.44797 14.8297 8.2893 14.3577 8.85464L9.51366 14.668H25.3337C26.0697 14.668 26.667 15.2653 26.667 16.0013C26.667 16.7373 26.0697 17.3346 25.3337 17.3346" fill="white" />
                           <mask id="mask0_349_248" maskUnits="userSpaceOnUse" x="5" y="6" width="22" height="20">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3337 17.3346H9.51366L14.3577 23.148C14.8297 23.7133 14.7523 24.5546 14.187 25.0253C13.6203 25.4973 12.7803 25.42 12.3083 24.8546L5.64166 16.8546C5.58966 16.792 5.56433 16.7186 5.52566 16.6493C5.49366 16.5933 5.45499 16.5453 5.43099 16.484C5.37099 16.3306 5.33499 16.1693 5.33499 16.0066C5.33499 16.0053 5.33366 16.0026 5.33366 16.0013C5.33366 16 5.33499 15.9973 5.33499 15.996C5.33499 15.8333 5.37099 15.672 5.43099 15.5186C5.45499 15.4573 5.49366 15.4093 5.52566 15.3533C5.56433 15.284 5.58966 15.2106 5.64166 15.148L12.3083 7.14797C12.5737 6.83197 12.9523 6.66797 13.3337 6.66797C13.635 6.66797 13.9377 6.7693 14.187 6.9773C14.7523 7.44797 14.8297 8.2893 14.3577 8.85464L9.51366 14.668H25.3337C26.0697 14.668 26.667 15.2653 26.667 16.0013C26.667 16.7373 26.0697 17.3346 25.3337 17.3346" fill="white" />
                           </mask>
                           <g mask="url(#mask0_349_248)">
                              <rect width="32" height="32" transform="matrix(-1 0 0 1 32 0)" fill="white" />
                           </g>
                        </svg></button>
                        <button type='button' onClick={handleNext}><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66634 14.6654L22.4863 14.6654L17.6423 8.85203C17.1703 8.2867 17.2477 7.44536 17.813 6.9747C18.3797 6.5027 19.2197 6.58003 19.6917 7.14536L26.3583 15.1454C26.4103 15.208 26.4357 15.2814 26.4743 15.3507C26.5063 15.4067 26.545 15.4547 26.569 15.516C26.629 15.6694 26.665 15.8307 26.665 15.9934C26.665 15.9947 26.6663 15.9974 26.6663 15.9987C26.6663 16 26.665 16.0027 26.665 16.004C26.665 16.1667 26.629 16.328 26.569 16.4814C26.545 16.5427 26.5063 16.5907 26.4743 16.6467C26.4357 16.716 26.4103 16.7894 26.3583 16.852L19.6917 24.852C19.4263 25.168 19.0477 25.332 18.6663 25.332C18.365 25.332 18.0623 25.2307 17.813 25.0227C17.2477 24.552 17.1703 23.7107 17.6423 23.1454L22.4863 17.332H6.66634C5.93034 17.332 5.33301 16.7347 5.33301 15.9987C5.33301 15.2627 5.93034 14.6654 6.66634 14.6654" fill="white" />
                           <mask id="mask0_349_250" maskUnits="userSpaceOnUse" x="5" y="6" width="22" height="20">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66634 14.6654L22.4863 14.6654L17.6423 8.85203C17.1703 8.2867 17.2477 7.44536 17.813 6.9747C18.3797 6.5027 19.2197 6.58003 19.6917 7.14536L26.3583 15.1454C26.4103 15.208 26.4357 15.2814 26.4743 15.3507C26.5063 15.4067 26.545 15.4547 26.569 15.516C26.629 15.6694 26.665 15.8307 26.665 15.9934C26.665 15.9947 26.6663 15.9974 26.6663 15.9987C26.6663 16 26.665 16.0027 26.665 16.004C26.665 16.1667 26.629 16.328 26.569 16.4814C26.545 16.5427 26.5063 16.5907 26.4743 16.6467C26.4357 16.716 26.4103 16.7894 26.3583 16.852L19.6917 24.852C19.4263 25.168 19.0477 25.332 18.6663 25.332C18.365 25.332 18.0623 25.2307 17.813 25.0227C17.2477 24.552 17.1703 23.7107 17.6423 23.1454L22.4863 17.332H6.66634C5.93034 17.332 5.33301 16.7347 5.33301 15.9987C5.33301 15.2627 5.93034 14.6654 6.66634 14.6654" fill="white" />
                           </mask>
                           <g mask="url(#mask0_349_250)">
                              <rect width="32" height="32" transform="matrix(1 0 0 -1 0 32)" fill="white" />
                           </g>
                        </svg>
                        </button>
                     </div>
                     
                  </div>
               </div>
            </div>


            <FadeUp duration={1} delay={0.2} threshold={0.2}>
               <Swiper onSwiper={setSwiperRef}
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  // navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }} 
                  breakpoints={{
                     // when window width is >= 640px
                     640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                     },
                     // when window width is >= 768px
                     768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     // when window width is >= 1024px
                     1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                     },
                  }}
                  
                  
                  
                  >
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/01.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/02.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/03.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/01.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/02.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide>
                     <div className="team-card">
                        <div className="team-img">
                           <img src={`${process.env.PUBLIC_URL}/images/about/teams/03.jpg`} alt="" />
                        </div>
                        <div className="team-desc">
                           <h5>Name Here</h5>
                           <p>Designation Here</p>
                        </div>
                     </div>
                  </SwiperSlide>
               </Swiper>
            </FadeUp>




            {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
               <div className="col">
                  <div className="team-card">
                      <div className="team-img">
                        <img src={`${process.env.PUBLIC_URL}/images/about/teams/01.jpg`} alt="" />
                      </div>
                      <div className="team-desc">
                        <h5>Sea Delivery <span>01</span></h5>
                        <p>The sea freight service has grown considerably in recent years.</p>
                      </div>
                  </div>
               </div>

               <div className="col">
                  <div className="team-card">
                      <div className="team-img">
                        <img src={`${process.env.PUBLIC_URL}/images/about/teams/02.jpg`} alt="" />
                      </div>
                      <div className="team-desc">
                        <h5>Ground Shipping <span>02</span></h5>
                        <p>Coordinated transportation in all countries around the world</p>
                      </div>
                  </div>
               </div>

               <div className="col">
                  <div className="team-card">
                      <div className="team-img">
                        <img src={`${process.env.PUBLIC_URL}/images/about/teams/03.jpg`} alt="" />
                      </div>
                      <div className="team-desc">
                        <h5>Air Freight <span>03</span></h5>
                        <p>We’ve become expert in freight transportation by air and all its</p>
                      </div>
                  </div>
               </div>


            </div> */}




         </div>
      </section>
   )
}


export default Teams;
