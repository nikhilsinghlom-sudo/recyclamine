import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Modal from "../Modal";
import FadeUp from "../Animation/FadeUp";
import PlyrPlayer from "../VideoPlayer";

// import KnowMore from "../TextCTA";





export default function HeroVideo() {


    const options: Plyr.Options = {
        controls: ['play-large', 'play', 'progress', 'current-time', 'volume',  'fullscreen'], // Custom controls
        settings: ["quality", "speed", "loop"], // Settings options
        autoplay: false, // Autoplay option
        // muted: false, // Mute video initially
        // clickToPlay: true
        hideControls: true,
    };



    // const [showModal, setShowModal] = useState<boolean>(false);

    // function toggleModal() {
    //     setShowModal(!showModal);
    //     }



    // Disable scroll when menu is open
    // useEffect(() => {
    //     if (showModal) {
    //         document.body.classList.add('no-scroll');
    //     } else {
    //         document.body.classList.remove('no-scroll');
    //     }

    //     // Cleanup on unmount
    //     return () => {
    //         document.body.classList.remove('no-scroll');
    //     };
    // }, [showModal]);





    return (
        <section className='hero-video'>
            <div className='container'>
                <div className='hero-video-intro'><FadeUp duration={1} delay={0.2} threshold={0.2}>
                    <div className='row align-items-end'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <h4>Ready to join hands to protect our planet and ensure a sustainable future for generations to come.</h4>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-auto ms-lg-auto'>
                            <div className="circlelink">
                                <Link to={"/sustainability#ThePlanet"}><img src={`${process.env.PUBLIC_URL}/images/icons/circle-arrow-white.svg`} alt=""/></Link>
                            </div>
                        </div>
                    </div>
                    </FadeUp>
                </div>
            </div>
            <div className='container'>
                <div className='videocover'>
                    <FadeUp duration={1} delay={0.2} threshold={0.2}>

                        {/* Local Video */}
                        {/* <PlyrPlayer
                            videoUrl={`${process.env.PUBLIC_URL}/video/The-Planet-is-Mine.mp4`}
                            options={options}
                        /> */}

                        {/* YouTube Video */}
                        <PlyrPlayer
                            provider="youtube"
                            embedId="gdNd6l5E_jw"
                            options={options}
                        />

                        {/* Vimeo Video */}
                        {/* <PlyrPlayer
                            provider="vimeo"
                            embedId="76979871"
                            options={options}
                        /> */}




                        {/* <PlyrPlayer videoUrl={`${process.env.PUBLIC_URL}/video/The-Planet-is-Mine.mp4`} options={options} /> */}

                    {/* <img src={`${process.env.PUBLIC_URL}/images/homepage/hero-video/hero-video-cover.jpg`} alt="Video Cover" />
                    <div className='playbtn'>
                        <Link to={"#"} onClick={toggleModal}>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/play-icon.svg`} alt="Play Button" />
                        </Link>

                    </div> */}
                    </FadeUp>
                </div>
           </div>

            {/* <Modal open={showModal} onClose={toggleModal}>
                <div className="d-flex align-items-center justify-content-center">
                    <h3>Video here</h3>
                </div>
            </Modal> */}




        </section>
    )
}
