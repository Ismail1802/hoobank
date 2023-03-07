import React from "react";
import { bill, apple, google } from "../assets";
const Bill = () => {
  return (
    <div className="bill">
      <div className="bill__img">
        <img src={bill} alt="bill" />
      </div>
      <div className="bill__text">
        <h2>Easily control your billing & invoicing.</h2>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="bill__download">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default Bill;
