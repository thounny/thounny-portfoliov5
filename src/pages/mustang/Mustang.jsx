/* eslint-disable no-unused-vars */
import React from "react";
import ReactPlayer from "react-player";
import Footer from "../footer/Footer";

import "./Mustang.css";

const Mustang = () => {
  return (
    <div className="mustang-page">
      <div className="mustang-video">
        <div className="hero-video">
          <ReactPlayer
            url="https://vimeo.com/366780994" // Placeholder for video URL
            controls={false}
            autoPlay={true}
            playing
            muted
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="whitespace-300"></div>
      <div className="container">
        <div className="info-row">
          <div className="info-col">
            <div className="info-copy">
              <p>
                [Insert a short personal anecdote or story here. For example, a
                description of how a childhood passion led to professional
                interests.]
              </p>
              <br />
              <p>
                [Add details about education, key milestones, or experiences
                that shaped the individual or the project being showcased.]
              </p>
              <br />
              <p>
                [Provide information about a name, brand, or concept
                associated with the project, tying it into the story. End
                with an inspiring note about pursuing passions or goals.]
              </p>
            </div>
          </div>
          <div className="info-col img"></div> {/* Placeholder for image */}
        </div>
      </div>
      <div className="footer-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Mustang;
