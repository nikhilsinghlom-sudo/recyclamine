import React, { useEffect, useRef } from "react";
import FadeUp from "../Animation/FadeUp";

interface HeroNativeVideoProps {
    videoSrc: string;
    caption?: string;
}

const HeroNativeVideo: React.FC<HeroNativeVideoProps> = ({ videoSrc, caption }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        const sectionElement = sectionRef.current;
        if (!videoElement || !sectionElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        videoElement.play().catch(() => {
                            // Handle play promise rejection
                        });
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(sectionElement);

        return () => {
            observer.unobserve(sectionElement);
        };
    }, []);

    return (
        <section className="hero-native-video" ref={sectionRef}>
            <div className="container">
                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                    <div className="native-video-wrapper">
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            muted
                            playsInline
                            loop
                            preload="auto"
                        />
                    </div>
                    {caption && (
                        <div className="native-video-caption">
                            <p>{caption}</p>
                        </div>
                    )}
                </FadeUp>
            </div>
        </section>
    );
};

export default HeroNativeVideo;
