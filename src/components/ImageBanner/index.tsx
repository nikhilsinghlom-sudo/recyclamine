
interface ImageBannerProps {
    imgsrc: string;
    alt_title: string;
}


const ImageBanner: React.FC<ImageBannerProps> = ({ imgsrc, alt_title }) => {
    return (
        <> 
       <section className="imagebanner">
             <img src={imgsrc} alt={alt_title} />
        </section>
        </>
    )
}

export default ImageBanner;
