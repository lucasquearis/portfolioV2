import Image from "next/image";
import StyledLi from "../../components/StyledLi";
import StyledLink from "../../components/StyledLink";
import TitleSection from "../../components/TitleSection";
import { RECENTS_TOOLS } from "../../constants";
import perfil from "../../public/assets/images/perfil.jpeg";
import { Fade } from "react-awesome-reveal";
import { LANGUAGES } from "../../constants/language";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function About() {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <Fade delay={500} triggerOnce>
      <section id="about" className="mx-auto max-w-4xl py-14">
        <TitleSection number="before:content-['01.']">
          {LANGUAGES[selectedLanguage].about.titleSection}
        </TitleSection>
        <div className="md:flex md:gap-12">
          <div className="md:w-3/5">
            <div className="text-lg">
              {LANGUAGES[selectedLanguage].about.paragraphs.map(
                (paragraph, index) => {
                  if (index == 3) {
                    return;
                  }
                  return (
                    <p key={index} className="mb-2 text-primary-text-navy-navy">
                      {paragraph}
                      {index == 2 && (
                        <>
                          <StyledLink
                            name="Trybe"
                            target="_blank"
                            url="https://www.betrybe.com/"
                          />
                          {
                            LANGUAGES[selectedLanguage].about.paragraphs[
                              index + 1
                            ]
                          }
                        </>
                      )}
                    </p>
                  );
                }
              )}
            </div>
            <ul className="mt-5 grid grid-cols-2 p-0 text-sm text-primary-text-navy-navy">
              {RECENTS_TOOLS.map((tool) => (
                <StyledLi key={tool} item={tool} />
              ))}
            </ul>
          </div>
          <div className="relative z-10 mx-auto mt-12 h-56 w-56 rounded bg-primary-text-primary after:absolute after:left-6 after:top-6 after:-z-10 after:block after:h-full after:w-full after:rotate-180 after:rounded after:border-2 after:border-primary-text-primary after:transition-all after:hover:top-4 after:hover:left-4 md:h-80 md:w-80">
            <Image
              className="rounded opacity-75 transition-all duration-700 hover:opacity-100"
              src={perfil}
              layout="fill"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
