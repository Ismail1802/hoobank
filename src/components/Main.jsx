import React from "react";
import arrowup from "../assets/arrow-up.svg";
import mainImg from "../assets/robot.png";
import discount from "../assets/Discount.svg";
const Main = () => {
  return (
    <main className="main">
      <div className="main__text">
        <div className="main__discount">
          <img src={discount} alt="" />
          <p>
            20% <span>Discount for</span> 1 month <span>account</span>
          </p>
        </div>
        <div className="main__started">
          <h1>
            The Next <br />
            <span>Generation</span>
          </h1>
          <button id="get">
            <div>
              <p>Get</p>
              <img src={arrowup} alt="" />
            </div>
            <p>Started!</p>
          </button>
        </div>
        <h1>Payment Method.</h1>
        <p className="main__info">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="main__img">
        <img src={mainImg} alt="mainImg" />
      </div>
    </main>
  );
};

export default Main;
