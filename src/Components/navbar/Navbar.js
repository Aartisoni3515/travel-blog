import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import blog from "../image/blog.png"

const Navbar = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="navbar">
        {/* <div className="nav-img">
   <h3>Travel.Blog</h3>
</div> */}

        <ul className="nav-list">
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Service">Service</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/About">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact">Contact</Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
