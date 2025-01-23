/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <div className="nav-item">
          <Link to="/">[Your Logo or Name]</Link> {/* Placeholder for logo or name */}
        </div>
      </div>
      <div className="links">
        <div className="nav-item">
          <Link to="/work">[Work]</Link> {/* Placeholder for 'Work' link */}
        </div>
        <div className="nav-item">
          <Link to="/overview">[Overview]</Link> {/* Placeholder for 'Overview' link */}
        </div>
        <div className="nav-item">
          <Link to="/mustang">[Project Name]</Link> {/* Placeholder for a specific project name */}
        </div>
        <div className="nav-item">
          <Link to="/info">[Info]</Link> {/* Placeholder for 'Info' link */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
