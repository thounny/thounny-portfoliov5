/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Footer from "../footer/Footer";

import "./Overview.css";

const Overview = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Lorem Ipsum Project 1", // Placeholder for project title
      category: "Category 1", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2023, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 2", // Placeholder for project title
      category: "Category 2", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2022, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 3", // Placeholder for project title
      category: "Category 3", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2021, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 4", // Placeholder for project title
      category: "Category 4", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2020, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 5", // Placeholder for project title
      category: "Category 5", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2019, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 6", // Placeholder for project title
      category: "Category 6", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2018, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 7", // Placeholder for project title
      category: "Category 7", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2017, // Placeholder for year
    },
    {
      title: "Lorem Ipsum Project 8", // Placeholder for project title
      category: "Category 8", // Placeholder for category
      "running time": `00' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 00"`, // Placeholder for running time
      year: 2016, // Placeholder for year
    },
  ];

  return (
    <div className="overview-page">
      <div className="whitespace-300"></div>
      <div className="table">
        <div className="t-row" id="table-header">
          <div className="index">
            <p>#</p>
          </div>
          <div className="title">
            <p>Title</p>
          </div>
          <div className="category">
            <p>Category</p>
          </div>
          <div className="time">
            <p>Running Time</p>
          </div>
          <div className="year">
            <p>Year</p>
          </div>
        </div>
        {projects.map((project, index) => (
          <div
            className={`t-row ${hoveredIndex !== null && index !== hoveredIndex
              ? "not-hovered"
              : ""
              }`}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="index">
              <p>0{index + 1}</p>
            </div>
            <div className="title">
              <p>{project.title}</p>
            </div>
            <div className="category">
              <p>{project.category}</p>
            </div>
            <div className="time">
              <p
                dangerouslySetInnerHTML={{ __html: project["running time"] }}
              ></p>
            </div>
            <div className="year">
              <p>{project.year}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Overview;
