"use client"

import styles from './footer.module.css'
import React from 'react'; 
import { FaInstagram, FaFacebook} from 'react-icons/fa';

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
                        <ul>
                            <li>Opening hours:</li>
                            <br></br>
                            <li>Mon-Wed: 3pm-9pm</li>
                            <li>Thur-Sun: 1pm-10pm</li>
                        </ul>
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
                    <div className={styles.icon}><FaFacebook className={styles.icon} /></div> 
                    <div className={styles.icon}><FaInstagram className={styles.icon}/></div> 
                </div>
            </div>
        </div>
    )
}