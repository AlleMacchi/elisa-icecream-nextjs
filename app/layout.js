import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>  
        <header><Header /></header>
        <nav><Navbar /></nav>
        <main>
          <div id='content-page'>
            {children}
          </div>
          <footer><Footer /></footer>
        </main>
      </body>
    </html>
  )
}
