import React from "react";
import "./Home.css";
import bg from "../image/bg-img.jpg";
import auth from "../image/auth.png";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
    <div className="home-page" >
      <div className="home-container">
        <img  style={{marginTop:"15px"}} src={bg} alt="" />
        <div className="home-main" data-aos="fade-top" >
          <h2>20 Most Beautiful Travel Blogs In 2023</h2>
          <p style={{marginTop:"20px"}} > That Takes Storytelling To The Next Level</p>
          <button className="mid-btn" style={{marginTop:"40px" , padding:"10px 50px", borderRadius:"20px",boxShadow: "4px 2px 4px 4px white" , border:"gray" , cursor:"pointer", }} >Explore More</button>
        </div>
      </div>

      <div className="home-body">
      <div className="para">
        <strong style={{marginLeft:"30px" , paddingBottom:"0px"}} >by peter R</strong> 
        <p style={{ marginRight:"10px"}}  >Updated On December 29, 2022 |<strong> Comment</strong>
        
        </p>
        
      </div>
        <hr style={{ width: "100%" }} />
     
        <div className="body-content"  data-aos="fade-top">
          <div className="home-content">
            <p>
              <strong> Update 2021: </strong> Due to how popular this article
              has become, I have decided to keep this article alive and will
              continue to add more beautiful travel blogs as I discover it.{" "}
            </p>

            <p>
              {" "}
              2020 has come, maybe not with a bang as a lot of us may have
              hoped, but the world goes on and as such I have decided to extend
              this most beautiful travel blogs list even further with 6 new
              travel blogs to check out, bringing it to 20, a perfect number for
              the 2020 year.
            </p>
            <p>
              Without further ado, let's check out all the beautiful travel
              blogs out there. As some of you may know, I have been in the
              design industry for the past 10 years working as a freelance
              designer in various companies while also running this blog
            </p>
            <p>
              {" "}
              In fact, the majority of my income is mostly from my design
              freelance work over at The Pete Design. I value well-designed
              products and today, I want to dive down into the design of travel
              blogs and featured the best design travel blogs out there that
              take storytelling to the next level and hopefully inspire you to
              create an awesome travel blog of your own.
            </p>
            <p>
              Tips: Did you know that you can start a travel blog for as low as
              3 USD per month? If you are looking to start a travel blog and are
              looking to save some cost, I highly recommend you check out
              Hostgator.
            </p>
          </div>

          <div className="home-content2"  data-aos="fade-bottom" >
            <img src={auth} alt="" />
            <hr />
            <p className="para-2" style={{marginTop:"20px" , textAlign: "justify", lineHeight:"30px"}} >
              I’m Pete R., a solo traveler, a travel blogger,  and a third-world
              passport holder from Thailand with over 8 years of travel
              experiences, ready to share them with you. Learn more about me.
            </p>
             <button  data-aos="fade-left" className="homebtn">Know More About Me</button>
          </div>
        </div>
      </div>


    </div>
      <hr style={{ width: "80%", marginTop:"50px" }} />
    <Footer/>
    </>
  );
};

export default Home;
