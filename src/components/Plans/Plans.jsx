import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";

//data
import { plansData } from "./../../data/plansData";

const Plans = () => {
  return (
    <div className="plans">
      <div className="programs-header">
        <span className="stoke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stoke-text">now with us </span>
      </div>

      <div className="plans-card">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>see more benefits -&gt; </span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
