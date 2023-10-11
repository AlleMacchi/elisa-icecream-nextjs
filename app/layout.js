import './globals.css'
import TopBar from './layout/topbar'
import Sidebar from './layout/sidebar'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Sidebar />
        {children}
        
      </body>
    </html>
  )
}
