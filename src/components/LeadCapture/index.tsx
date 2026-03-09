import FadeUp from "../Animation/FadeUp";
import { useState } from "react";
import axios from "axios";

export default function LeadCapture() {

  const [showModal, setShowModal] = useState(true);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    orgName: "",
    country: "",
    designation: "",
    phone: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;

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

  const handleSubmit = async () => {

    setSubmitted(true);

    if (!isFormValid) {
      setErrorMsg("Please fill all required fields");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    try {

      await axios.post(`${apiUrl}/api/lead`, formData);

      window.open(
        `${process.env.PUBLIC_URL}/RecyclamineBrochure_Final_26-02-2026.pdf`
      );

      setShowModal(false);

    } catch (error) {

      console.error("Email failed", error);
      setErrorMsg("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }

  };

  if (!showModal) return null;

  return (

    <div
      className="modal-overlay"
      onClick={() => setShowModal(false)}
    >

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <section className="leadcapture">

          <div className="container">

            <div className="row">

              <div className="col-12">

                <div className="form-card1">

                  <FadeUp duration={1} delay={0.2} threshold={0.2}>

                    <form>

                      <div className="row">

                        {/* First Name */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className={`form-control ${submitted && !formData.fname ? "is-invalid" : ""}`}
                              id="fname"
                              placeholder="First Name*"
                              value={formData.fname}
                              onChange={handleChange}
                            />
                            <label>First Name*</label>
                          </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className={`form-control ${submitted && !formData.lname ? "is-invalid" : ""}`}
                              id="lname"
                              placeholder="Last Name*"
                              value={formData.lname}
                              onChange={handleChange}
                            />
                            <label>Last Name*</label>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="email"
                              className={`form-control ${submitted && !formData.email ? "is-invalid" : ""}`}
                              id="email"
                              placeholder="Email*"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <label>Email*</label>
                          </div>
                        </div>

                        {/* Designation */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="designation"
                              placeholder="Designation"
                              value={formData.designation}
                              onChange={handleChange}
                            />
                            <label>Designation</label>
                          </div>
                        </div>

                        {/* Organization */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className={`form-control ${submitted && !formData.orgName ? "is-invalid" : ""}`}
                              id="orgName"
                              placeholder="Organization Name*"
                              value={formData.orgName}
                              onChange={handleChange}
                            />
                            <label>Organization Name*</label>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="col-lg-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                            <label>Phone</label>
                          </div>
                        </div>

                        {/* Country */}
                        <div className="col-lg-12">
                          <div className="form-floating">
                            <input
                              type="text"
                              className={`form-control ${submitted && !formData.country ? "is-invalid" : ""}`}
                              id="country"
                              placeholder="Country*"
                              value={formData.country}
                              onChange={handleChange}
                            />
                            <label>Country*</label>
                          </div>
                        </div>

                        <div className="col-12">

                          {errorMsg && (
                            <div
                              style={{
                                background: "#ffe6e6",
                                color: "#d60000",
                                padding: "10px",
                                borderRadius: "6px",
                                marginBottom: "10px",
                                fontSize: "14px"
                              }}
                            >
                              {errorMsg}
                            </div>
                          )}

                          <button
                            className="btn btn-blue"
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                          >
                            {loading ? "Downloading..." : "Download Brochure"}
                          </button>

                        </div>

                      </div>

                    </form>

                  </FadeUp>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </div>

  );
}

