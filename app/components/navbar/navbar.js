"use client"
import React from "react";
import styles from './navbar.module.css'

export default function Navbar(){
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };
  

    return(
    <nav className={styles.navbar}>
        <div className={styles.navbarcontainer}>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <div className={styles.hamburgerlines}>
                <span className={`${styles.line} ${styles.line1}`}></span>
                <span className={`${styles.line} ${styles.line2}`}></span>
                <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <ul className={styles.menuitems}>
                <li><a href="/">Authentic Gelato</a></li>
                <li><a href="/ourstory">Our Story</a></li>
                <li><a href="/flavours">Traditional Flavours</a></li>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/contact">Contacts</a></li>
            </ul>
            <div className={styles.logo}>  
                <a className={styles.logoFull} href="/"><img src='logo.jpg' alt="Elisa Gelato logo"/></a>
                <a className={styles.logoMobile} href="/"><img src='Elisa_Orizzontale_White.png' alt="Elisa Gelato logo"/></a>
            </div>
        </div>
        </nav>
    )
}