import AuthenticGelato from './components/authentic-gelato/auth'
import DemoCarousel from './components/carousel/ReactCarousel'
import Footer from './components/footer/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <DemoCarousel />
      <AuthenticGelato />
      <Footer />
    </main>
  )
}
