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

  // Helper to render hours with bold day and italic time
  const renderHour = (day, time) => (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <strong>{day}</strong>
      <span style={{ fontStyle: "italic", textAlign: "right" }}>{time}</span>
    </div>
  );

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
              <p style={{ fontSize: "1.2em", marginBottom: "0.5em" }}>
                <strong>Winter Opening Hours</strong>
              </p>
              <div></div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Monday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>Closed</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Tuesday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>7am - 9pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Wednesday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>7am - 9pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Thursday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>7am - 9pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Friday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>7am - 10pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Saturday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>7am - 10pm</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong>Sunday</strong>
                  <span style={{ fontStyle: "", textAlign: "right" }}>1pm - 9pm</span>
                </div>
                <p style={{ fontSize: "", marginTop: "0.5em" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>Café</strong>
                    <span style={{ fontStyle: "", textAlign: "right" }}>until 2pm</span>
                  </span>
                </p>
                <p style={{ fontSize: "" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <strong>Gelato</strong>
                    <span style={{ fontStyle: "", textAlign: "right" }}>from 1pm</span>
                  </span>
                </p>
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
