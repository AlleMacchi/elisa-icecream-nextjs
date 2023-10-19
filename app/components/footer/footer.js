"use client"

import styles from './footer.module.css'
import React from 'react'; 
import Popup from 'reactjs-popup'; 

export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.wrap}>
            <div className={styles.column}>
                <div>Elisa Gelato pty</div>
                <div>18/20 Bellevue Rd, Bellevue Hill NSW 2023</div> 
            </div>
                <div className={styles.column}>
                    <div> 
                        <Popup trigger={<button className={styles.disclaimer}> Disclaimer -Details </button>}  
                        position="right center"> 
                        <div className={styles.disclaimerText}>
                            <p>"Disclaimer This website is operated by Elisa Gelato Pty Ltd (Elisa Gelato). 
                                By accessing our site, you agree to be bound by the following terms and conditions. 
                                We are not responsible if information made available on this site is not accurate, complete or current. 
                                The material on this site is provided for general information only and should not be relied upon. 
                                Any reliance on the material on this site is at your own risk. We reserve the right to modify 
                                the contents of this site at any time, but we have no obligation to update any information on our site.
                                Elisa Gelato is the owner or licensee of all intellectual property rights in the trademarks, brands, 
                                and logos identified on our website, all content, images, photographs, text, design, illustrations and 
                                descriptions of the products, and in the design and layout of the Elisa Gelato site.  
                                Except as permitted under the Copyright Act 1968 (Cth), use of any content of the Elisa Gelato site 
                                is strictly prohibited without prior written consent of Elisa Gelato."</p>
                        </div> 
                        </Popup> 
                    </div> 
                </div>
                <div className={styles.column}>
                    <div className={styles.follow}>Follow us</div> 
                    <div className={styles.iconContainer}>
                        <div className={styles.iconLeft}><img className={styles.icon} src='/icons8-facebook-50_W.png'></img></div>                    
                        <div className={styles.iconRight}></div><img className={styles.icon} src='/icons8-instagram-50_W.png'></img></div>
                    </div>
                </div>
            </div>
    )
}