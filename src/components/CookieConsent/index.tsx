import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//$ npm install keygrip  |  npm i keygrip

const LOCAL_KEY = "cookie_accepted";
const SESSION_KEY = "cookie_declined";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(LOCAL_KEY);
    const declined = sessionStorage.getItem(SESSION_KEY);

    if (accepted === "true") return;
    if (declined === "true") return;

    setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(LOCAL_KEY, "true");
    sessionStorage.removeItem(SESSION_KEY);
    setVisible(false);
  };
  const handleDecline = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          {/* We use cookies to enhance your experience.  */}
          We use cookies to give you the best online experience. Read our{" "}
          <Link to="/cookies" className="cookie-link">
            Cookies Policy
          </Link>
          .
        </p>

        <div className="cookie-buttons">
          <button className="decline-btn" onClick={handleDecline}>
            Decline
          </button>
          <button className="accept-btn" onClick={handleAccept}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
