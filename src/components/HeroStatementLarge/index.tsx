interface HeroStatementLargeProps {
    content: string;
    title?: string;
    sectionclass?: string;
}

const HeroStatementLarge: React.FC<HeroStatementLargeProps> = ({ title, sectionclass, content }) => {
    return (
        <section className={`hero-statement ${sectionclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="eyebrow-text">
                            <h4 className="text-blue">{title}</h4>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="hero-statement-desc">
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroStatementLarge;