import { useState } from "react";
import StyledLi from "../../components/StyledLi";
import TitleSection from "../../components/TitleSection";
import { PROFESSIONAL_EXPERIENCES } from "../../constants";

const tabSizeTranslate = [
  "translate-x-[0px]",
  "translate-x-[150px]",
  "translate-x-[300px]",
  "translate-x-[450px]",
  "translate-x-[600px]",
];

export default function Work() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="py-14">
      <TitleSection>Where I've Worked</TitleSection>
      <ul className="scrollExperiences relative flex w-full overflow-x-auto">
        {PROFESSIONAL_EXPERIENCES.map(({ company }, index) => (
          <li
            key={index}
            className="mb-1 h-14 min-w-[150px] border-b-2 border-[#233554] text-center text-sm text-primary-secondary-200"
          >
            <button
              className="flex h-full w-full items-center justify-center"
              onClick={() => setSelectedTab(index)}
            >
              <span>{company}</span>
            </button>
          </li>
        ))}
        <div
          className={`absolute top-[54px] z-50 h-[2px] w-[150px] rounded bg-primary-primary transition-all duration-700 ${tabSizeTranslate[selectedTab]}`}
        />
      </ul>
      <div className="mt-7">
        <h3 className="flex gap-1 text-lg font-medium">
          <span className="text-primary-secondary-100">
            {PROFESSIONAL_EXPERIENCES[selectedTab].office}
          </span>
          <span className="text-primary-primary">@</span>
          <span className="text-primary-primary">
            <a href="https://previdenciarista.com/" target="_blank">
              {PROFESSIONAL_EXPERIENCES[selectedTab].company}
            </a>
          </span>
        </h3>
        <p className="mb-6 text-sm text-primary-secondary-200">
          {PROFESSIONAL_EXPERIENCES[selectedTab].date.in} -{" "}
          {PROFESSIONAL_EXPERIENCES[selectedTab].date.out}
        </p>
        <ul className="text-lg text-primary-secondary-200">
          {PROFESSIONAL_EXPERIENCES[selectedTab].about.map((info) => (
            <StyledLi key={info} item={info} />
          ))}
        </ul>
      </div>
    </section>
  );
}
