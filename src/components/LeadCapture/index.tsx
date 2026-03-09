import { Link } from "react-router-dom";
import FadeUp from "../Animation/FadeUp";
import { useState } from "react";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    orgName: "",
    country: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const isFormValid =
    formData.fname.trim() !== "" &&
    formData.lname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.orgName.trim() !== "" &&
    formData.country.trim() !== "";



  return (
    <>
      {/* <InsideHeader className="contactbanner" imgsrc={`${process.env.PUBLIC_URL}/images/Lead-capture.webp`} title="Contact" alt_title="Contact" /> */}
      <section className="leadcapture">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="form-card1">
                <FadeUp duration={1} delay={0.2} threshold={0.2}>
                  <form>
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="fname"
                            placeholder="First Name*"
                            value={formData.fname}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="fname">First Name*</label>
                        </div>
                      </div>
                      
                      <div className="col-12 col-lg-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="lname"
                            placeholder="Last Name*"
                            value={formData.lname}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="lname">Last Name*</label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-floating withicon">
                          <span className="input-icon">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icons/email-grey.svg`}
                              alt="Email"
                            />
                          </span>

                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />

                          <label htmlFor="email">Email*</label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="Designation"
                            placeholder="Designation"
                          />
                          <label htmlFor="Designation">Designation</label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="orgName"
                            placeholder="Organization Name*"
                            value={formData.orgName}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="orgName">Organization Name*</label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="country"
                            placeholder="Country*"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="country">Country*</label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form-floating withicon">
                          <span className="input-icon">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icons/call-grey.svg`}
                              alt="Call"
                            />
                          </span>

                          <input
                            type="text"
                            className="form-control"
                            id="number"
                            placeholder="Phone"
                          />

                          <label htmlFor="number">Phone</label>
                        </div>
                      </div>

                      <div className="col-12">
                        {/* <Link
                          to={`${process.env.PUBLIC_URL}/RecyclamineBrochure_Final_26-02-2026.pdf`}
                          target="_blank"
                        > */}
                        <button
                          className="btn btn-blue"
                          type="button"
                          disabled={!isFormValid}
                        >
                          <Link
                            to={`${process.env.PUBLIC_URL}/RecyclamineBrochure_Final_26-02-2026.pdf`}
                            target="_blank"
                          >
                            Download Brochure
                          </Link>
                        </button>
                        {/* </Link> */}
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
  );
}

// <li><Link to={`/LeadCapture`} target='_blank'>Download Brochure</Link></li> make it popup the page not open full next pge just popup the leadcapture component and rest of the background is blurry
//fc
// there is a form on my erbsite and i have to collect the data from that from on each sunbmit on my company email id dont want to login my company email id on thired party webs and you can use third party gmail id or email id
