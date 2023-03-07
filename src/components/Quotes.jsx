import React from "react";
import { useState } from "react";
import { feedback, clients } from "../constants";
import { quotes } from "../assets";
const Quotes = () => {
  const [clicked, setClicked] = useState(1);
  return (
    <div id="aboutus" className="quotes">
      <div className="quotes__heading">
        <h2>What people are saying about us</h2>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="quotes__cards ">
        {feedback.map((feba, index) => {
          return (
            <div
              onMouseEnter={() => setClicked(index)}
              className={`quotes__card ${index === clicked ? "new" : null}`}
              key={feba.id}
            >
              <img className="quotes__img" src={quotes} alt="quotes" />
              <p>{feba.content}</p>
              <div className="quotes__founder">
                <img src={feba.img} alt="people" />
                <div>
                  <p>{feba.name}</p>
                  <p className="quotes__title">{feba.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="quotes__clients">
        {clients.map((client) => {
          return (
            <div className="quotes__client" key={client.id}>
              <img src={client.logo} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
