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
              <p className={styles.hoursTitle}>Opening Hours</p>
              <a href="https://share.google/1Gik58q0m4c6jITfC" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", cursor: "pointer" }}>
                <img src="/GelatoClock.jpeg" alt="Updated opening hours on our Google profile" style={{ width: "100%", maxWidth: "160px", display: "block", border: "2px solid transparent", borderRadius: "8px", transition: "border 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.border = "2px solid #c0392b"}
                  onMouseLeave={e => e.currentTarget.style.border = "2px solid transparent"}
                />
              </a>
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
