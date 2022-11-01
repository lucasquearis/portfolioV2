import TitleSection from "../../components/TitleSection";
import { Fade } from "react-awesome-reveal";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { LANGUAGES } from "../../constants/language";

export default function Contact() {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <Fade delay={500} triggerOnce>
      <section
        id="contact"
        className="mx-auto h-[80vh] w-full max-w-2xl py-14 pb-32"
      >
        <TitleSection number="before:content-['04.']">
          {LANGUAGES[selectedLanguage].contact.titleSection}
        </TitleSection>
        <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-4xl font-semibold text-primary-text-navy-light">
            {LANGUAGES[selectedLanguage].contact.getInTouch}
          </h2>
          <p className="text-lg font-normal text-primary-text-navy-navy">
            {LANGUAGES[selectedLanguage].contact.phase}
          </p>
          <button className="w-auto rounded-md border-2 border-primary-text-primary p-4 px-10 text-primary-text-primary transition-colors hover:bg-primary-text-opacity">
            <a href="mailto:lucasquearis@hotmail.com" target="_blank">
              {LANGUAGES[selectedLanguage].contact.contactButton}
            </a>
          </button>
        </div>
      </section>
    </Fade>
  );
}
