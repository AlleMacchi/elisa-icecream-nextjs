import Navbar from "@/components/Navbar/Navbar";
import Footer from "../layout/Footer";
import FlavoursMenu from "./flavoursMenu";

export default function Flavours() {
    return (
      <div className="main">
        <Navbar />
        <div className='mainContent'> 
          <FlavoursMenu />
        </div>
        <Footer />
      </div>
    )
  }