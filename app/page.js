import AboutUs from "@/components/AboutUs/about";
import NextJsCarousel from "@/components/Carousel/NextJsCarousel";
import Ingredients from "@/components/Ingredients/Ingredients";
import Navbar from "@/components/Navbar/Navbar";
import WhatPeopleSay from "@/components/WhatPeopleSay/WhatPeopleSay";
import Footer from './layout/Footer'

export default function Home() {
  return (
    <div className="main">
        <Navbar />
        <div className='mainContent'> 
          <NextJsCarousel />
          <AboutUs />
          <Ingredients />
          <WhatPeopleSay />
        </div>
        <Footer />
    </div>
  )
}
