import TitleSection from "../../components/TitleSection";

export default function Contact() {
  return (
    <section id="contact" className="my-14 mb-32 h-[50vh] w-full">
      <TitleSection number="before:content-['04.']">What's Next?</TitleSection>
      <div className="flex h-full flex-col items-center gap-8 text-center">
        <h2 className="text-4xl font-semibold text-primary-secondary-100">
          Get in Touch
        </h2>
        <p className="text-lg font-normal text-primary-secondary-200">
          If you want to chat about programming, games, talk about the job
          market or just say hi, feel free, I'll try my best to answer you
        </p>
        <button className="w-auto rounded-md border-2 border-primary-primary p-4 px-10 text-primary-primary">
          <a href="mailto:lucasquearis@hotmail.com" target="_blank">
            Say Hello
          </a>
        </button>
      </div>
    </section>
  );
}
