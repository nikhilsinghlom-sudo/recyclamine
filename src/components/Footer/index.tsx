import { Link } from 'react-router-dom';

export default function Footer() {

    // const today = new Date();
    // const year = today.getFullYear();


    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className='brand-logo'>
                            <Link to={"/"}><img src={`${process.env.PUBLIC_URL}/images/recyclamine-dark-logo.svg`} alt='Recyclamine'></img></Link>
                        </div>
                        <div className="footer-about">
                            <p>Recyclamine is the newest offering from Aditya Birla Advanced Materials, a global supplier and a leading innovator of epoxy products.</p>
                            {/* <p>Recyclamine is the newest offering from the globally leading supplier and innovator of epoxy products, Aditya Birla Advanced Materials. With a reach that spans over 90 countries, Advanced Materials is among the top 3 epoxy players in the world. Our products are crafted in state-of-the-art facilities in Thailand, India, Germany, and the US.</p> */}
                        </div>
                        <div className='footer-social-icons'>
                            <ul>
                                <li><Link to={'https://www.linkedin.com/company/recyclamine/'} target='_blank' aria-label="LinkedIn "><img src={`${process.env.PUBLIC_URL}/images/icons/linkedin-dark.svg`} alt="LinkedIn " /></Link></li>
                                <li><Link to={'https://www.youtube.com/@RecyclamineAdityaBirla'} target='_blank' aria-label="YouTube"><img src={`${process.env.PUBLIC_URL}/images/icons/youtube-dark.svg`} alt="YouTube" /></Link></li>
                                <li><Link to={'https://www.facebook.com/recyclamine'} target='_blank' aria-label="Facebook "><img src={`${process.env.PUBLIC_URL}/images/icons/facebook-dark.svg`} alt="Facebook " /></Link></li>
                                <li><Link to={'https://www.instagram.com/recyclamine_am/'} target='_blank' aria-label="Instagram"><img src={`${process.env.PUBLIC_URL}/images/icons/instagram-dark.svg`} alt="Instagram" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
                            <div className="col col-lg-8 pages-links">
                                <h5>Quick Links</h5>
                                <ul className="footer-links">
                                    <li><Link to={'/recyclamine-overview'}>Recyclamine Overview</Link></li>
                                    <li><Link to={'/the-recyclamine-technology'}>The Recyclamine Technology</Link></li>
                                    <li><Link to={'/industries'}>Industries and Applications</Link></li>
                                    <li><Link to={'/sustainability'}>Sustainability</Link></li>
                                    <li><Link to={'/success-stories'}>Success Stories</Link></li>
                                    <li><Link to={'/articles-and-blogs'}>Articles and Blogs</Link></li>
                                    <li><Link to={'/events'}>Events</Link></li>
                                    <li><Link to={'/contact-us'}>Contact Us</Link></li>
                                    <li><Link to={`${process.env.PUBLIC_URL}/RCY0225.pdf`} target='_blank'>Download Brochure</Link></li>
                                </ul>
                            </div>
                            {/* <div className="col">
                                <h5>Other Page</h5>
                                <ul className="footer-links">
                                    <li><Link to={'#'}>Team</Link></li>
                                    <li><Link to={'#'}>Career</Link></li>
                                    <li><Link to={'#'}></Link></li>
                                    <li><Link to={'#'}></Link></li>
                                </ul>
                            </div> */}
                            <div className="col pages-links">
                                <h5>Contact Us</h5>
                                <ul className="footer-links contactus">
                                    <li><span>Email</span><Link to={'mailto:recyclamine@adityabirla.com'}>recyclamine@adityabirla.com</Link></li>
                                    <li><span>Call Us</span><Link to={'tel:02265754100'}>022 - 65754100</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='copyright'>
                <div className='container'>
                    <ul>
                        <li>©2025 All Rights Reserved.</li>
                        <li>
                            <ul>
                                <li><Link to={'privacy-policy'}>Privacy Policy</Link></li>
                                <li><Link to={'cookies'}>Cookies Policy</Link></li>
                            
                                <li><Link to={'disclaimer'}>Disclaimer</Link></li>
                                {/* <li>|</li>
                                <li><select className='langselector' name="#" id="#">
                                    <option value="En">En</option>
                                    <option value="de">De</option>
                                    <option value="zh">Zh</option>
                                    <option value="fr">Fr</option>
                                    <option value="th">Th</option>
                                </select></li> */}

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div className='fixedbutton'>
                <div className="btn">
                    <span>Know More</span>
                    <i className="ico">    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="43" height="43" rx="21.5" fill="#0097D6" />
                        <mask id="mask0_599_743" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="9" y="9" width="25" height="25">
                            <rect x="9.77271" y="9.77271" width="23.4545" height="23.4545" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_599_743)">
                            <path d="M16.0274 27.3637L14.6592 25.9955L24.041 16.6137H15.6365V14.6592H27.3637V26.3865H25.4092V17.9819L16.0274 27.3637Z" fill="white" />
                        </g>
                    </svg>
                    </i>
                </div>
            </div> */}

        </footer>
    )
}
