import React from "react";
import styles from './our-story.module.css'
import Head from "next/head";

export default function OurStory(){
    return(
        <>
            <Head>
                <title>A love story with gelato</title>
                <meta
                    name="description"
                    content="Indulge in the sweet taste of love with Elisa's authentic gelato, crafted from a love story that spans across continents."
                />
                <link rel="alternate" hreflang="en-au" href="https://www.elisagelato.com.au/ourstory" />
            </Head>
            <div className={styles.container}>

                {/* Laptop Version    */}
                <div className={styles.wrap}>

                    <div className={styles.title}>
                        <h1>A love story with gelato</h1>
                    </div>
                
                    <div className={`${styles.text} ${styles.text1}`}>
                        <p>Indulge in the sweet taste of love with Elisa's authentic gelato, crafted from a love story that spans across continents. </p>
                        <br></br>
                        <p>Experience the same joy that Christelle and Federico, the founders of Elisa Gelato, found in their favourite gelateria in Bologna, now brought to Australia just for you. </p>
                        <br></br>
                        <p>Let Elisa Gelato be your happy place, where you can savour every mouthwatering scoop and create your own unforgettable moments. </p>
                        <br></br>
                        <p>Taste the love, taste the tradition, and treat yourself to the true taste of Bologna right here in Sydney.</p> 
                    </div>

                    <div className={styles.img}>
                        <div className={styles.column}>
                            <img src="IMG_5995.jpg"></img>
                            <img src="Caramel ice cream and waffle cones stock photo.jpg"></img>
                        </div>    
                        <div className={styles.column}>
                            <img src="Barman is serving ice cream stock photo.jpg"></img>
                            <img src="IMG_3293.jpg"></img>
                        </div>  
                    </div>
                </div>

                {/* Mobile Version    */}
                <div className={styles.mobile}>
                    <div className={styles.title}>
                        <h1>A love story with gelato</h1>
                    </div>
                    <div className={styles.mobile_container}>
                        <div className={styles.mobile_item}><img src="IMG_5995_Square.jpg"></img></div>
                        <div className={styles.mobile_item}><img src="Caramel ice cream and waffle cones stock photo_Square.jpg"></img></div>
                        <div className={styles.mobile_item_text}><p>Indulge in the sweet taste of love with Elisa's authentic gelato, crafted from a love story that spans across continents. 
                                                                Experience the same joy that Christelle and Federico, the founders of Elisa Gelato, found in their favourite gelateria in Bologna, 
                                                                now brought to Australia just for you.</p></div>             
                        <div className={styles.mobile_item}><img src="Barman is serving ice cream stock photo_Square.jpg"></img></div>
                        <div className={styles.mobile_item}><img src="IMG_3293_Square.jpg"></img></div>
                        <div className={styles.mobile_item_text}><p>Let Elisa Gelato be your happy place, where you can savour every mouthwatering scoop and create your own unforgettable moments. 
                                                                Taste the love, taste the tradition, and treat yourself to the true taste of Bologna right here in Sydney.</p></div>               
                    </div>
                </div>
            </div>  
    </>
    )
}