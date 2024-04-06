"use client";

import styles from "./footer.module.css";
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { SiDoordash, SiUbereats } from "react-icons/si";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="Elisa_Orizzontale_White.png"
            alt="Elisa Gelato logo"
          />
          <p>© Copyright 2023 | All rights reserved. </p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.acknowledge}>
          <p>
            We acknowledge the Traditional Owners of Country throughout
            Australia. We pay our respects to Elders past and present, and to
            all Aboriginal and Torres Strait Islander peoples
          </p>
          {/*                         <ul>
                            <li>Opening hours:</li>
                            <br></br>
                            <li>Mon-Wed: 3pm-9pm</li>
                            <li>Thur-Sun: 1pm-10pm</li>
                        </ul> */}
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.contacts}>
          <h2>Elisa Gelato Pty Ltd</h2>
          <p>
            Address: <a href="https://www.google.com/maps/place/Elisa+Gelato+%7C+Authentic+Italian+Gelato/@-33.9197391,151.2423377,15z/data=!4m2!3m1!1s0x0:0x4d17bf38ae964de6?sa=X&ved=2ahUKEwisoqDz5pWEAxVKRmwGHQUHDIMQ_BJ6BAgOEAA">
              32-34 Perouse Road, Randwick NSW 2031
            </a>
          </p>

          <p>
            Phone: <a href="tel:+61-430-568-805">0430 568 805</a>
          </p>
        </div>
      </div>
      <div className={`${styles.column} ${styles.iconContainer}`}>
        <div className={styles.icon}>
          <a href="https://www.facebook.com/profile.php?id=100093169569973&mibextid=LQQJ4d">
            <FaFacebook className={styles.icon} />
          </a>
        </div>
        <div className={styles.icon}>
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
    </div>
  );
}
