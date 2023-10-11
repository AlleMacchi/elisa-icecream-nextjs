import Navbar from "@/components/Navbar/Navbar";
import Footer from "../layout/Footer";
import "../../components/AboutUs/about.css"
import "./aboutPage.css"

export default function About() {
    return (
      <div className="main">
        <Navbar />
        <div className='mainContent'> 
          <div className="AboutUsPage"> 
              <div className='About-container'>
                  <h1>About Us</h1>
                  <hr></hr>
                  <p>With Elisa Gelato, experience the true taste of Bologna without leaving Sydney
                      Our authentic gelato, crafted with traditional recipes and savoir-faire from 
                      renowned gelato makers in Bologna, offers a unique experience and indulgence at its best. 
                      With its creamy texture and rich flavours, our gelato is the perfect balance of sweetness and richness. 
                      Made in small batches using traditional methods and high-quality ingredients, 
                      our gelato offers the perfect balance of texture and flavour.
                      At Elisa Gelato, we use the traditional way of preparing, storing and serving high 
                      quality gelato. Gelato is stored in pozzetti – stainless steel cylindrical containers 
                      deep inside the counter and covered with lids.  Using pozzetti ensures that our gelato 
                      remains at the right temperature, so as to maintain its soft, smooth and creamy texture.
                      We are not about marketing or international expansion.  We are all about quality and tradition 
                      to offer you the experience of an authentic Italian gelato. With every spoon, you'll feel like 
                      you've been transported to the streets of Bologna.
                  </p>
                  <div className="AboutUs-container">
                    <div className="AboutUs-item"><img src="Bologna_Basilica_di_S._Maria_dei_Servi_Portico_notturna.jpg"></img></div>  
                    <div className="AboutUs-item"><img src="bologna-notturna.jpg"></img></div>                     
                    <div className="AboutUs-item"><img src="experience-2.5.jpg"></img></div> 
                    <div className="AboutUs-item"><img src="Bologna_Giardino_della_Montagnola_notturna.jpg"></img></div> 
                  </div>
              </div>
          </div> 
        </div>
        <Footer />
      </div>
    )
  }