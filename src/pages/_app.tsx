import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../template/Header";
import Footer from "../template/Footer";
import LanguageProvider from "../context/LanguageProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
    </LanguageProvider>
  );
}

export default MyApp;
