import React from "react";
import "../Styles/navbar.scss";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <span className="cap_case">lux</span>
          <span className="up_case">nail</span>
          <span className="cap_case">Bar</span>
        </div>

        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SERVICES</li>
          <li>REVIEWS</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
