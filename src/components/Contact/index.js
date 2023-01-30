import React from "react";
import "./contact.css";
import { BgContact } from "../../assets/";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-img">
          <img src={BgContact} alt=""></img>
        </div>
        <div className="form-contact">
          <h1>Contact Me</h1>
          <form>
            <div className="form-group-top">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="text" id="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea placeholder="Enter Message" id="messagge"></textarea>
            </div>
            <div className="form-group">
              <button className="Btn-CTA">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
