import GithubIcon from "../../components/GithubIcon";
import InstagramIcon from "../../components/InstagramIcon";
import Linkedinicon from "../../components/LinkedinIcon";
// @ts-ignore
import Bounce from "react-reveal/Bounce";

export default function Footer() {
  return (
    <footer className="flex h-auto min-h-[70px] flex-col justify-center gap-4 bg-primary-background-primary fill-primary-text-navy-navy p-4 text-center text-sm text-primary-text-navy-navy">
      <Bounce bottom>
        <div className="hidden w-full justify-center gap-5 after:bg-primary-text-navy-navy md:fixed md:right-auto md:left-5 md:bottom-0 md:z-10 md:flex md:w-10 md:flex-col md:after:my-0 md:after:mx-auto md:after:h-24 md:after:w-[1px]">
          <a
            href="https://github.com/lucasquearis"
            target="_blank"
            className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasquearis/"
            target="_blank"
            className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
          >
            <Linkedinicon />
          </a>
          <a
            href="https://www.instagram.com/lucasquearis/"
            target="_blank"
            className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
          >
            <InstagramIcon />
          </a>
        </div>
      </Bounce>
      <div className="flex w-full justify-center gap-5 after:bg-primary-text-navy-navy md:fixed md:right-auto md:left-5 md:bottom-0 md:z-10 md:hidden md:w-10 md:flex-col md:after:my-0 md:after:mx-auto md:after:h-24 md:after:w-[1px]">
        <a
          href="https://github.com/lucasquearis"
          target="_blank"
          className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasquearis/"
          target="_blank"
          className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
        >
          <Linkedinicon />
        </a>
        <a
          href="https://www.instagram.com/lucasquearis/"
          target="_blank"
          className="fill-primary-text-navy-navy transition-all duration-300 hover:-translate-y-1 hover:fill-primary-text-primary hover:text-primary-text-primary md:mx-auto"
        >
          <InstagramIcon />
        </a>
      </div>
      <Bounce bottom>
        <div className="email fixed right-5 left-auto bottom-0 z-10 hidden w-10 items-center justify-center gap-5 text-center font-mono font-semibold tracking-widest after:my-0 after:mx-auto after:h-24 after:w-[1px] after:bg-primary-text-navy-navy md:flex">
          <a
            className="transition-all hover:-translate-y-1 hover:text-primary-text-primary"
            href="mailto:lucasquearis@hotmail.com"
          >
            lucasquearis@hotmail.com
          </a>
        </div>
      </Bounce>

      <div>
        Designed by{" "}
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          className="underline underline-offset-4 transition-colors duration-300 hover:text-primary-text-primary"
        >
          Brittany Chiang
        </a>
        <div>Built with 🧡 by Lucas A. Santos</div>
      </div>
    </footer>
  );
}
