import React, { useState } from "react";
import { features } from "../constants/index";
import Button from "./Button";
const Features = () => {
  const [clicked, setClicked] = useState(1);

  return (
    <div id="features" className="features">
      <div className="features__text">
        <h2>You do the business, we’ll handle the money.</h2>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="features__list">
        {features.map((feature, index) => {
          return (
            <div
              onMouseEnter={() => setClicked(index)}
              className={`features__single ${
                index === clicked ? "active" : ""
              }`}
              key={feature.id}
            >
              <div className="features__img">
                <img src={feature.icon} alt="" />
              </div>
              <div className="features__single-text">
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
