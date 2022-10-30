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
  index: number;
}

export default function ProjectCard({
  image,
  projectName,
  projectUrl,
  projectDescription,
  projectTechnologies,
  githubUrl,
  index,
}: IProjectCard) {
  return (
    <>
      {/* MOBILE */}
      <div className="mt-10 h-max w-full rounded bg-cover bg-center py-5 shadow md:hidden">
        <div className="relative h-full w-full">
          {image}
          {/* background effect opacity */}
          <div className="absolute h-full w-full bg-primary-background-primary opacity-90" />
          <div className="relative p-5">
            <p className="my-2.5 text-sm text-primary-text-primary">
              {projectName}
            </p>
            <h3 className="mb-2.5 text-2xl font-semibold text-white transition-colors duration-300 hover:text-primary-text-primary">
              <a href={projectUrl} target="_blank">
                {projectName}
              </a>
            </h3>
            <p className="py-5 text-lg text-primary-text-navy-light">
              {projectDescription}
            </p>
            <ul className="my-5 flex flex-wrap justify-start gap-2 text-sm text-primary-text-navy-light">
              {projectTechnologies.map((tecnologie) => (
                <StyledLi key={tecnologie} item={tecnologie} />
              ))}
            </ul>
            <ul className="flex gap-5">
              <li className="text-primary-text-navy-light">
                <a href={githubUrl} target="_blank">
                  <GithubIcon />
                </a>
              </li>
              <li className="h-6 w-6 text-primary-text-navy-light">
                <a href={projectUrl} target="_blank">
                  <GoToIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* DESKTOP */}
      <div className="relative my-10 hidden md:flex">
        <div
          className={`relative inset-0 h-[400px] w-[600px] ${
            index % 2 == 0 ? "order-2" : "order-1"
          }`}
        >
          {image}
          <div className="absolute h-full w-full bg-primary-text-primary opacity-30 transition-opacity duration-300 hover:opacity-0" />
        </div>
        {/* div vazia para efeito */}
        <div
          className={`h-max w-2/5 max-w-lg self-center p-5 ${
            index % 2 == 0 ? "order-1 text-start" : "order-2 text-end"
          }`}
        />
        <div
          className={`absolute h-max w-full max-w-lg self-center p-5 ${
            index % 2 == 0
              ? "left-0 order-1 text-start"
              : "right-0 order-2 text-end"
          }`}
        >
          <p className="my-2.5 text-sm text-primary-text-primary">
            {projectName}
          </p>
          <h3 className="mb-2.5 text-2xl font-semibold text-white transition-colors duration-300 hover:text-primary-text-primary">
            <a href={projectUrl} target="_blank">
              {projectName}
            </a>
          </h3>

          <div className="rounded bg-primary-background-border p-6 text-primary-text-navy-light">
            <p className="text-lg ">{projectDescription}</p>
            <ul
              className={`my-5 flex flex-wrap ${
                index % 2 == 0 ? "justify-start" : "justify-end"
              } gap-2 text-sm `}
            >
              {projectTechnologies.map((tecnologie) => (
                <StyledLi key={tecnologie} item={tecnologie} />
              ))}
            </ul>
            <ul
              className={`flex gap-5 ${
                index % 2 == 0 ? "justify-start" : "justify-end"
              }`}
            >
              <li className="text-primary-text-navy-light">
                <a href={githubUrl} target="_blank">
                  <GithubIcon />
                </a>
              </li>
              <li className="h-6 w-6 text-primary-text-navy-light">
                <a href={projectUrl} target="_blank">
                  <GoToIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
