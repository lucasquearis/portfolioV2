import GithubIcon from "../../components/GithubIcon";
import InstagramIcon from "../../components/InstagramIcon";
import Linkedinicon from "../../components/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex h-auto min-h-[70px] flex-col justify-center gap-4 bg-primary-background fill-primary-secondary-200 p-4 text-center text-sm text-primary-secondary-200">
      <div className="flex w-full justify-center gap-5">
        <a
          href="https://github.com/lucasquearis"
          target="_blank"
          className="fill-primary-secondary-200 transition-colors duration-300 hover:fill-primary-primary hover:text-primary-primary"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasquearis/"
          target="_blank"
          className="fill-primary-secondary-200 transition-colors duration-300 hover:fill-primary-primary hover:text-primary-primary"
        >
          <Linkedinicon />
        </a>
        <a
          href="https://www.instagram.com/lucasquearis/"
          target="_blank"
          className="fill-primary-secondary-200 transition-colors duration-300 hover:fill-primary-primary hover:text-primary-primary"
        >
          <InstagramIcon />
        </a>
      </div>
      <div>
        Designed by{" "}
        <a
          href="https://github.com/bchiang7"
          target="_blank"
          className="underline underline-offset-4 transition-colors duration-300 hover:text-primary-primary"
        >
          Brittany Chiang
        </a>
        <div>Built with 🧡 by Lucas A. Santos</div>
      </div>
    </footer>
  );
}
