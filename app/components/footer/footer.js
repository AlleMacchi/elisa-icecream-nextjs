"use client"

import styles from './footer.module.css'
import React from 'react'; 
import { FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa';

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.column}>
                    <div>
                        <ul>
                            <li><img className={styles.logo} src='Elisa_Orizzontale_White.png' alt="Elisa Gelato logo"/></li>
                            <li>© Copyright 2023 | All rights reserved. </li>
                        </ul>
                        
                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <p>
                        We acknowledge the Traditional Owners of Country throughout Australia. 
                        We pay our respects to Elders past and present, and to all Aboriginal 
                        and Torres Strait Islander peoples
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
                    <div> 
                        <ul>
                            <li><a href="/">Authentic Gelato</a></li>
                            <li><a href="/flavours">Traditional Flavours</a></li>
                            <li><a href="/faq">FAQ<span>s</span></a></li>
                            <li><a href="/contact">Find us</a></li>  
                            <li><a href="/disclaimer">Website use</a></li>  
                        </ul>
                    </div> 
                </div>
                <div className={`${styles.column} ${styles.iconContainer}`}>
                    <div className={styles.icon}><a href='https://www.facebook.com/profile.php?id=100093169569973&mibextid=LQQJ4d'><FaFacebook className={styles.icon} /></a></div> 
                    <div className={styles.icon}><a href='https://www.instagram.com/elisagelatoaus/'><FaInstagram className={styles.icon}/></a></div> 
                    <div className={styles.iconLeft}><a href="https://www.tiktok.com/@elisagelatoaus?_t=8hvhZXOsRAv&_r=1">< FaTiktok className={styles.icon}/></a></div> 
                </div>
            </div>
        </div>
    )
}