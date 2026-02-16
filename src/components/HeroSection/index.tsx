import { Swiper, SwiperSlide } from 'swiper/react';
import KnowMore from '../TextCTA';
import FadeUp from '../Animation/FadeUp';

// Import Swiper styles
import 'swiper/css';

export default function HeroSection() {
    return (
        <div className='herosection'>
            <Swiper spaceBetween={0} slidesPerView={1} >
                <SwiperSlide>
                    {/* <img src={`${process.env.PUBLIC_URL}/images/homepage/hero-section/the-planet-is-mine.jpg`} alt="The Planet is Mine" /> */}
                    
                    <video className="lazy" loop muted autoPlay playsInline>
                        <source src={`${process.env.PUBLIC_URL}/video/The-Planet-is-Mine.mp4`} type="video/mp4" />
                        Your browser does not support the HTML5 Video element.
                    </video>

                    </SwiperSlide>
                <div className='caption'>
                    <div className='container'>
                        <div className='inside-container'>
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                            <h2>The Planet is Mine</h2>
                                <p>At Recyclamine, we believe the future of our planet is in our hands. Our commitment goes beyond creating eco-friendly materials; we are leading the charge in making a meaningful environmental impact.</p>
                                <KnowMore to="sustainability" title="Know More" color="white" />
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

