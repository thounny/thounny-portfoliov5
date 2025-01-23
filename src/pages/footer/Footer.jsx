/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <p>[Represented by Agency or Name]</p> {/* Placeholder for representation */}
        <p>[email@example.com]</p> {/* Placeholder for email */}
        <p>[+00 123 456 789]</p> {/* Placeholder for phone number */}
      </div>
      <div className="footer-item footer-links">
        <Link to="/instagram">[SOCIAL]</Link> {/* Placeholder for social link */}
        <Link to="/vimeo">[SOCIAL]</Link> {/* Placeholder for social link */}
      </div>
    </div>
  );
};

export default Footer;
