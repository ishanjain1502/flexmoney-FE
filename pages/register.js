import React from "react";
import Register from "../components/Authentication/Register";
import Head from "next/head";
import Link from "next/link";

const register = () => {
  return (
    <div>
      <Head>
        <title>Register For Yoga</title>
        <meta name="description" content="Yoga Classes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <div className="text-3xl bg-slate-400 min-w-full min-h-full p-3">
          Join today and learn the art to keep your mind, body and soul balanced
        </div>
        <Register />
      </div>
      <Link className="bg-sky-500 hover:bg-sky-700" href="/">
        Already have an account
      </Link>
    </div>
  );
};

export default register;
