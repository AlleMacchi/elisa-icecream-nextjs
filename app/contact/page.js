import Navbar from "@/components/Navbar/Navbar";
import Footer from "../layout/Footer";
import ContactDetails from "./Contact";


export default function Contact() {
    return (
      <div className="main">
        <Navbar />

          <ContactDetails />

        <Footer />
      </div>
    )
  }