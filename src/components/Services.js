import React from "react";
import { serviceInfo } from "../userdata";
import "../Styles/service.scss";

const ServiceSec = () => {
  const serviceFlex = serviceInfo.map((serviceData) => {
    return <Services {...serviceData} />;
  });

  return (
    <>
      <section className="services_sec">
        <p className="header_text">Our Services</p>
        <div className="service_box">{serviceFlex}</div>
      </section>
    </>
  );
};

const Services = (props) => {
  return (
    <>
        <div className="flexbox">
          <div className="image_flex">
            <img src={props.img_src} alt="services" />
          </div>
          <div className="flex_details">
            <p className="top_text">{props.top_word}</p>
            <p className="bottom_text">{props.bottom_word}</p>
          </div>
      </div>
    </>
  );
};

export default ServiceSec;
