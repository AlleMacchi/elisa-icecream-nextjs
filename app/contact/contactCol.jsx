import React from "react";
import "./Contact.css";
import styles from './contact.module.css'

function ContactDetails2(){
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h2>Contact Us</h2>
                    <input type="text" className={styles.field} placeholder="Your Name"></input>
                    <input type="email" className={styles.field} placeholder="Your Email"></input>
                    <input type="text" className={styles.field} placeholder="Your Phone"></input>
                    <textarea className={ `${styles.field} ${styles.area}`} placeholder="Message"></textarea>
                    <button className={styles.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails2;