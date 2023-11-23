import React from "react";
import "./Contact.css";
import styles from './contact.module.css'
import Head from "../components/head/head";

function ContactDetails2(){
    return(
        <>
        <Head
            title='Find Us'
            content="Where is Elisa Gelato in Sydney"
            href="https://elisagelato.com.au/contact"
        />
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.left}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8315549343374!2d151.23976277644212!3d-33.919734621700094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b22258adee01%3A0x859e83be6700c8a5!2s32-34%20Perouse%20Rd%2C%20Randwick%20NSW%202031!5e0!3m2!1sen!2sau!4v1698051691878!5m2!1sen!2sau" 
                        width={"100%"} 
                        height={"100%"} 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <div className={styles.right}>
                    <h2>Elisa Gelato Pty Ltd</h2>
                    <div>32-34 Perouse Road, Randwick NSW 2031</div> 
                    <div>Phone: 0430 568 805</div> 
                    <br></br>
                    <div>
                        <div> Opening hours:</div>
                        <div>Mon-Wed: 3pm-9pm</div>
                        <div>Thur-Sun: 1pm-10pm</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ContactDetails2;