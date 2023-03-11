import React from "react";
import "./Footer.css";
import ft from "../Components/image/ft.jpg";
import { BsInstagram, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer"  >
        <div className="footer-section1" data-aos="fade-top" >
          <img src={ft} alt="" />
          <div className="footer-heading">
            <p style={{ marginTop: "20px" }}>
              JOIN BUCKETLISTLY BLOG NEWSLETTER TODAY
            </p>
            <h1
              style={{
                lineHeight: "80px",
                marginTop: "30px",
              }}
            >
              GET A <span style={{ color: "blue" }}>FREE </span> <br />{" "}
              LIGHTROOM PRESET
            </h1>

            <h4 style={{ lineHeight: "50px", marginTop: "30px" }}>
              Join over 3,000 readers and get a free Lightroom preset on us as
              well as travel news, updates, and great travel stories from around
              the world.
            </h4>
          </div>
          <div className="footer-section2">
            <div className="footer-inputs"  >
              <input data-aos="fade-right" type="text" placeholder="Name" />
              <input data-aos="fade-left" type="email" placeholder="Email" />
            </div>
            <div className="footer-btn">
              <button  data-aos="fade-left" className="ft-btn">Subscribe</button>
              <button  data-aos="fade-right" 
                style={{
                  backgroundColor: "white",
                  border: "2px solid White",
                  background: "0 0 ",
                  color: "white",
                }}
                className="ft-btn"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-section3"  data-aos="fade-top">
          <div className="icons">
            <p  className="col-2" style={{ textAlign: "center" }}>
              stay <span style={{ color: "blue" }}> connected</span>{" "}
            </p>
            <ul className="list-items" style={{marginTop:"30px" , textAlign:"center" , marginRight:"60px"}}  data-aos="fade-right">
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsYoutube />
              </li>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsTwitter />
              </li>
            </ul>
          </div>

          <div className="name" >
            <ul data-aos="fade-left">
           <strong><li style={{color:"blue"}}>ABOUT </li> </strong>   
              <li> About Me </li>
              <li> Privacy Policy</li>
              <li> Terms </li>
              <li> Plan a Backpacking Trip </li>
              <li> Best Travel Gear </li>
              <li> Lightroom Presets </li>
              <li> What's in My Camera Backpack? </li>
            </ul>

            <p> ThankYou for visiting.</p>
          </div>
        </div>
  <hr style={{width:"80%" }} />
        <div style={{textAlign:"center" , marginTop:"150px"}} className="footer-section4">
        <p>Contact Us</p>
        <p style={{textAlign:"center" , marginTop:"10px" , }}>Phone- 14144567879</p>
        <p style={{textAlign:"center" , marginTop:"10px"}} >Email- user@gmail.com</p>
        <p style={{marginTop:"60px" , textAlign:"center"}} >© 2012–2023 BucketListly Blog. All rights reserved. Made with ❤ by The Design</p>

        </div>
      </div>
    </>
  );
};

export default Footer;
