import React from 'react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// import  { PlyrPlayerHandle } from "../VideoPlayer";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const MainSlider = () => {
    // const options: Plyr.Options = {
    //     controls: ['play-large'],
    //     settings: [],
    //     autoplay: false, 

    //     hideControls: true,
    // };

    // const [activeIndex, setActiveIndex] = useState(0);


    // Refs for all video players
    // const videoRefs = [
    //     useRef<PlyrPlayerHandle>(null),
    //     useRef<PlyrPlayerHandle>(null),
    //     useRef<PlyrPlayerHandle>(null),
    // ];

    const handleSlideChange = () => {
        const videos = document.querySelectorAll<HTMLVideoElement>(
            '.swiper-slide video'
        );

        videos.forEach((video) => {
            video.pause();
            // video.currentTime = 0; // optional: reset to start
            // video.poster = ``;
        });

        // Also reset play buttons
        const overlays = document.querySelectorAll('.play-overlay');
        overlays.forEach((overlay) => overlay.classList.remove('hidden'));
    };


    return (
        <div className='mainslider'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                loop={true}
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide>
                    <div className="video-wrapper">
                        <video
                            src={`${process.env.PUBLIC_URL}/video/Recyclamine AV 04 Mar 24 Long Ver Without VO.mp4`}
                            poster={`${process.env.PUBLIC_URL}/images/First.png`}

                            playsInline
                            preload="metadata"
                            onClick={(e) => {
                                const video = e.currentTarget;
                                video.paused ? video.play() : video.pause();
                            }}
                            onPlay={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.add('hidden');
                            }}
                            onPause={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.remove('hidden');
                            }}
                        />

                        <div className="play-overlay">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 80 80"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="38"
                                    fill="#0097D6"
                                    stroke="white"
                                    strokeWidth="0"
                                />
                                <polygon
                                    points="32,26 32,54 54,40"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>



                </SwiperSlide>

                <SwiperSlide>
                    {/* <PlyrPlayer
                        ref={videoRefs[1]}
                        provider="youtube"
                        embedId="RWXW6F0F340"
                        options={options}
                    /> */}
                    {/* <video src="../video/website adapt_Kanoa.mp4" ></video> */}
                    <div className="video-wrapper">
                        <video
                            
                            src={`${process.env.PUBLIC_URL}/video/website adapts_Holy.mp4`}
                            poster={`${process.env.PUBLIC_URL}/images/second.png`}

                            playsInline
                            preload="metadata"
                            onClick={(e) => {
                                const video = e.currentTarget;
                                video.paused ? video.play() : video.pause();
                            }}
                            onPlay={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.add('hidden');
                            }}
                            onPause={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.remove('hidden');
                            }}
                        />

                        <div className="play-overlay">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="38"
                                    fill="#0097D6"
                                    stroke="white"
                                    strokeWidth="0"
                                />
                                <polygon
                                    points="32,26 32,54 54,40"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    {/* <PlyrPlayer
                        ref={videoRefs[2]}
                        provider="youtube"
                        embedId="
                        WjvAGoG612g"
                        options={options}
                    /> */}
                    {/* <PlyrPlayer
                        ref={videoRefs[2]}
                        provider="youtube"
                        embedId="Qqc7YsIpc84"
                        options={options}
                    /> */}
                    {/* <video src="../video/website adapts_Holy.mp4" ></video> */}
                    <div className="video-wrapper">
                        <video
                            
                            src={`${process.env.PUBLIC_URL}/video/website adapt_Kanoa.mp4`}
                            // poster={`${process.env.PUBLIC_URL}/images/second.png`}

                            playsInline
                            preload="metadata"
                            onClick={(e) => {
                                const video = e.currentTarget;
                                video.paused ? video.play() : video.pause();
                            }}
                            onPlay={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.add('hidden');
                            }}
                            onPause={(e) => {
                                e.currentTarget
                                    .closest('.video-wrapper')
                                    ?.querySelector('.play-overlay')
                                    ?.classList.remove('hidden');
                            }}
                        />

                        <div className="play-overlay">
                            <svg
                                width="80"
                                height="80"
                                viewBox="0 0 80 80"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="38"
                                    fill="#0097D6"
                                    stroke="white"
                                    strokeWidth="0"
                                />
                                <polygon
                                    points="32,26 32,54 54,40"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='floating-icons'>
                <hr />
                <ul>
                    <li>
                        <Link to={"https://www.linkedin.com/company/recyclamine/"} target='_blank'>
                            <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_295_70)">
                                    <path id='bg' d="M17.8235 0.5C7.98026 0.5 0 8.48026 0 18.3235C0 28.1668 7.98026 36.1471 17.8235 36.1471C27.6668 36.1471 35.6471 28.1668 35.6471 18.3235C35.6471 8.48026 27.6668 0.5 17.8235 0.5Z" fill="#F9F9F9" fillOpacity="0.15" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.15 15.2892H13.1327C12.2684 15.2892 11.708 14.7238 11.708 14.007C11.708 13.2763 12.2849 12.7227 13.1665 12.7227C14.0474 12.7227 14.589 13.2749 14.6063 14.0049C14.6063 14.7217 14.0474 15.2892 13.15 15.2892ZM23.9581 23.6116H21.2506V19.7837C21.2506 18.7817 20.8271 18.0977 19.8958 18.0977C19.1835 18.0977 18.7874 18.5593 18.603 19.0041C18.5421 19.1447 18.5432 19.334 18.5443 19.529C18.5445 19.5555 18.5446 19.5821 18.5446 19.6087V23.6116H15.8624C15.8624 23.6116 15.897 16.8308 15.8624 16.2144H18.5446V17.3753C18.7031 16.8677 19.5602 16.1433 20.928 16.1433C22.6249 16.1433 23.9581 17.2073 23.9581 19.4985V23.6116ZM14.4046 16.2144H12.017V23.6116H14.4046V16.2144Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_295_70" x="-15" y="-14.5" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_295_70" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_295_70" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://www.youtube.com/@RecyclamineAdityaBirla"} target='_blank'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_493_581)">
                                    <path id='bg' d="M17.8235 35.6471C27.6672 35.6471 35.6471 27.6672 35.6471 17.8235C35.6471 7.97987 27.6672 0 17.8235 0C7.97987 0 0 7.97987 0 17.8235C0 27.6672 7.97987 35.6471 17.8235 35.6471Z" fill="#F9F9F9" fillOpacity="0.15" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.9231 11.418C25.7406 11.648 26.3844 12.3256 26.6029 13.1861C27 14.7458 27 18 27 18C27 18 27 21.2541 26.6029 22.8139C26.3844 23.6744 25.7406 24.352 24.9231 24.5821C23.4415 25 17.5 25 17.5 25C17.5 25 11.5585 25 10.0768 24.5821C9.25929 24.352 8.61545 23.6744 8.39695 22.8139C8 21.2541 8 18 8 18C8 18 8 14.7458 8.39695 13.1861C8.61545 12.3256 9.25929 11.648 10.0768 11.418C11.5585 11 17.5 11 17.5 11C17.5 11 23.4415 11 24.9231 11.418ZM15.7188 15.2608V21.3478L20.4688 18.3044L15.7188 15.2608Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_493_581" x="-15" y="-15" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_493_581" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_493_581" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://www.facebook.com/recyclamine "} target='_blank'>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_491_543)">
                                    <path id='bg' d="M17.8235 35.6471C27.6672 35.6471 35.6471 27.6672 35.6471 17.8235C35.6471 7.97987 27.6672 0 17.8235 0C7.97987 0 0 7.97987 0 17.8235C0 27.6672 7.97987 35.6471 17.8235 35.6471Z" fill="#F9F9F9" fillOpacity="0.15" />
                                </g>
                                <path d="M18.2715 14.3335C18.2715 14.4771 18.2715 14.945 18.2715 15.6098H20.6444L20.3871 17.6472H18.2715C18.2715 20.7894 18.2715 25 18.2715 25H15.4633C15.4633 25 15.4633 20.8451 15.4633 17.6472H14V15.6098H15.4633C15.4633 14.8018 15.4633 14.2272 15.4633 14.0673C15.4633 13.3051 15.4036 12.9434 15.7399 12.3528C16.0763 11.7622 17.0252 10.9815 18.6664 11.0003C20.308 11.0198 21 11.1719 21 11.1719L20.6444 13.3434C20.6444 13.3434 19.5962 13.0767 19.0816 13.1718C18.5678 13.2668 18.2715 13.5717 18.2715 14.3335Z" fill="white" />
                                <defs>
                                    <filter id="filter0_b_491_543" x="-15" y="-15" width="65.6475" height="65.6484" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_491_543" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_491_543" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='scrolldown'>
                <button type='button'>Scroll Down <img src={`${process.env.PUBLIC_URL}/images/icons/down-arrow-white.svg`} alt='Scroll Down' /></button>
            </div>

        </div>
    );
};

export default MainSlider;
