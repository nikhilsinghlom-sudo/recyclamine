import React, { FC } from 'react';


interface ImageFrameProps {
    src: string; // URL of the image
    alt?: string; // Alt text for the image
    className?: string; // Additional class names for the frame
}

const ImageFrame: FC<ImageFrameProps> = ({
    src,
    alt = 'Trusted Partner for Your Business ',
    className = '',
}) => {
    return (
        <div
            className={`image-frame ${className}`}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageFrame;
