interface HeroStatementProps{
    content: string;
    title?: string;
    sectionclass?: string;
}

const HeroStatement: React.FC<HeroStatementProps> = ({ title, sectionclass, content}) => {
    return (

        <section className={`hero-statement grey ${sectionclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="eyebrow-text">
                            <h5><img src={`${process.env.PUBLIC_URL}/images/Recyclamine-Icon-Colored.svg`} alt="Logo" /> {title}</h5>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="hero-statement-desc">
                            <h4>{content}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroStatement;