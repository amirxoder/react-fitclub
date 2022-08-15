import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Join.css";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1je4hc",
        "template_u5fdj0x",
        form.current,
        "ifH8rjC4OduTe_RYs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stoke-text">ready to</span>
          <span>level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stoke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-j  ">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
