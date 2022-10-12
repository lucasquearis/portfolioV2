import { Slide } from "react-animated-components";

export default function Welcome() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center gap-3 p-0">
      <Slide fade up delayMs={200} durationMs={300}>
        <p className="font-mono text-lg text-primary-primary">Hi, my name is</p>
      </Slide>
      <Slide fade up delayMs={300} durationMs={600}>
        <h2 className="text-4xl font-bold text-primary-secondary-100">
          Lucas A. Santos.
        </h2>
      </Slide>
      <Slide fade up delayMs={400} durationMs={1000}>
        <h3 className="text-4xl font-bold text-primary-secondary-200">
          I build things for the web
        </h3>
      </Slide>
      <Slide fade up delayMs={500} durationMs={1300}>
        <p className="text-primary-secondary-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit
          veniam ab consectetur quos molestias ratione assumenda officia, esse
        </p>
      </Slide>
      <Slide className="mt-5 w-full" fade up delayMs={600} durationMs={1600}>
        <button className="w-full rounded-md border-2 border-primary-primary p-4 font-mono text-primary-primary">
          Download my CV!
        </button>
      </Slide>
    </section>
  );
}
