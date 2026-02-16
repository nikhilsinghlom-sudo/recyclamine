import { Link } from 'react-router-dom'
import InsideHeader from '../../components/InsideHeader'
import SplitHeroSection from '../../components/SplitHeroSection'
import FadeUp from '../../components/Animation/FadeUp'

export default function collabUniv() {
    return (
        <>
            <InsideHeader imgsrc={`${process.env.PUBLIC_URL}/images/collaboration/collaboration-banner.jpg`} title='Collaboration with Universities' alt_title="Collaboration With Universities" />

            <SplitHeroSection theme='white-spacing' layout_order='reverse' contenttype='' subheading='' heading='Collaboration with Universities' description={
                <>
                    Introducing Recyclamine, a ground-breaking advancement in thermoset composites that revitalizes non-recyclable epoxy composites, establishing a path to perpetual recyclability. Recyclamine Technology works by…
                </>} url='' imgsrc={`${process.env.PUBLIC_URL}/images/collaboration/Collaboration with Universities.jpg`} />


            <section className='education-institutions'>
                <div className='container'>
                    <div className='sectionheading'>
                        <h4>Partner with leading education institutions</h4>
                        <p>Recyclamine pairs with private market service providers, enabling you to streamline operations and workflows with your preferred partners.</p>
                    </div>
                    <ul>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand1.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand2.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand3.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand4.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand5.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand6.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand7.svg`} alt="" /></li>
                        <li><img src={`${process.env.PUBLIC_URL}/images/collaboration/education-institutions/brand8.svg`} alt="" /></li>
                    </ul>
                </div>
            </section>


            <section className='collaborate-with-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 order-lg-1'>
                            <div className='collaborate'>
                                <img src={`${process.env.PUBLIC_URL}/images/collaboration/Collaborate with Us.jpg`} alt="Collaborate with Us" />
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-12 col-lg-6 order-lg-12'>
                            <div className='collaborate-intro'>
                                <h4>Collaborate with Us</h4>
                                <p>ground-breaking advancement in thermoset composites that revitalizes non-recyclable epoxy composites.</p>
                            </div>
                            <div className='collaborate-form'>
                                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="fname" placeholder="First name" />
                                                    <label htmlFor="fname">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="lname" placeholder="Last name" />
                                                    <label htmlFor="lname">Last name</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-floating withicon">
                                                    <span className="input-icon"><img src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`} alt="Email" /></span>
                                                    <input type="email" className="form-control" id="email" placeholder="Work email" />
                                                    <label htmlFor="email">Work email</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Notes (optional)" id="message"></textarea>
                                                    <label htmlFor="message">Notes (optional)</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                                    <label className="form-check-label" htmlFor="invalidCheck">
                                                        I agree to Recyclamine <Link to={"#"}>Terms of Service</Link> and <Link to={"#"}>Privacy Policy</Link>.
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <button className="btn btn-blue" type="button">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </FadeUp>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}
