import InsideHeader from "../../components/InsideHeader"
import { Link } from "react-router-dom"
import FadeUp from "../../components/Animation/FadeUp"
// import React, { useState } from 'react';
// import axios from 'axios';

// type FormData = {
//     fname: string;
//     lname: string;
//     country: string;
//     orgName: string;
//     number: string;
//     email: string;
//     message: string;
//     file?: File | null;
// };

const ContactForm: React.FC = () => {
    // const [formData, setFormData] = useState<FormData>({
    //     fname: '',
    //     lname: '',
    //     country: '',
    //     orgName: '',
    //     number: '',
    //     email: '',
    //     message: '',
    //     file: null
    // });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { id, value } = e.target;
    //     setFormData(prev => ({ ...prev, [id]: value }));
    // };

    // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = e.target.files?.[0] || null;
    //     setFormData(prev => ({ ...prev, file }));
    // };

    // const handleSubmit = async () => {
    //     try {
    //         const emailBody = `
    //     First Name: ${formData.fname}
    //     Last Name: ${formData.lname}
    //     Country: ${formData.country}
    //     Organization: ${formData.orgName}
    //     Phone: ${formData.number}
    //     Email: ${formData.email}
    //     Message: ${formData.message}
    //   `;

    //         const bodyContent = {
    //             personalizations: [
    //                 {
    //                     to: [
    //                         { email: "shubham@squareradius.in" }
    //                     ]
    //                 }
    //             ],
    //             from: {
    //                 email: "shubham@squareradius.in"
    //             },
    //             subject: "New Contact Form Submission",
    //             content: [
    //                 {
    //                     type: "text/plain",
    //                     value: emailBody
    //                 }
    //             ]
    //         };

    //         const headersList = {
    //             "Accept": "*/*",
    //             "Authorization": "Bearer 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",
    //             "Content-Type": "application/json"
    //         };

    //         const reqOptions = {
    //             url: "https://api.sendgrid.com/v3/mail/send",
    //             method: "POST",
    //             headers: headersList,
    //             data: JSON.stringify(bodyContent)
    //         };

    //         const response = await axios.request(reqOptions);
    //         console.log("Email sent:", response.data);
    //         // alert("Email sent successfully!");

    //     } catch (err) {
    //         console.error("Error sending email:", err);
    //         // alert("Failed to send email.");
    //     }
    // };

    return (
        <>
            <InsideHeader className="contactbanner" imgsrc={`${process.env.PUBLIC_URL}/images/contact/contact-banner3.jpg`} title="Contact" alt_title="Contact" />
            <section className="contact">
                <div className="container">
                    {/* <ul>
                        <li>For customer queries and collaboration opportunities, please contact: <Link to={"mailto:scott.m@adityabirla.com"}>scott.m@adityabirla.com</Link></li>
                        <li>For any other queries, please write to: <Link to={"mailto:recyclamine@adityabirla.com"}>recyclamine@adityabirla.com</Link></li>
                        <li>Nominated Contacts and headshots for Europe, US and Asia</li>
                    </ul> */}
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="contact-info">
                                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                    <h4>Contact Us</h4>
                                    <ul>
                                    <li>For customer queries and collaboration opportunities, please contact: <Link to={"mailto:scott.m@adityabirla.com"}>scott.m@adityabirla.com</Link></li>
                                    <li>For any other queries, please write to: <Link to={"mailto:recyclamine@adityabirla.com"}>recyclamine@adityabirla.com</Link></li>
                                    {/* <li>Nominated Contacts and headshots for Europe, US and Asia</li> */}
                                    </ul>
                                    {/* <p>We would love to hear from you! Please fill out the form and a person from your nearest office will get back to you.</p>
                                    <ul className="contactlinks">
                                        <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/call-grey.svg`} alt="Phone" /></span> <Link to={"tel:+912266928180"}>+91 22 66928180</Link></li>
                                        <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`} alt="Email" /></span><Link to={"mailto:recyclamine@adityabirla.com"}>recyclamine@adityabirla.com</Link></li>
                                        <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/whatsapp-grey.svg`} alt="WhatsApp" /></span><Link to={"#"}>+91 98100 98100</Link></li>
                                    </ul> */}
                                </FadeUp>
                                {/* <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                                    <div className="col">
                                        <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                            <figure>
                                                <h6>Customer Support</h6>
                                                <ul className="contactlinks">
                                                    <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/call-grey.svg`} alt="Phone" /></span> <Link to={"tel:+912266928180"}>+91 22 66928180</Link></li>
                                                    <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`} alt="Email" /></span><Link to={"mailto:recyclamine@adityabirla.com"}>recyclamine@adityabirla.com</Link></li>
                                                </ul>
                                            </figure>
                                        </FadeUp>
                                    </div>
                                    <div className="col">
                                        <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                            <figure>
                                                <h6>Media Inquiries</h6>
                                                <ul className="contactlinks">
                                                    <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/call-grey.svg`} alt="Phone" /></span> <Link to={"tel:+912266928180"}>+91 22 66928180</Link></li>
                                                    <li><span><img src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`} alt="Email" /></span><Link to={"mailto:recyclamine@adityabirla.com"}>recyclamine@adityabirla.com</Link></li>
                                                </ul>
                                            </figure>
                                        </FadeUp>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-card">
                                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="fname" placeholder="First Name*" required />
                                                    <label htmlFor="fname">First Name*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="lname" placeholder="Last Name*" required />
                                                    <label htmlFor="lname">Last Name*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="country" placeholder="Country*" required />
                                                    <label htmlFor="country">Country*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="orgName" placeholder="Organization Name*" required />
                                                    <label htmlFor="orgName">Organization Name*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating withicon">
                                                    <span className="input-icon"><img src={`${process.env.PUBLIC_URL}/images/icons/call-grey.svg`} alt="Call" /></span>
                                                    <input type="text" className="form-control" id="number" placeholder="Phone" />
                                                    <label htmlFor="number">Phone</label>
                                                </div>
                                            </div>

                                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                                <div className="form-floating withicon">
                                                    <span className="input-icon"><img src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`} alt="Email" /></span>
                                                    <input type="email" className="form-control" id="email" placeholder="Email*" required />
                                                    <label htmlFor="email">Email*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="How can we help?*" id="message" required></textarea>
                                                    <label htmlFor="message">How can we help?*</label>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="mb-3">
                                                    <input className="form-control" type="file" id="formFile" />
                                                    <div id="emailHelp" className="form-text">File Attachment (up to 5 MB only)</div>
                                                </div>
                                            </div>                                          
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <button className="btn btn-blue" type="button">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </FadeUp>
                                <div className="form-info">
                                    <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                        <p>By contacting us, you agree to our <Link to="#">Terms of service</Link>  and <Link to={"#"}>Privacy Policy</Link></p>
                                    </FadeUp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="contact-map">
                <div className="container">
                    <h4>Offices</h4>
                    <div className="row gy-4 gx-lg-4">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                <div className='contact-box'>
                                    <div className='row'>
                                        <div className='col-2 col-lg-auto'>
                                            <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/india.png`} alt="" />
                                        </div>
                                        <div className='col-10'>
                                            <h6>Grasim Industries Limited, Advanced Materials</h6>
                                            <p>6th Floor, Unit No 601,601A & 602, One International Centre, Tower 1 & 2, Senapati Bapat Marg, Prabhadevi West, Mumbai-400013 Maharashtra, India
                                            </p>
                                            <p><a href="tel:+91 22 6692 8180">022 6575 4100</a><br />
                                                <a href="mailto:am.in@adityabirla.com">am.in@adityabirla.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                            </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                <div className='contact-box'>
                                    <div className='row'>
                                        <div className='col-2 col-lg-auto'>
                                            <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/thailand.png`} alt="" />
                                        </div>
                                        <div className='col-10'>
                                            <h6>Aditya Birla Chemicals (Thailand) Limited, Advanced Materials</h6>
                                            <p>888/167, 16th Floor, Mahatun Plaza Building, Ploenchit Road,<br />
                                                Lumpini, Pathumwan, Bangkok 10330, Thailand
                                            </p>
                                            <p><a href="tel:+66(0)22535031-33">+66 (0) 2 2535031-33</a>, <a href="tel:+66(0)2253-5030">+66 (0) 2 253-5030</a><br />
                                                <a href="mailto:am.th@adityabirla.com">am.th@adityabirla.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                            </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                <div className='contact-box'>
                                    <div className='row'>
                                        <div className='col-2 col-lg-auto'>
                                            <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/germany.png`} alt="" />
                                        </div>
                                        <div className='col-10'>
                                            <h6>CTP Advanced Materials GmbH</h6>
                                            <p>Stahlstr. 60 D-65428, Russelsheim, Deutschland
                                            </p>
                                            <p><a href="tel:+49 (0) 6142-9185-0">+49 (0) 6142-9185-0</a>, <a href="tel:+49 (0) 6142-9185-55">+49 (0) 6142-9185-55</a><br /><a href="mailto:am.de@adityabirla.com">am.de@adityabirla.com</a></p>
                                        </div>
                                    </div>
                                </div>

                            </FadeUp>
                            </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>

                                <div className='contact-box'>
                                    <div className='row'>
                                        <div className='col-2 col-lg-auto'>
                                            <img className='flag-icon' src={`${process.env.PUBLIC_URL}/images/icons/flags/united-states.png`} alt="" />
                                        </div>
                                        <div className='col-10'>
                                            <h6>Aditya Birla Chemicals (USA) Inc.</h6>
                                            <p>7310 Turfway Road, Suite 550, Florence, KY 41042, USA</p>
                                            <p><a href="tel:+1 832 544 8647">+1 832 544 8647</a><br /><a href="mailto:am.us@adityabirla.com">am.us@adityabirla.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </FadeUp>
                            </div>
                            </div>

                    {/* <div className="row gx-lg-5 align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">


                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                <figure>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.071461777214!2d72.86357753328991!3d19.118595751144714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7df61a05cf1%3A0x734df4e75245bb4b!2sAditya%20Birla%20Advanced%20Materials!5e0!3m2!1sen!2sin!4v1735280442254!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        style={{ border: '0' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Map showing Aditya Birla Advanced Materials location"
                                    ></iframe>
                                </figure>
                            </FadeUp>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <FadeUp duration={1} delay={0.2} threshold={0.2}>
                                <aside>
                                    <h5>Our Location</h5>
                                    <h4>Aditya Birla Advanced Materials</h4>
                                    <h5>Headquarters</h5>
                                    <p>B Wing, Ahura Centre, 308/310,<br />
                                        Mahakali Caves Rd, Shanti Nagar,<br />
                                        Andheri East, Mumbai,<br />
                                        Maharashtra 400093</p>
                                </aside>
                            </FadeUp>
                        </div>
                    </div> */}
                </div>
            </section>



        </>
    )
}

export default ContactForm;



