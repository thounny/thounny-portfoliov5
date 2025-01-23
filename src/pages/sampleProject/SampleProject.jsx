/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import ProjectImage1 from "../../assets/project-images/01.jpg";
import ProjectImage2 from "../../assets/project-images/02.jpg";
import ProjectImage3 from "../../assets/project-images/03.jpg";
import ProjectImage4 from "../../assets/project-images/04.jpg";
import ProjectImage5 from "../../assets/project-images/05.jpg";
import ProjectImage6 from "../../assets/project-images/06.jpg";
import ProjectImage7 from "../../assets/project-images/07.jpg";
import ProjectImage8 from "../../assets/project-images/08.jpg";

import "./SampleProject.css";

const SampleProject = () => {
  return (
    <div className="sameple-project-page">
      <div className="project-info">
        <div className="project-index">
          <p>01</p> {/* Placeholder for project index */}
        </div>
        <div className="project-name">
          <p>Lorem Ipsum Project Name</p> {/* Placeholder for project name */}
        </div>
        <div className="project-duration">
          <p>00' 00'' / 00' 00''</p> {/* Placeholder for project duration */}
        </div>
        <div className="project-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            imperdiet sapien nec augue volutpat aliquam.
          </p> {/* Placeholder for project description */}
        </div>
        <div className="project-year">
          <p>YYYY</p> {/* Placeholder for project year */}
        </div>
      </div>

      <div className="whitespace-35vh"></div>

      <div className="project-preview">
        <div className="project-preview-col d-only"></div>
        <div className="project-preview-col">
          <div className="work-video">
            <div className="work-video-wrapper">
              <ReactPlayer
                url={`https://vimeo.com/000000000`} // Placeholder for video URL
                controls={false}
                autoPlay={true}
                loop={true}
                playing
                muted
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sample-images">
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage1} alt="Sample Image 1" /> {/* Placeholder */}
          </div>
          <div className="img">
            <img src={ProjectImage2} alt="Sample Image 2" /> {/* Placeholder */}
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage3} alt="Sample Image 3" /> {/* Placeholder */}
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage4} alt="Sample Image 4" /> {/* Placeholder */}
          </div>
          <div className="img">
            <img src={ProjectImage5} alt="Sample Image 5" /> {/* Placeholder */}
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage6} alt="Sample Image 6" /> {/* Placeholder */}
          </div>
        </div>
        <div className="s-row">
          <div className="img">
            <img src={ProjectImage7} alt="Sample Image 7" /> {/* Placeholder */}
          </div>
          <div className="img">
            <img src={ProjectImage8} alt="Sample Image 8" /> {/* Placeholder */}
          </div>
        </div>
      </div>

      <div className="project-nav">
        <div className="link">
          <Link to="/">prev</Link> {/* Placeholder for previous link */}
        </div>
        <div className="link">
          <Link to="/">next</Link> {/* Placeholder for next link */}
        </div>
      </div>
    </div>
  );
};

export default SampleProject;
