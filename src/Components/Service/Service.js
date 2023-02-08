import React from "react";
import "./Service.css";
import img from "../image/new.jpg";
import Footer from "../Footer";

const Service = () => {
  return (
    <>
      <div className="service-container">
        <div className="service-content">
          <h2
            style={{
              textAlign: "center",
              marginTop: "50px",
              fontSize: "25px",
              color: "gray",
            }}
          >
            The Services We Provided
          </h2>
          <img src={img} alt="" />

          <div className="service-main">
            <h2>
              Here's what you need to know about Travel Services
            </h2>
            <p>
              Travel services are services offered by travel agents, including
              passenger transport services, air travel services, car hire
              services, road transport services, rail transport services, sea
              transport services, booking and reservation of travel services,
              travel ticket reservation services, tourist travel information
              services, sight seeing tour and cruise arranging services, package
              holiday services for arranging travel, air transport services,
              transport and delivery of goods services.
            </p>
          </div>
          <div className="service-main2">
            <div className="cards">
              <h2>Report: TripActions Named a Leader in IDC Market Place</h2>
              <img
                src="https://res.cloudinary.com/tripactions/image/upload/q_auto/v1576531544/cms/idc-og_k4r2ml.png"
                alt=""
              />
            </div>
            <div className="cards">
              <h2>Skift State of Business Travel 2023 Report</h2>
              <img
                src="https://res.cloudinary.com/tripactions/image/upload/q_auto/v1571861891/cms/tripactions-skift-business-travel-2020_alywox.jpg"
                alt=""
              />
            </div>
            <div className="cards">
              <h2>
                Why Every Business Need To Think About Corporate Travel Services
              </h2>
              <img
                src="https://res.cloudinary.com/tripactions/image/upload/q_auto/v1561393741/cms/corporate-travel-services-blog_o3u1xr.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default Service;
