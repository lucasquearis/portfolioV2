import { Slide } from "react-animated-components";

export default function Welcome() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center gap-3 p-0">
      <Slide fade up delayMs={1000} durationMs={300}>
        <p className="font-mono text-lg text-primary-text-primary">
          Hi, my name is
        </p>
      </Slide>
      <Slide fade up delayMs={1200} durationMs={600}>
        <h2 className="text-4xl font-bold text-primary-text-navy-light md:text-6xl lg:text-7xl">
          Lucas A. Santos.
        </h2>
      </Slide>
      <Slide fade up delayMs={1400} durationMs={1000}>
        <h3 className="text-4xl font-bold text-primary-text-navy-navy md:text-6xl lg:text-7xl">
          I'm Front-end Developer
        </h3>
      </Slide>
      <Slide fade up delayMs={1600} durationMs={1300}>
        <p className="max-w-xl text-primary-text-navy-navy md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit
          veniam ab consectetur quos molestias ratione assumenda officia, esse
        </p>
      </Slide>
      <Slide className="mt-5 w-full" fade up delayMs={1800} durationMs={1600}>
        <button className="w-full rounded-md border-2 border-primary-text-primary p-4 font-mono text-primary-text-primary transition-colors hover:bg-primary-text-opacity md:w-auto">
          Download my CV!
        </button>
      </Slide>
    </section>
  );
}
