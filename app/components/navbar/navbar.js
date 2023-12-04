"use client"
import React from "react";
import styles from './navbar.module.css'
import { FaInstagram, FaFacebook} from 'react-icons/fa';


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
                <li><a href="/faq">FAQ<span>s</span></a></li>
                <li><a href="/contact">Find us</a></li>               
                <div className={styles.wrap}>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconLeft}><a href='https://www.facebook.com/profile.php?id=100093169569973&mibextid=LQQJ4d'><FaFacebook className={styles.icon} /></a></div> 
                        <div className={styles.iconLeft}><a href="https://www.instagram.com/elisagelatoaus/"><FaInstagram className={styles.icon}/></a></div> 
                    </div>  
                    <div className={styles.tradeTime} >
                        <div className={`${styles.follow} ${styles.OpeningTitle}`}>Opening hours:</div>
                        {/* <div className={`${styles.follow} ${styles.OpeningTime}`}>Mon-Wed: 3pm-9pm</div> */}
                        <div className={`${styles.follow} ${styles.OpeningTime}`}>Mon-Sun: 1pm till late</div>
                    </div>
                </div>
            </ul>
            <div className={styles.logo}>  
                <a className={styles.logoFull} href="/"><img src='logo.jpg' alt="Elisa Gelato logo"/></a>
                <a className={styles.logoMobile} href="/"><img src='Elisa_Orizzontale_White.png' alt="Elisa Gelato logo"/></a>
            </div>
        </div>
        </nav>
    )
}