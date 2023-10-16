import React from "react";
import "./Contact.css";

function ContactDetails(){
    return(
        <div className="Contact-container">
            <div className="Contact-box">
                <div className="Contact-left"></div>
                <div className="Contact-right">
                    <h2>Contact Us</h2>
                    <input type="text" className="field" placeholder="Your Name"></input>
                    <input type="email" className="field" placeholder="Your Email"></input>
                    <input type="text" className="field" placeholder="Your Phone"></input>
                    <textarea className="field area" placeholder="Message"></textarea>
                    <button className="btn">Send</button>
                </div>
            </div>

        </div>
    )
}

export default ContactDetails;