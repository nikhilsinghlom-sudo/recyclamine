import FadeUp from "../Animation/FadeUp"


export default function Process() {
  return (
    <section className='process-diagram'>
      <div className="container">
        <h3>Why Recyclamine?</h3>

        <div className="row gx-md-5 row-cols-1 row-cols-sm-1 row-cols-md-3">
          <div className="col">
            <FadeUp duration={1} delay={0.1} threshold={0.1}><div className="process-card">
              <img src={`${process.env.PUBLIC_URL}/images/icons/svg/designed-for-circularity.svg`} alt="Cost-effective Recovery and Reuse " />
              <h6>Cost-effective Recovery and Reuse </h6>
              <p>Recyclamine enables recovery of high-value carbon and glass fibres, and transforms the recovered epoxy into reusable thermoplastic ready to remould, reuse, and repeat.</p>
            </div>

            </FadeUp>
          </div>
          <div className="col">
            <FadeUp duration={1} delay={0.2} threshold={0.2}>
              <div className="process-card">
                <img src={`${process.env.PUBLIC_URL}/images/icons/svg/ease-of-adoption.svg`} alt="Ease of Adoption " />
                <h6>Ease of Adoption </h6>
                <p>Seamlessly integrates into existing processes. In most cases, no process changes are needed, making the transition smooth, cost-effective, and low-risk for manufacturers.</p>
              </div>
            </FadeUp>
          </div>
          <div className="col">
            <FadeUp duration={1} delay={0.3} threshold={0.3}>
              <div className="process-card">
                <img src={`${process.env.PUBLIC_URL}/images/icons/svg/versatile-applications.svg`} alt="Versatile Applications " />
                <h6>Versatile Applications </h6>
                <p>Recyclamine can be used in an array of manufacturing processes such as infusion, wet lay-up, RTM, wet pressing, filament winding and pultrusion.</p>
              </div>
            </FadeUp>
          </div>
          <div className="col">
            <FadeUp duration={1} delay={0.4} threshold={0.4}>
              <div className="process-card">
                <img src={`${process.env.PUBLIC_URL}/images/icons/svg/performance-driven.svg`} alt="Performance-driven" />
                <h6>Performance-driven</h6>
                <p>Recyclamine epoxy delivers high performance — Just like conventional epoxy resins.</p>
              </div>

            </FadeUp>
          </div>
          <div className="col">
            <FadeUp duration={1} delay={0.5} threshold={0.5}>
              <div className="process-card">
                <img src={`${process.env.PUBLIC_URL}/images/icons/svg/low-carbon-footprint.svg`} alt="Low Carbon Footprint " />
                <h6>Low Carbon Footprint </h6>
                <p>Recyclamine significantly reduces carbon footprint, material waste, and reliance on virgin raw materials. End-of-life parts can be recycled, recovering valuable fibre and resin, supporting sustainability and reducing total lifecycle impact.</p>
              </div>
            </FadeUp>
          </div>
          <div className="col">
            <FadeUp duration={1} delay={0.6} threshold={0.6}>
              <div className="process-card">
                <img src={`${process.env.PUBLIC_URL}/images/icons/svg/certified-for-trust-and-excellence.svg`} alt="Certified for trust and excellence" />
                <h6>Certified for trust and excellence</h6>
                <p>Recyclamine is certified under REACH, TSCA, and selected systems are also DNV approved — ensuring global compliance and quality.</p>
              </div>
            </FadeUp>
          </div>
        </div>

        <ul>
          {/* <li>
            <FadeUp duration={1} delay={0.1} threshold={0.1}>
              <img src={`${process.env.PUBLIC_URL}/images/icons/svg/low-carbon-footprint.svg`} alt="Low Carbon Footprint " />
              <h6>Low Carbon Footprint </h6>
              <p>Recyclamine significantly reduces carbon footprint, material waste, and reliance on virgin raw materials. End-of-life parts can be recycled, recovering valuable fibre and resin, supporting sustainability and reducing total lifecycle impact.</p>
            </FadeUp>
            </li> */}

          {/* <li>
            <FadeUp duration={1} delay={0.2} threshold={0.2}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Versatile Application.svg`} alt="Versatile Application" />
              <p>Versatile Application</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.3} threshold={0.3}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Valuable Recovered Material.svg`} alt="Valuable Recovered Material" />
              <p>Valuable Recovered Material</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.4} threshold={0.4}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Performance Driven.svg`} alt="Performance Driven" />
              <p>Performance Driven</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.5} threshold={0.5}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Value AT The End of The Life.svg`} alt="Value AT The End of The Life" />
              <p>Value at the end of its lifecycle</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.6} threshold={0.6}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Certified for Trust and Excellence.svg`} alt="Certified for Trust and Excellence" />
              <p>Certified for Trust and Excellence</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.7} threshold={0.7}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Zero Waste Manufacturing.svg`} alt="Zero Waste Manufacturing" />
              <p>Zero Waste Manufacturing</p>
            </FadeUp>
            </li>
          <li>
            <FadeUp duration={1} delay={0.8} threshold={0.8}>
              <img src={`${process.env.PUBLIC_URL}/images/homepage/process/Efficient Recycling Process.svg`} alt="Efficient Recycling Process" />
              <p>Efficient Recycling Process</p>
            </FadeUp>
            </li> */}


        </ul>
      </div>


      {/* <FadeUp duration={1} delay={0.2} threshold={0.2}><img src={`${process.env.PUBLIC_URL}/images/homepage/process/process-diagram.svg`} alt='Recyclamine' /></FadeUp> */}



    </section>
  )
}
