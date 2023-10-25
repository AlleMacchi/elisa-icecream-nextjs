"use client"

import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import './ReactCarousel.css'
  
export default class NextJsCarousel extends Component { 
    render() { 
        return ( 
            <div className='Carousel-container'>
            <div className='Horizontal'>
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
                      <img src="/Carousel_1.jpg" alt="image1"/>  
                  </div> 
                  <div> 
                      <img src="/Carousel_2.jpg" alt="image2" />   
                  </div> 
                  <div> 
                      <img src="/Carousel_3.jpg" alt="image3"/>  
                  </div> 
              </Carousel> 
            </div>
            <div className='Vertical'>
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
                        <img src="/Carousel_1_Vertical.jpg" alt="image1"/>  
                    </div> 
                    <div> 
                        <img src="/Carousel_2_Vertical.jpg" alt="image2" />   
                    </div> 
                    <div> 
                        <img src="/Carousel_3_Vertical.jpg" alt="image3"/>  
                    </div> 
    
                </Carousel> 
                </div>
            </div>
        ); 
    } 
};
