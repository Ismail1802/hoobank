import React from "react";
import Button from "./Button";
import { card } from "../assets";
const Card = () => {
  return (
    <div className="card">
      <div className="card__text">
        <h2>Find a better card deal in few easy steps.</h2>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="card__img">
        <img src={card} alt="" />
      </div>
    </div>
  );
};

export default Card;
