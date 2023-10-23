import Footer from '../components/footer/footer'
import styles from '../page.module.css'
import Diclaimer from './diclaimer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Diclaimer />
      <Footer />
    </main>
  )
}
