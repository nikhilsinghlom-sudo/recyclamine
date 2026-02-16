import Breadcrumb from "../Breadcrumb";

interface InsideHeaderProps {
    imgsrc: string;
    alt_title?: string;
    title?: string;
    className?: string;
}

const InsideHeader: React.FC<InsideHeaderProps> = ({ imgsrc, alt_title, title, className }) => {
    return (
        <section className={`insideheader ${className}`}>
            <div className="bannerimg">
                <img src={imgsrc} alt={alt_title} />
            </div>
             {title && (
                <div className="bannerheading">
                    <div className="container">
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                </div>
             )}

            <div className="caption">
                <div className="container">
                    <Breadcrumb />
                </div>
            </div>

        </section>
    );
};

export default InsideHeader;
