import Footer from '../components/footer/footer'
import OurStory from './our-story'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <OurStory />
      <div className={styles.Footer}>
        <Footer />
      </div>
    </main>
  )
}