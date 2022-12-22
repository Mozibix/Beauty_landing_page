import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Review from "./Review";
import ServiceSec from "./Services";
import TeamSec from "./Team";

const Home = () => {
  return (
    <>
      <section>
        <div className="nav">
          <NavBar />
        </div>

        <div className="hero">
          <Hero />
        </div>

        <div className="padding">
          <div className="service_sec">
            <ServiceSec />
          </div>

          <div className="review_sec">
            <Review />
          </div>

          <div className="team_sec">
            <TeamSec />
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
