import React from "react";
import "./About.css";
import img from "../image/new2.jpg";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <p>
            Travel Services Travel Services is a business travel program in
            which employees book travel within pre-established guidelines,
            designed to control spend and help enhance travelers’ safety. Back
            to Glossary <br /> <br />
            Travel Services Travel Services is a business travel program in
            which employees book travel within pre-established guidelines,
            designed to control spend and help enhance travelers’ safety. Back
            to Glossary <br /> <br />
            Travel Services Travel Services is a business travel program in
            which employees book travel within pre-established guidelines,
            designed to control spend and help enhance travelers’ safety. Back
            to Glossary <br /> <br />
            Travel Services Travel Services is a business travel program in
            which employees book travel within pre-established guidelines,
            designed to control spend and help enhance travelers’ safety. Back
            to Glossary <br /> <br />
            <span style={{ color: "gray" }}>
              {" "}
              Back to Glossery------------>>{" "}
            </span>
          </p>

          <img src={img} alt="" />
        </div>

        <div className="about-content">
          <img
            src="https://images.ctfassets.net/r49k2skuorjz/2QELD4v1t8RUrofKW5dfGW/689356f59aee156f2973f95f3c890af3/careers-page-photo.png"
            alt=""
          />

          <div>
            <h2>How It Works</h2>
            <p>
              At TripActions we’re never satisfied with the status quo, and we
              know breakthrough ideas come from diverse perspectives. We are
              committed to cultivating a workplace that reflects the diversity
              of the customers we serve while fostering leadership and
              innovation. All voices are valued here and you’ll have the
              resources, tools and training you’ll need to do the best work of
              your life.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </> 
  );
};

export default About;
