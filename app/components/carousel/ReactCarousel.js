"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ReactCarousel.css";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="Carousel-container">
        <div className="Horizontal">
          <Carousel
            animationHandler="fade"
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={false}
            interval={3000}
            transitionTime={1000}
            swipeScrollTolerance={5}
          >
            <div>
              <img
                src="/Fragola.webp"
                id="Carousel1"
                className="imageC"
                alt="image1"
              />
            </div>
            <div>
              <img
                src="/Carousel_3.jpg"
                id="Carousel2"
                className="imageC"
                alt="image2"
              />
              {/* <img src="/Carousel_2.jpg" id="ConoMango" className="imageC" alt="image2" />
              <img src="/Carousel_2.jpg" id="ConoMango" className="imageC" alt="image2" /> */}
            </div>
            {/* <div>
              <img src="/Carousel_3.jpg" id="Carousel3" className="imageC" alt="image3" />
            </div> */}
            <div id="Carousel4">
              <img
                src="/Pistacchio1.webp"
                id="Carusel4-1"
                className="imageC"
                alt="image3"
              />
              <img
                src="/Pistacchio2.webp"
                id="Carusel4-2"
                className="imageC"
                alt="image3"
              />
              <img
                src="/Pistacchio3.webp"
                id="Carusel4-3"
                className="imageC"
                alt="image3"
              />
            </div>
            <div>
              <img
                src="/Elisa.webp"
                id="Carousel4and5"
                className="imageC"
                alt="image3"
              />
            </div>
            {/* <div id="Carousel5">
              <img
                src="/Chocolate.jpg"
                id="Carousel5"
                className="imageC"
                alt="image3"
              />
            </div> */}
            <div>
              <img
                src="/Bacio.webp"
                id="Carousel6"
                className="imageC"
                alt="image3"
              />
            </div>
          </Carousel>
        </div>
        <div className="Vertical">
          <Carousel
            animationHandler="fade"
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={false}
            interval={2000}
            transitionTime={1000}
            swipeScrollTolerance={5}
          >
            <div>
              <img
                src="/Fragola.webp"
                id="Carousel1"
                className="imageC"
                alt="image1"
              />
            </div>
            <div>
              <img
                src="/Carousel_3.jpg"
                id="Carousel2"
                className="imageC"
                alt="image2"
              />
              {/* <img src="/Carousel_2.jpg" id="ConoMango" className="imageC" alt="image2" />
              <img src="/Carousel_2.jpg" id="ConoMango" className="imageC" alt="image2" /> */}
            </div>
            <div>
              <img
                src="/Pistacchio3.webp"
                id="Carusel4-3"
                className="imageC"
                alt="image3"
              />
            </div>
            {/* <div id="Carousel4">
              <img
                src="/Pistacchio1.jpg"
                id="Carusel4-1"
                className="imageC"
                alt="image3"
              />
              <img
                src="/Pistacchio2.jpg"
                id="Carusel4-2"
                className="imageC"
                alt="image3"
              />
              <img
                src="/Pistacchio3.jpg"
                id="Carusel4-3"
                className="imageC"
                alt="image3"
              />
            </div> */}
            <div>
              <img
                src="/Elisa.webp"
                id="Carousel4and5"
                className="imageC"
                alt="image3"
              />
            </div>
            <div id="Carousel5">
              <img
                src="/Chocolate.webp"
                id="Carousel5"
                className="imageC"
                alt="image3"
              />
            </div>
            {/* <div>
              <img
                src="/Bacio.jpg"
                id="Carousel6"
                className="imageC"
                alt="image3"
              />
            </div> */}
          </Carousel>
        </div>
      </div>
    );
  }
}
