/* eslint-disable no-unused-vars */
import React from "react";
import WorkItem from "./workItem/WorkItem";
import Footer from "../footer/Footer";

import "./Work.css";

const Work = () => {
  return (
    <div className="work-page">
      <div className="whitespace-300"></div>
      <div className="container">
        <div className="works">
          <div className="row">
            <WorkItem
              videoId={437808118}
              index="01"
              workName="Lorem Ipsum Title 1"
            />
            <WorkItem
              videoId={871750630}
              index="02"
              workName="Lorem Ipsum Title 2"
            />
            <WorkItem
              videoId={477068055}
              index="03"
              workName="Lorem Ipsum Title 3"
            />
          </div>
          <div className="row">
            <WorkItem
              videoId={487114118}
              index="04"
              workName="Lorem Ipsum Title 4"
            />
            <WorkItem
              videoId={366780994}
              index="05"
              workName="Lorem Ipsum Title 5"
            />
            <WorkItem
              videoId={659334960}
              index="06"
              workName="Lorem Ipsum Title 6"
            />
          </div>
          <div className="row">
            <WorkItem
              videoId={533729157}
              index="07"
              workName="Lorem Ipsum Title 7"
            />
            <WorkItem
              videoId={500832353}
              index="08"
              workName="Lorem Ipsum Title 8"
            />
            <WorkItem
              videoId={510814675}
              index="09"
              workName="Lorem Ipsum Title 9"
            />
          </div>
        </div>
      </div>
      <div className="whitespace-300"></div>
      <Footer />
    </div>
  );
};

export default Work;
