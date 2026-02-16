import FadeUp from "../Animation/FadeUp"

export default function HomeApplication() {
    return (
        <section className='home-application'>
            <div className="container">
                <h3>Applications</h3>
                <p>Recyclamine epoxy systems can be easily applied into various types of composite manufacturing processes.</p>
                <div className="row gx-md-5 row-cols-2 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <FadeUp duration={1} delay={0.1} threshold={0.1}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/wet-layup.jpg`} alt="Wet Layup" />
                                </div>
                                <h6>Wet Layup</h6>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="col">
                        <FadeUp duration={1} delay={0.2} threshold={0.2}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/infusion.jpg`} alt="Infusion" />
                                </div>
                                <h6>Infusion</h6>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="col">
                        <FadeUp duration={1} delay={0.3} threshold={0.3}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/compression-moulding.jpg`} alt="Compression Molding" />
                                </div>
                                <h6>Compression Molding</h6>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="col">
                        <FadeUp duration={1} delay={0.4} threshold={0.4}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/rtm-vrtm.jpg`} alt="RTM/VRTM" />
                                </div>
                                <h6>RTM/VRTM</h6>
                            </div>
                        </FadeUp>
                    </div>
                    {/* <div className="col">
                        <FadeUp duration={1} delay={0.5} threshold={0.5}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/prepreg.jpg`} alt="Prepreg" />
                                </div>
                                <h6>Prepreg</h6>
                            </div>
                        </FadeUp>
                    </div> */}
                    {/* <div className="col">
                        <FadeUp duration={1} delay={0.6} threshold={0.6}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/smc.jpg`} alt="SMC" />
                                </div>
                                <h6>SMC</h6>
                            </div>
                        </FadeUp>
                    </div> */}
                    <div className="col">
                        <FadeUp duration={1} delay={0.7} threshold={0.7}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/filament-winding.jpg`} alt="Filament Winding" />
                                </div>
                                <h6>Filament Winding</h6>
                            </div>
                        </FadeUp>
                    </div>
                    <div className="col">
                        <FadeUp duration={1} delay={0.8} threshold={0.8}>
                            <div className="home-application-card">
                                <div className="home-application-card-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/homepage/applications/pultrsion.jpg`} alt="Pultrusion" />
                                </div>
                                <h6>Pultrusion</h6>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
