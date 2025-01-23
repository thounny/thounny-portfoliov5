/* eslint-disable no-unused-vars */
import React from "react";

import "./Info.css";

const Info = () => {
  return (
    <div className="info-page">
      <div className="whitespace-300"></div>
      <div className="container">
        <div className="info-row">
          <div className="info-col">
            <div className="info-contact">
              <p className="header">represented by</p>
              <p>[Agency or Representative Name]</p> {/* Placeholder for representation */}
              <p>[email@example.com]</p> {/* Placeholder for email */}
              <p>[+00 123 456 789]</p> {/* Placeholder for phone number */}
            </div>
            <div className="info-copy">
              <p className="header">about</p>
              <p>
                [Insert an introductory paragraph about yourself, your journey,
                or your work. Keep it concise and engaging.]
              </p>
              <br />
              <p>
                [Provide details about your education or significant milestones
                in your career or passion.]
              </p>
              <br />
              <p>
                [Include a description of your current work, interests, or
                aspirations, tying them to your past experiences.]
              </p>
            </div>
          </div>
          <div className="info-col img">
            <div className="info-imgs"></div> {/* Placeholder for images */}
          </div>
        </div>
        <div className="info-row info-row-2">
          <div className="info-col">
            <div className="info-img-2">
              <div className="img-2"></div> {/* Placeholder for another image */}
            </div>
          </div>
          <div className="info-col">
            <div className="info-contact-2">
              <p className="header">contact</p>
              <p>[yourname@example.com]</p> {/* Placeholder for email */}
              <p>[+00 987 654 321]</p> {/* Placeholder for phone number */}
              <p>
                <a href="#">[Instagram]</a> {/* Placeholder for Instagram link */}
              </p>
              <p>
                <a href="#">[Vimeo]</a> {/* Placeholder for Vimeo link */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
