"use client"
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import './globals.css'
import ReactGA from "react-ga4";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function RootLayout({ children }) {
  ReactGA.initialize("G-7HRCDMZRZS");
  

  return (
    <html lang="en">
      <body>  
        <header><Header /></header>
        <nav><Navbar /></nav>
        <main>
          <div id='content-page'>
            <GoogleAnalytics trackPageViews={true} />
            {children}
          </div>
          <footer><Footer /></footer>
        </main>
      </body>
    </html>
  )
}
