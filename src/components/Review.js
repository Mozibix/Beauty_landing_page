import React from "react";
import review from "../Images/pic6.png";
import "../Styles/review.scss";


const Review = () => {
  return (
    <>
      <section className="review_sec">
        <div className="left_review">
          <div className="header_text">
            <p>Our Customers' Review</p>
          </div>
          <div className="quote">
            <p>
              I love getting my nails done at the LuxNailBar, their services are
              great, the speed of delivery and overall experience is just
              amazing!{" "}
            </p>
          </div>
          <div className="name_info">
            <div className="top">
              <p>Samantha Jeffery</p>
              <div className="bottom">
                <p>N.Y</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right_review">
          <div className="review_box up_box"></div>
          <img src={review} alt="review" />
          <div className="review_box down_box"></div>
        </div>
      </section>
    </>
  );
};

export default Review;
