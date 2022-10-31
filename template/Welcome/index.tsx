import { Fade } from "react-awesome-reveal";
import StyledLink from "../../components/StyledLink";

const WELCOME = "Hi, my name is";
const NAME = "Lucas A. Santos.";
const IAM = "I'm Front-end Developer";

export default function Welcome() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-3 p-0">
      <Fade cascade damping={0.2} delay={400} triggerOnce>
        <p className="font-mono text-lg text-primary-text-primary">{WELCOME}</p>
        <h2 className="text-4xl font-bold text-primary-text-navy-light md:text-6xl lg:text-7xl">
          {NAME}
        </h2>
        <h3 className="text-4xl font-bold text-primary-text-navy-navy md:text-6xl lg:text-7xl">
          {IAM}
        </h3>
        <p className="mb-8 max-w-xl text-primary-text-navy-navy md:text-xl">
          I'm a junior full-stack developer formed by{" "}
          <StyledLink
            name="Trybe"
            target="_blank"
            url="https://www.betrybe.com/"
          />{" "}
          specializing in front-end development. I am currently studying Applied
          Artificial Intelligence at{" "}
          <StyledLink
            name="PUCPR"
            target="_blank"
            url="https://www.pucpr.br/"
          />
        </p>
        <button className="w-full rounded-md border-2 border-primary-text-primary p-4 font-mono text-primary-text-primary transition-colors hover:bg-primary-text-opacity md:w-auto">
          <a href="/assets/curriculo.pdf" target="_blank">
            See my Resume (CV)!
          </a>
        </button>
      </Fade>
    </section>
  );
}
