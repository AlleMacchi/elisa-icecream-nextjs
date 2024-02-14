import React from "react";
import * as styles from "./onlineOrders.module.css";
import Head from "../components/head/head";
import { Link } from "next/link";

export default function OnlineOrders() {
  return (
    <>
      <Head
        title="Elisa Gelato Online Orders"
        content="Order online"
        href="https://elisagelato.com.au/onlineorders"
      />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>our gelato delivery partners</h1>
        </div>
        <div className={styles.banner}>
          <div className={styles.imagesContainer}>
            <img
              src="./Carousel_8.webp"
              className={styles.photo}
              alt="image9"
            />
          </div>

          <div className={styles.CTA}>
            <img
              src="./DoorDashLogo.webp"
              className={styles.DoorDashLogo}
              alt="image9"
            />
            <h2>get more from your neighborhood</h2>
            <a href="https://www.doordash.com/en-AU/store/elisa-gelato-randwick-27547191/">
              <button className={styles.DoorDashButton}>Order Now</button>
            </a>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.imagesContainer}>
            <img
              src="./Carousel_5.webp"
              className={styles.photo}
              alt="image9"
            />
          </div>

          <div className={styles.CTA}>
            <img
              src="./UberEatsLogo.webp"
              className={styles.UberLogo}
              alt="image9"
            />
            <h2>Tonight, I’ll be EAting</h2>
            <a href="https://www.ubereats.com/au/store/elisa-gelato/rixXkAmRRq2-R5K2DwOwdg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMmVsaXNhJTIwQk9VVElRVUUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKTV81Z3labEEwaTBSZGJZNzlfa25NcmclMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBLTguNjU5MDY5OCUyQyUyMmxvbmdpdHVkZSUyMiUzQTExNS4yMTU5NzYyJTdE">
              <button className={styles.UberButton}>Order Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
