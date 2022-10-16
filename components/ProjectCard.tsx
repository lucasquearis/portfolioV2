import { ReactElement } from "react";
import GithubIcon from "./GithubIcon";
import GoToIcon from "./GoToIcon";
import StyledLi from "./StyledLi";

interface IProjectCard {
  image: ReactElement;
  projectName: string;
  projectUrl: string;
  projectDescription: string;
  projectTechnologies: string[];
  githubUrl: string;
}

export default function ProjectCard({
  image,
  projectName,
  projectUrl,
  projectDescription,
  projectTechnologies,
  githubUrl,
}: IProjectCard) {
  return (
    <div className="mt-10 h-max w-full rounded bg-cover bg-center py-5 shadow">
      <div className="relative h-full w-full">
        {image}
        {/* background effect opacity */}
        <div className="absolute h-full w-full bg-primary-background opacity-90" />
        <div className="relative p-5">
          <p className="my-2.5 text-sm text-primary-primary">{projectName}</p>
          <h3 className="mb-2.5 text-2xl font-semibold text-white transition-colors duration-300 hover:text-primary-primary">
            <a href={projectUrl} target="_blank">
              {projectName}
            </a>
          </h3>
          <p className="py-5 text-lg text-primary-secondary-100">
            {projectDescription}
          </p>
          <ul className="my-5 flex flex-wrap justify-start gap-2 text-sm text-primary-secondary-100">
            {projectTechnologies.map((tecnologie) => (
              <StyledLi key={tecnologie} item={tecnologie} />
            ))}
          </ul>
          <ul className="flex gap-5">
            <li className="text-primary-secondary-100">
              <a href={githubUrl} target="_blank">
                <GithubIcon />
              </a>
            </li>
            <li className="h-6 w-6 text-primary-secondary-100">
              <a href={projectUrl} target="_blank">
                <GoToIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
