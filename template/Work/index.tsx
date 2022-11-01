import { useContext, useState } from "react";
import StyledLi from "../../components/StyledLi";
import StyledLink from "../../components/StyledLink";
import TitleSection from "../../components/TitleSection";
import { Fade } from "react-awesome-reveal";
import { LanguageContext } from "../../context/LanguageProvider";
import { LANGUAGES } from "../../constants/language";

const tabSizeTranslate = [
  "translate-x-[0px] md:translate-x-0",
  "translate-x-[150px] md:translate-y-14 md:translate-x-0",
  "translate-x-[300px] md:translate-y-28 md:translate-x-0",
  "translate-x-[450px] md:translate-y-[168px] md:translate-x-0",
  "translate-x-[600px] md:translate-y-[224px] md:translate-x-0",
];

export default function Work() {
  const { selectedLanguage } = useContext(LanguageContext);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Fade delay={500} triggerOnce>
      <section id="experience" className="mx-auto max-w-4xl py-14 ">
        <TitleSection number="before:content-['02.']">
          {LANGUAGES[selectedLanguage].work.titleSection}
        </TitleSection>
        <div className="md:flex md:min-h-[400px]">
          <ul className="relative flex w-full overflow-x-auto md:w-auto md:flex-col md:overflow-x-visible">
            {LANGUAGES[selectedLanguage].work.works.map(
              ({ company: { name } }, index) => (
                <li
                  key={index}
                  className={`mb-1 h-14 min-w-[150px] border-b-2 border-primary-background-secondary text-center text-sm transition-all duration-300 hover:bg-primary-text-opacity hover:text-primary-text-primary md:mb-0 md:border-l-2 md:border-b-0 ${
                    index == selectedTab
                      ? "text-primary-text-primary"
                      : "text-primary-text-navy-navy"
                  }`}
                >
                  <button
                    className="flex h-full w-full items-center justify-center"
                    onClick={() => setSelectedTab(index)}
                  >
                    <span>{name}</span>
                  </button>
                </li>
              )
            )}
            <div
              className={`absolute top-[54px] h-[2px] w-[150px] rounded bg-primary-text-primary transition-all duration-700 md:top-0 md:h-14 md:w-[2px] ${tabSizeTranslate[selectedTab]}`}
            />
          </ul>
          <div className="mt-7 md:mt-0 md:pl-4">
            <h3 className="flex gap-1 text-lg font-medium">
              <span className="text-primary-text-navy-light">
                {LANGUAGES[selectedLanguage].work.works[selectedTab].office}
              </span>
              <span className="text-primary-text-primary">@</span>
              <StyledLink
                name={
                  LANGUAGES[selectedLanguage].work.works[selectedTab].company
                    .name
                }
                target="_blank"
                url={
                  LANGUAGES[selectedLanguage].work.works[selectedTab].company
                    .site
                }
              />
            </h3>
            <p className="mb-6 text-sm text-primary-text-navy-navy">
              {LANGUAGES[selectedLanguage].work.works[selectedTab].date.in} -{" "}
              {LANGUAGES[selectedLanguage].work.works[selectedTab].date.out}
            </p>
            <ul className="text-lg text-primary-text-navy-navy">
              {LANGUAGES[selectedLanguage].work.works[selectedTab].about.map(
                (info) => (
                  <StyledLi key={info} item={info} />
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </Fade>
  );
}
