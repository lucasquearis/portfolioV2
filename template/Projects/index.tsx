import Image from "next/image";
import GithubIcon from "../../components/GithubIcon";
import GoToIcon from "../../components/GoToIcon";
import StyledLi from "../../components/StyledLi";
import TitleSection from "../../components/TitleSection";

export default function Projects() {
  return (
    <section>
      <TitleSection number="before:content-['03.']">
        Some things I've built
      </TitleSection>
      <div className="mt-10 h-max w-full rounded bg-cover bg-center shadow">
        <div className="relative z-50 h-full w-full">
          <Image
            src="/images/bg-rpg.gif"
            alt="mmo rgp game"
            layout="fill"
            objectFit="cover"
          />
          {/* background effect opacity */}
          <div className="absolute h-full w-full bg-primary-background opacity-90" />
          <div className="relative p-5">
            <p className="my-2.5 text-sm text-primary-primary">
              Featured Project
            </p>
            <h3 className="mb-2.5 text-2xl font-semibold text-white transition-colors duration-300 hover:text-primary-primary">
              <a
                href="https://free-to-play-project.vercel.app/"
                target="_blank"
              >
                Free to play games
              </a>
            </h3>
            <p className="py-5 text-lg text-primary-secondary-100">
              An application that offers you a variety of free games. For those
              moments of boredom or even to find a game to play
            </p>
            <ul className="my-2.5 flex flex-wrap justify-center gap-2 text-primary-secondary-100">
              <StyledLi item="Reactjs" />
              <StyledLi item="Context Api" />
              <StyledLi item="Bootstrap" />
              <StyledLi item="CSS" />
              <StyledLi item="Free API" />
              <StyledLi item="React Router DOM" />
              <StyledLi item="Vercel Deploy" />
            </ul>
            <ul className="flex gap-5">
              <li className="text-primary-secondary-100">
                <a
                  href="https://github.com/lucasquearis/free-to-play-project"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              </li>
              <li className="h-6 w-6 text-primary-secondary-100">
                <a
                  href="https://free-to-play-project.vercel.app/"
                  target="_blank"
                >
                  <GoToIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
