import React from "react";
import { stats } from "../constants/index";
import CountUp from "react-countup";
const Achievments = () => {
  return (
    <div className="achievments">
      {stats.map((stat, index) => {
        return (
          <React.Fragment key={stat.id}>
            <div className="achievments__single">
              <p className="achievments__value">
                {index === 2 ? "$" : null}
                <CountUp end={stat.value} duration={2} />
                {index === 2 ? "M" : null}+
              </p>
              <p className="achievments__title">{stat.title}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Achievments;
