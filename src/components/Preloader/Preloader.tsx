import React from 'react';
import './Preloader.scss';

const Preloader = () => {
    return (
        <div className="preloader">
            <svg width="52" height="65" viewBox="0 0 52 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.0538 6.59961H40.8456V11.7099H45.9435V52.5428H22.5502L25.5395 49.5535L21.9176 45.9441L15.3188 52.5428V52.5552L12.7637 55.1104L21.9176 64.2643L25.5271 60.6424L22.5378 57.6531H51.0538V6.59961Z" fill="white" />
                <path d="M5.11031 11.7091H28.5036L25.5144 14.6984L29.1238 18.3078L35.735 11.7091L38.2901 9.15391L29.1362 0L25.5268 3.60947L28.516 6.59875H0V57.6523H10.2082V52.542H5.11031V11.7091Z" fill="white" />
            </svg>
            {/* <div className="spinner"></div> */}
        </div>
    );
};

export default Preloader;
