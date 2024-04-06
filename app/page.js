import AuthenticGelato from "./components/authentic-gelato/auth";
import DemoCarousel from "./components/carousel/ReactCarousel";
import styles from "./page.module.css";
import Head from "./components/head/head";

export default function Home() {
  return (
    <div>
      <>
        <Head
          title="Elisa Gelato | Authentic Italian Gelato | Italian Gelateria Sydney"
          content="Transport yourself to Italy with a taste of the best Italian ice cream in Sydney. Come to experience an Authentic Italian Gelato in Randwick!"
          href="https://elisagelato.com.au/"
          srcScript="/clarity.js"
        />
        <DemoCarousel />
        <AuthenticGelato />
      </>
    </div>
  );
}
