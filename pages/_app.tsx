import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../template/Header";
import { useState } from "react";
import Footer from "../template/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
