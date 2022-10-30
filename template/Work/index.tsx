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
    <section id="experience" className="mx-auto max-w-4xl py-14 ">
      <TitleSection number="before:content-['02.']">
        Where I've Worked
      </TitleSection>
      <ul className="scrollExperiences relative flex w-full overflow-x-auto">
        {PROFESSIONAL_EXPERIENCES.map(({ company: { name } }, index) => (
          <li
            key={index}
            className="mb-1 h-14 min-w-[150px] border-b-2 border-primary-background-secondary text-center text-sm text-primary-text-navy-navy"
          >
            <button
              className="flex h-full w-full items-center justify-center"
              onClick={() => setSelectedTab(index)}
            >
              <span>{name}</span>
            </button>
          </li>
        ))}
        <div
          className={`absolute top-[54px] h-[2px] w-[150px] rounded bg-primary-text-primary transition-all duration-700 ${tabSizeTranslate[selectedTab]}`}
        />
      </ul>
      <div className="mt-7">
        <h3 className="flex gap-1 text-lg font-medium">
          <span className="text-primary-text-navy-light">
            {PROFESSIONAL_EXPERIENCES[selectedTab].office}
          </span>
          <span className="text-primary-text-primary">@</span>
          <span className="text-primary-text-primary">
            <a
              href={PROFESSIONAL_EXPERIENCES[selectedTab].company.site}
              target="_blank"
            >
              {PROFESSIONAL_EXPERIENCES[selectedTab].company.name}
            </a>
          </span>
        </h3>
        <p className="mb-6 text-sm text-primary-text-navy-navy">
          {PROFESSIONAL_EXPERIENCES[selectedTab].date.in} -{" "}
          {PROFESSIONAL_EXPERIENCES[selectedTab].date.out}
        </p>
        <ul className="text-lg text-primary-text-navy-navy">
          {PROFESSIONAL_EXPERIENCES[selectedTab].about.map((info) => (
            <StyledLi key={info} item={info} />
          ))}
        </ul>
      </div>
    </section>
  );
}
