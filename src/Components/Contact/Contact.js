import React from "react";
import "./Contact.css";
import { BsInstagram, BsYoutube, BsFacebook, BsTwitter } from "react-icons/bs";
import { useState } from "react";

function Contact() {
  // useEffect(()=>{
  //   AOS.init({duration:2000})
  // },[])

  const [values, setValues] = useState({});
  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  return (
    <>
      <div className="contact-content">
        <div className="container-1">
          <div className="card" data-aos="fade-right">
            <div className="item">
              <span>
              <h2>Location</h2>
              </span>
              <p> Johari Bazar Delhi</p> <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam, aliquid. <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit rem <br />
                repudiandae culpa quod amet iste saepe, possimus atque alias ut
                quis <br />
                facilis tenetur fugit laborum eaque cupiditate ratione soluta
                libero.
              </p>
            </div>

            <div className="icons">
              <p style={{ textAlign: "center" }}>
                Follow <span style={{ color: "blue" }}> Us</span>{" "}
              </p>
              <ul
                className="list-items"
                style={{
                  marginTop: "50px",
                  textAlign: "center",
                  marginRight: "70px",
                }}
                data-aos="fade-right"
              >
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
            <p style={{ marginTop: "80px", textAlign: "center" }}>
              © 2012–2023 BucketListly Blog. All rights reserved. Made with ❤ by
              The Design
            </p>
          </div>

          <div className="contact-2" data-aos="fade-left">
            <h2 className="heading">Contact US</h2>
            <form className="form">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter a valid email address"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="message"
                id=""
                placeholder="Enter Your message"
                onChange={handleChange}
              />
              <br />
              <button type="submit" className="btn">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
