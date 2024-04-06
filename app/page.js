import AuthenticGelato from './components/authentic-gelato/auth'
import DemoCarousel from './components/carousel/ReactCarousel'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <h1 style="display:none"></h1>
      <DemoCarousel />
      <AuthenticGelato />
    </div>
  )
}
