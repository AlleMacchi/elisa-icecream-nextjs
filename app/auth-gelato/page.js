import Navbar from "@/components/Navbar/Navbar";
import Footer from "../layout/Footer";
import "../../components/AboutUs/about.css"
import "./authGelato.css"

export default function AuthGelato() {
    return (
      <div className="main">
        <Navbar />
        <div className='mainContent'> 
          <div className="AuthGelatoPage"> 
              <div className='AuthGelato-container'>
                  <h1>Authentic Gelato</h1>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit 
                                in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          </div> 
        </div>
        <Footer />
      </div>
    )
  }