import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/Authentication/Login";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sukhdham Yoga Classes</title>
        <meta name="description" content="Yoga Classes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <Login />
      </div>
    </div>
  );
}
