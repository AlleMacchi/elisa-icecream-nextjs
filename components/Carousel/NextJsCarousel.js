"use client"

import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
  
export default class NextJsCarousel extends Component { 
    render() { 
        return ( 
            <div className='mainCarousel'> 
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                interval={2000}
                transitionTime={1000}
                swipeScrollTolerance={5}
              > 
                  <div> 
                      <img src="/Carousel_1.jpg" alt="image1"/>  
                  </div> 
                  <div> 
                      <img src="/Carousel_2.jpg" alt="image2" />   
                  </div> 
                  <div> 
                      <img src="/Carousel_3.png" alt="image3"/>  
                  </div> 
              </Carousel> 
            </div> 
        ); 
    } 
};