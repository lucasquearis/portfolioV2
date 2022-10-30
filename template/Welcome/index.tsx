import { Fade } from "react-awesome-reveal";

export default function Welcome() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-3 p-0">
      <Fade cascade damping={0.2} delay={400} triggerOnce>
        <p className="font-mono text-lg text-primary-text-primary">
          Hi, my name is
        </p>
        <h2 className="text-4xl font-bold text-primary-text-navy-light md:text-6xl lg:text-7xl">
          Lucas A. Santos.
        </h2>
        <h3 className="text-4xl font-bold text-primary-text-navy-navy md:text-6xl lg:text-7xl">
          I'm Front-end Developer
        </h3>
        <p className="max-w-xl text-primary-text-navy-navy md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit
          veniam ab consectetur quos molestias ratione assumenda officia, esse
        </p>
        <button className="w-full rounded-md border-2 border-primary-text-primary p-4 font-mono text-primary-text-primary transition-colors hover:bg-primary-text-opacity md:w-auto">
          Download my CV!
        </button>
      </Fade>
    </section>
  );
}
