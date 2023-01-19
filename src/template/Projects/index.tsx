import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import TitleSection from "../../components/TitleSection";
import { Fade } from "react-awesome-reveal";
import { LANGUAGES } from "../../constants/language";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export default function Projects() {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <Fade delay={500} triggerOnce>
      <section id="work" className="mx-auto max-w-5xl py-14">
        <TitleSection number="before:content-['03.']">
          {LANGUAGES[selectedLanguage].project.titleSection}
        </TitleSection>
        {LANGUAGES[selectedLanguage].project.projects.map(
          (
            { name, url, description, githubUrl, imagePath, technologies },
            index
          ) => (
            <ProjectCard
              key={name}
              projectName={name}
              projectUrl={url}
              githubUrl={githubUrl}
              projectDescription={description}
              projectTechnologies={technologies}
              index={index}
              image={
                <Image
                  src={imagePath}
                  alt={name}
                  title={name}
                  layout="fill"
                  objectFit="cover"
                />
              }
            />
          )
        )}
      </section>
    </Fade>
  );
}
