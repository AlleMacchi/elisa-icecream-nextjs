import React from "react";
import "./Contact.css";

function ContactDetails(){
    return(
        <>
        <section>
            <div class="contact-container container">
                <div class="contact-img">
                </div>

                <div class="form-container">
                <h2>Contact Us</h2>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="E-Mail" />
                <textarea
                cols="30"
                rows="6"
                placeholder="Type Your Message"
                ></textarea>
                <a href="#" class="btn btn-primary">Submit</a>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactDetails;