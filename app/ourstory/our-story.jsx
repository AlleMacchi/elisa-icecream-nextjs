import React from "react";
import styles from "./our-story.module.css";
import Head from "../components/head/head";

export default function OurStory() {
  return (
    <>
      <Head
        title="Our Story | Elisa Gelato | Italian Gelato Sydney"
        content="A love story with italian gelato bringing Bolognastyle best ice cream to Sydney. Taste the love at our Italian Gelateria in Sydney, 32-34 Perouse Rd, Randwick NSW 2031, Australia."
        href="https://elisagelato.com.au/ourstory"
        srcScript="/clarity.js"
      />
      <div className={styles.container}>
        {/* Laptop Version    */}
        <div className={styles.wrap}>
          <div className={styles.title}>
            <h1>A love story with gelato</h1>
          </div>

          <div className={`${styles.text} ${styles.text1}`}>
            <p>
              Indulge in the sweet taste of love with Elisa's authentic gelato,
              crafted from a love story that spans across continents.{" "}
            </p>
            <br></br>
            <p>
              Experience the same joy that Christelle and Federico, the founders
              of Elisa Gelato, found in their favourite gelateria in Bologna,
              now brought to Australia just for you.{" "}
            </p>
            <br></br>
            <p>
              Let Elisa Gelato be your happy place, where you can savour every
              mouthwatering scoop and create your own unforgettable moments.{" "}
            </p>
            <br></br>
            <p>
              Taste the love, taste the tradition, and treat yourself to the
              true taste of Bologna right here in Sydney.
            </p>
          </div>

          <div className={styles.img}>
            <div className={styles.column}>
              <img src="IMG_5995.jpg"></img>
              <img src="ElisaBoard.jpg"></img>
            </div>
            <div className={styles.column}>
              <img src="Owners.webp"></img>
              <img src="IMG_3293.jpg"></img>
            </div>
          </div>
        </div>

        {/* Mobile Version    */}
        <div className={styles.mobile}>
          <div className={styles.title}>
            <h2>A love story with gelato</h2>
          </div>
          <div className={styles.mobile_container}>
            <div className={styles.mobile_item}>
              <img src="IMG_5995_Square.jpg"></img>
            </div>
            <div className={styles.mobile_item}>
              <img className={styles.ownersImg} src="Owners.webp"></img>
            </div>
            <div className={styles.mobile_item_text}>
              <p>
                Indulge in the sweet taste of love with Elisa's authentic
                gelato, crafted from a love story that spans across continents.
                Experience the same joy that Christelle and Federico, the
                founders of Elisa Gelato, found in their favourite gelateria in
                Bologna, now brought to Australia just for you.
              </p>
            </div>
            <div className={styles.mobile_item}>
              <img className={styles.elisaBoard} src="ElisaBoard.jpg"></img>
            </div>
            <div className={styles.mobile_item}>
              <img src="IMG_3293_Square.jpg"></img>
            </div>
            <div className={styles.mobile_item_text}>
              <p>
                Let Elisa Gelato be your happy place, where you can savour every
                mouthwatering scoop and create your own unforgettable moments.
                Taste the love, taste the tradition, and treat yourself to the
                true taste of Bologna right here in Sydney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
