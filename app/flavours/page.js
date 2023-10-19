import Footer from '../components/footer/footer'
import styles from '../page.module.css'
import FlavoursMenu from './flavours'

export default function Home() {
  return (
    <main className={styles.main}>
      <FlavoursMenu />
      <Footer />
    </main>
  )
}
