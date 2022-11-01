import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import StyledLink from "../../components/StyledLink";
import { LANGUAGES } from "../../constants/language";
import { LanguageContext } from "../../context/LanguageProvider";

export default function Welcome() {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-3 p-0">
      <Fade cascade damping={0.2} delay={400} triggerOnce>
        <p className="font-mono text-lg text-primary-text-primary">
          {LANGUAGES[selectedLanguage].welcome.greetings}
        </p>
        <h2 className="text-4xl font-bold text-primary-text-navy-light md:text-6xl lg:text-7xl">
          {LANGUAGES[selectedLanguage].welcome.name}
        </h2>
        <h3 className="text-4xl font-bold text-primary-text-navy-navy md:text-6xl lg:text-7xl">
          {LANGUAGES[selectedLanguage].welcome.iam}
        </h3>
        <p className="mb-8 max-w-xl text-primary-text-navy-navy md:text-xl">
          {LANGUAGES[selectedLanguage].welcome.about[0]}{" "}
          <StyledLink
            name="Trybe"
            target="_blank"
            url="https://www.betrybe.com/"
          />{" "}
          {LANGUAGES[selectedLanguage].welcome.about[1]}{" "}
          <StyledLink
            name="PUCPR"
            target="_blank"
            url="https://www.pucpr.br/"
          />
        </p>
        <button className="w-full rounded-md border-2 border-primary-text-primary p-4 font-mono text-primary-text-primary transition-colors hover:bg-primary-text-opacity md:w-auto">
          <a href="/assets/curriculo.pdf" target="_blank">
            {LANGUAGES[selectedLanguage].welcome.resumeButton}
          </a>
        </button>
      </Fade>
    </section>
  );
}
