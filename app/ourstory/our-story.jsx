import React from "react";
import styles from './our-story.module.css'

export default function OurStory(){
    return(
    <div className={styles.container}>
        <div className={styles.wrap}>

            <div className={styles.title}>
                <h1>A love story with gelato</h1>
            </div>
        
            <div className={`${styles.text} ${styles.text1}`}>
                <p>Indulge in the sweet taste of love with Elisa's authentic gelato,
                         crafted from a love story that spans across continents. 
                         Experience the same joy that Christelle and Federico, 
                         the founders of Elisa Gelato, found in their favourite 
                         gelateria in Bologna, now brought to Australia just for you. 
                         Let Elisa Gelato be your happy place, where you can savour every 
                         mouthwatering scoop and create your own unforgettable moments. 
                         Taste the love, taste the tradition, and treat yourself to 
                         the true taste of Bologna right here in Sydney.
                </p>
            </div>

            <div className={styles.img}>
                <div class={styles.column}>
                    <img src="TogliereIlGelato.jpg"></img>
                    <img src="BolognaDiNotte.jpg"></img>
                </div>    
                <div class={styles.column}>
                    <img src="Piazza_Maggiore.jpg"></img>
                    <img src="Preparation.jpg"></img>

                </div>  
            </div>

        </div>
    </div>
    )
}