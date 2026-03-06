import { Link } from "react-router-dom";
import { useState } from "react";
import LeadCapture from "../LeadCapture";

export default function Footer() {
  const [showLead, setShowLead] = useState<boolean>(false);

  return (
    <footer>
      <div className="container">
        <div className="row">

          {/* LEFT SECTION */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="brand-logo">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/recyclamine-dark-logo.svg`}
                  alt="Recyclamine"
                />
              </Link>
            </div>

            <div className="footer-about">
              <p>
                Recyclamine is the newest offering from Aditya Birla Advanced
                Materials, a global supplier and a leading innovator of epoxy
                products.
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="footer-social-icons">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/recyclamine/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/linkedin-dark.svg`}
                      alt="LinkedIn"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@RecyclamineAdityaBirla"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/youtube-dark.svg`}
                      alt="YouTube"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/recyclamine"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/facebook-dark.svg`}
                      alt="Facebook"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/recyclamine_am/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icons/instagram-dark.svg`}
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">

              {/* QUICK LINKS */}
              <div className="col col-lg-8 pages-links">
                <h5>Quick Links</h5>

                <ul className="footer-links">
                  <li><Link to="/recyclamine-overview">Recyclamine Overview</Link></li>
                  <li><Link to="/the-recyclamine-technology">The Recyclamine Technology</Link></li>
                  <li><Link to="/industries">Industries and Applications</Link></li>
                  <li><Link to="/sustainability">Sustainability</Link></li>
                  <li><Link to="/success-stories">Success Stories</Link></li>
                  <li><Link to="/articles-and-blogs">Articles and Blogs</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>

                  {/* DOWNLOAD BROCHURE BUTTON */}
                  <li>
                    <button
                      className="footer-links-btn"
                      onClick={() => setShowLead(true)}
                    >
                      Download Brochure
                    </button>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="col pages-links">
                <h5>Contact Us</h5>

                <ul className="footer-links contactus">
                  <li>
                    <span>Email</span>
                    <a href="mailto:recyclamine@adityabirla.com">
                      recyclamine@adityabirla.com
                    </a>
                  </li>

                  <li>
                    <span>Call Us</span>
                    <a href="tel:02265754100">022 - 65754100</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright">
        <div className="container">
          <ul>
            <li>©2025 All Rights Reserved.</li>
            <li>
              <ul>
                <li><Link to="privacy-policy">Privacy Policy</Link></li>
                <li><Link to="cookies">Cookies Policy</Link></li>
                <li><Link to="disclaimer">Disclaimer</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* MODAL */}
      {showLead && (
        <div
          className="modal-overlay"
          onClick={() => setShowLead(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowLead(false)}
            >
              ✕
            </button>

            <LeadCapture />
          </div>
        </div>
      )}

    </footer>
  );
}