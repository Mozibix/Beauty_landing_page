import React from "react";
import "../Styles/footer.scss";
import logo1 from "../Images/facebook.svg";
import logo2 from "../Images/instagram.svg";
import logo3 from "../Images/twitter.svg";
import logo4 from "../Images/linkedin2.svg";

const Footer = () => {
  return (
    <>
      <section className="footer_sec">
        <footer>
          <div className="top_footer">
            <div className="logo">
              <p>LuxNAILBar</p>
            </div>
            <div className="about">
              <h4>ABOUT US</h4>
              <ul>
                <li>History</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="join">
              <h4>JOIN US</h4>
              <ul>
                <li>Sign up</li>
                <li>Suscribe</li>
                <li>Community</li>
              </ul>
            </div>
            <div className="contact">
              <h4>CONTACT US</h4>
              <ul>
                <li>London</li>
                <li>Paris</li>
                <li>New York</li>
                <li className="socials">
                  <li>
                    <img src={logo1} alt="social icons" />
                  </li>
                  <li>
                    <img src={logo2} alt="social icons" />
                  </li>
                  <li>
                    <img src={logo3} alt="social icons" />
                  </li>
                  <li>

                    {/* NEED ADJUSTMENTS */}
                    <img className="link" src={logo4} alt="social icons" id="linkedin" />
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div className="line"></div>
          <div className="bottom_footer">
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>@2020LuxNailBar Limited</li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
