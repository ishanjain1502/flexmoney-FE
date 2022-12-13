import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/Authentication/Login";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-slate-400 min-w-full min-h-full">
      <Head>
        <title>Sukhdham Yoga Classes</title>
        <meta name="description" content="Yoga Classes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="w-full h-auto text-3xl p-3 bg-slate-400 min-w-full min-h-full " >
          Sukhdham Yoga Classes
          <br/>
          <br/>
          Learn the ancient Indian wisdom, and make yourself fit and happy
        </div>
        <Login />
      </div>
      <Link className="bg-sky-500 hover:bg-sky-700"  href="/register">New here?</Link>
    </div>
  );
}
