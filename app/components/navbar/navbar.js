"use client";
import React from "react";
import styles from "./navbar.module.css";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiDoordash, SiUbereats } from "react-icons/si";

export default function Navbar() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarcontainer}>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <div className={styles.hamburgerlines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>

          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles.menuitems}>
          <li>
            <a href="/">Authentic Gelato</a>
          </li>
          <li>
            <a href="/ourstory">Our Story</a>
          </li>
          <li>
            <a href="/flavours">Traditional Flavours</a>
          </li>
          <li>
            <a href="/gelato-delivery-sydney-online-orders">Online Orders</a>
          </li>
          <li>
            <a href="/faq">
              FAQ<span>s</span>
            </a>
          </li>
          <li>
            <a href="/contact">Find us</a>
          </li>
          <div className={styles.wrap}>
            <div className={styles.iconContainer}>
              <div className={styles.iconLeft}>
                <a href="https://www.facebook.com/profile.php?id=100093169569973&mibextid=LQQJ4d">
                  <FaFacebook className={styles.icon} />
                </a>
              </div>
              <div className={styles.iconLeft}>
                <a href="https://www.instagram.com/elisagelatoaus/">
                  <FaInstagram className={styles.icon} />
                </a>
              </div>
              <div className={styles.iconLeft}>
                <a href="https://www.tiktok.com/@elisagelatoaus?_t=8hvhZXOsRAv&_r=1">
                  <FaTiktok className={styles.icon} />
                </a>
              </div>
              <div className={styles.iconLeft}>
                <a href="https://www.doordash.com/en-AU/store/elisa-gelato-randwick-27547191/">
                  <SiDoordash className={styles.icon} />
                </a>
              </div>
              <div className={styles.iconLeft}>
                <a href="https://www.ubereats.com/au/store/elisa-gelato/rixXkAmRRq2-R5K2DwOwdg">
                  <SiUbereats className={styles.icon} />
                </a>
              </div>
            </div>
            <div className={styles.tradeTime}>
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
              </div> */}
              {/* Sping Hours */}
              {/* <div className={`${styles.follow} ${styles.OpeningTime}`}><strong>Closed Monday</strong></div> */}
              {/* <div className={`${styles.follow} ${styles.OpeningTitle}`}>
                <strong>Spring Opening Hours</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>OPEN EVERYDAY UNTIL 10PM</div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Café: </strong> 
                <p>Tues to Sat 7:00am-2:00pm</p> 
                <p>Sun 8:00am-2:00pm </p>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Gelato:</strong> 
                <p>Mon 5:00pm-10:00pm</p>
                <p>Tues to Sun 11:00am-10:00pm</p>
              </div> */}
              <div className={`${styles.follow} ${styles.OpeningTitle}`}>
                <strong>Autumn Opening Hours</strong>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                OPEN TUESDAY TO SUNDAY UNTIL 10PM
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Café: </strong>
                <p>Tues to Sat 7:00am-2:00pm</p>
                {/* <p>Sun 8:00am-2:00pm </p> */}
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>Gelato:</strong>
                <p>Tues to Sat 11:00am-10:00pm</p>
                <p>Sun 1:00pm-10:00pm</p>
              </div>
              <div className={`${styles.follow} ${styles.OpeningTime}`}>
                <strong>(Closed On Monday)</strong>
              </div>
            </div>
          </div>
        </ul>
        <div className={styles.logo}>
          <a className={styles.logoFull} href="/">
            <img src="logo.jpg" alt="Elisa Gelato logo" />
          </a>
          <a className={styles.logoMobile} href="/">
            <img src="Elisa_Orizzontale_White.png" alt="Elisa Gelato logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}
