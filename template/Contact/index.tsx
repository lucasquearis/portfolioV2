import TitleSection from "../../components/TitleSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto h-[80vh] w-full max-w-2xl py-14 pb-32"
    >
      <TitleSection number="before:content-['04.']">What's Next?</TitleSection>
      <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
        <h2 className="text-4xl font-semibold text-primary-text-navy-light">
          Get in Touch
        </h2>
        <p className="text-lg font-normal text-primary-text-navy-navy">
          If you want to chat about programming, games, talk about the job
          market or just say hi, feel free, I'll try my best to answer you
        </p>
        <button className="w-auto rounded-md border-2 border-primary-text-primary p-4 px-10 text-primary-text-primary transition-colors hover:bg-primary-text-opacity">
          <a href="mailto:lucasquearis@hotmail.com" target="_blank">
            Say Hello
          </a>
        </button>
      </div>
    </section>
  );
}
