import { useState } from "react";
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
    </section>
  );
}
