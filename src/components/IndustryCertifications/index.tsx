import FadeUp from "../Animation/FadeUp"

export default function IndustryCertifications() {
    return (
        <section className='industry-certifications'>
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-12 col-sm-12 col-md-4">
                        <div className="industry-certifications-lhs">
                            <h4>Industry Certifications</h4>
                            <p>Recyclamine products are certified and registered under appropriate authorities such as REACH, TSCA, etc. Selected systems are also DNV-approved.</p>
                        </div>
                 
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 offset-md-1">
                        <div className="industry-certifications-rhs">
                            <ul className="row gx-md-5 row-cols-auto row-cols-sm-auto row-cols-md-auto">
                                <li className="col"><figure><FadeUp duration={1} delay={0.1} threshold={0.1}><img src={`${process.env.PUBLIC_URL}/images/homepage/industry-certifications/reach-compliance.png`} alt="Reach Compliance" /></FadeUp></figure></li>
                                <li className="col"><figure><FadeUp duration={1} delay={0.2} threshold={0.2}><img src={`${process.env.PUBLIC_URL}/images/homepage/industry-certifications/tsca-certified.png`} alt="TSCA Certified" /></FadeUp></figure></li>
                                <li className="col"><figure><FadeUp duration={1} delay={0.3} threshold={0.3}><img src={`${process.env.PUBLIC_URL}/images/homepage/industry-certifications/dnv.png`} alt="DNV" /></FadeUp></figure></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
