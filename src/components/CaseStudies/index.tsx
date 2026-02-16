import ImageFrame from '../ImageFrame';
import KnowMore from '../TextCTA';
import FadeUp from '../Animation/FadeUp';
// import { useState, useCallback } from 'react';

// import Swiper core and required modules
import { Pagination, EffectFade } from 'swiper/modules';
// import { Swiper as SwiperClass } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

interface CaseStudy {
    headingtype: string;
    subheading: string;
    heading: string;
    description: React.ReactNode;
    link_title: string;
    url: string;
    imgsrc: string;
    points?: any[];
}

interface CaseStudiesProps {
    caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ caseStudies }) => {
    // const [swiperRef, setSwiperRef] = useState<SwiperClass>();

    // const handlePrevious = useCallback(() => {
    //     swiperRef?.slidePrev();
    // }, [swiperRef]);

    // const handleNext = useCallback(() => {
    //     swiperRef?.slideNext();
    // }, [swiperRef]);

    return (

        
        <section className="casestudies">
            <div className="container">
                    <Swiper
                        // onSwiper={setSwiperRef} 
                        // install Swiper modules
                        modules={[ Pagination, EffectFade]} spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} effect={"fade"} speed={500}>
                        {caseStudies.map((study, index) => (
                            <SwiperSlide key={index}>
                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 order-lg-1 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="image-wrapper">
                                            <ImageFrame className="white" src={study.imgsrc} alt={study.heading} />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="content-wrapper">
                                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                                {study.subheading && (
                                                    <div className="eyebrow-text">
                                                        <h5>
                                                            <img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" /> {study.subheading}
                                                        </h5>
                                                    </div>
                                                )}
                                                {study.headingtype === 'large' ? (
                                                    <h4>{study.heading}</h4>
                                                ) : (
                                                    <h4>{study.heading}</h4>
                                                )}
                                                <p>{study.description}</p>

                                                {study.points && study.points.length > 0 && (
                                                    <ul className='points'>
                                                        {study.points.map((point, index) => (
                                                            <li key={index}>
                                                                <span><img className='icon' src={`${process.env.PUBLIC_URL}/images/icons/${point.icon}`} alt="" /></span> {point.description}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {study.url && (
                                                    <KnowMore to={study.url} title={study.link_title} color="blue" />
                                                )}
                                            </FadeUp>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
    );
};

export default CaseStudies;
