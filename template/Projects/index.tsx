import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";
import TitleSection from "../../components/TitleSection";
import { PROJECTS } from "../../constants";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
  return (
    <Fade delay={500} triggerOnce>
      <section id="work" className="mx-auto max-w-5xl py-14">
        <TitleSection number="before:content-['03.']">
          Some things I've built
        </TitleSection>
        {PROJECTS.map(
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
              image={<Image src={imagePath} alt={name} layout="fill" />}
            />
          )
        )}
      </section>
    </Fade>
  );
}
