import React from "react";
import "./Contact.css";
import styles from "./contact.module.css";
import Head from "../components/head/head";

function ContactDetails2() {
  return (
    <>
      <Head
        title="Find Us | Elisa Gelato | Italian Gelato Sydney"
        content="Find the best gelato near you at our gelato shop Elisa Gelato, 32-34 Perouse Rd, Randwick NSW 2031, Australia. Visit us to experience the best Italian ice cream in Sydney."
        href="https://elisagelato.com.au/contact"
        srcScript="/clarity.js"
      />
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.shopView}>
            <img src="FindUs.jpg" alt="Find Us"></img>
          </div>
          <div className={styles.contactDetails}>
            <h1>Elisa Gelato Pty Ltd</h1>
            <div>32-34 Perouse Road, Randwick NSW 2031</div>
            <div>Phone: 0430 568 805</div>
            <br></br>
            <div className={styles.tradeTime}>
              {/* Spring Hours */}
            <div className={`${styles.follow} ${styles.OpeningTitle}`}>
                <strong>Spring Opening Hours</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>OPEN EVERYDAY UNTIL 10PM</div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Café: </strong> 
                <p>Tues to Sat 7:00am-2:00pm</p> 
                {/* <p>Sun 8:00am-2:00pm </p> */}
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Gelato:</strong> 
                <p>Mon 5:00pm-10:00pm</p>
                <p>Tues to Sun 11:00am-10:00pm</p>
              </div>
              {/* OLD Hours */}
              {/* <div className={`${styles.follow} ${styles.OpeningTitle}`}>
                <strong>Opening Hours</strong>
              </div> */}
              {/* <div className={`${styles.follow} ${styles.OpeningTime}`}>Mon-Wed: 3pm-9pm</div> */}
              {/* <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Café</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                Mon-Sat: 7.00 am – 2.00 pm
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                Sun: 8.00 am – 2.00 pm
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Gelato</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                Mon-Sun: 11.00 am – 10.00 pm
              </div> */}

              {/* Winter Hours */}
              {/* <div className={`${styles.follow} ${styles.OpeningTitle}`}>
                <strong>Winter Opening Hours</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>OPEN TUESDAY TO SUNDAY UNTIL 10PM</div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Café: </strong> 
                <p>Thurs to Sat 7:00am-2:00pm</p> 
                <p>Sun 8:00am-2:00pm </p>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Gelato:</strong> 
                <p>Tues & Wed 5:00pm-10:00pm</p>
                <p>Thurs to Sun 12:00pm-10:00pm</p>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}><strong>Closed Monday</strong></div> */}
            </div>            
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8315549343374!2d151.23976277644212!3d-33.919734621700094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b22258adee01%3A0x859e83be6700c8a5!2s32-34%20Perouse%20Rd%2C%20Randwick%20NSW%202031!5e0!3m2!1sen!2sau!4v1698051691878!5m2!1sen!2sau"
              width={"100%"}
              height={"100%"}
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails2;
