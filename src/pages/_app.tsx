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
      {/* @ts-ignore */}
      <df-messenger
        intent="WELCOME"
        chat-title="Limpexo Chatbot"
        agent-id="66f841af-733e-4485-9d7a-b381a8350d4b"
        language-code="pt-br"
      />
    </LanguageProvider>
  );
}

export default MyApp;
