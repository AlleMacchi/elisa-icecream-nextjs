import Footer from './components/footer/footer'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
