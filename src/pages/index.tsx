import type { NextPage } from "next";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import About from "../template/About";
import Projects from "../template/Projects";
import Welcome from "../template/Welcome";
import Work from "../template/Work";
import Contact from "../template/Contact";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Portfólio Lucas A. Santos"
        description="Esse é o meu portfólio, onde você encontrará informações sobre mim e meus trabalhos :)"
        canonical="https://lucasquearis.vercel.app/"
        openGraph={{
          url: "https://lucasquearis.vercel.app/",
          title: "Portfólio Lucas A. Santos",
          description:
            "Esse é o meu portfólio, onde você encontrará informações sobre mim e meus trabalhos :)",
          images: [
            {
              url: "https://lucasquearis.vercel.app/assets/images/perfil.jpeg",
              width: 500,
              height: 500,
              alt: "Lucas A. Santos",
              type: "image/jpeg",
            },
          ],
          siteName: "Portfólio Lucas A. Santos",
          locale: "pt-BR",
          type: "website",
        }}
        twitter={{
          handle: "@handle",
          site: "@lucasquearis",
          cardType: "summary_large_image",
        }}
      />
      <main className="bg-primary-background-primary p-12 md:p-0 md:px-28 lg:md:px-36">
        <Welcome />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <SocialProfileJsonLd
        type="Person"
        name="Lucas de Almeida Santos"
        url="https://lucasquearis.vercel.app/"
        sameAs={[
          "https://www.instagram.com/lucasquearis/",
          "https://www.linkedin.com/in/lucasquearis",
          "https://github.com/lucasquearis",
          "https://www.youtube.com/@lucasquearis",
        ]}
      />
    </>
  );
};

export default Home;
