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
          content="Tansport your self to Italy wih a taste of the best italian ice cream in Sydney.If you are looking for a Italian Gelateria Sydney Come to experience an
            Authentic Italian Gelato in Randiwck!"
          href="https://elisagelato.com.au/"
          srcScript="/clarity.js"
        />
        <DemoCarousel />
        <AuthenticGelato />
      </>
    </div>
  );
}
