import GithubIcon from "../../components/GithubIcon";
import InstagramIcon from "../../components/InstagramIcon";
import Linkedinicon from "../../components/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="flex h-auto min-h-[70px] flex-col justify-center gap-4 bg-primary-background-primary fill-primary-text-navy-navy p-4 text-center text-sm text-primary-text-navy-navy">
      <div className="flex w-full justify-center gap-5">
        <a
          href="https://github.com/lucasquearis"
          target="_blank"
          className="fill-primary-text-navy-navy transition-colors duration-300 hover:fill-primary-text-primary hover:text-primary-text-primary"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasquearis/"
          target="_blank"
          className="fill-primary-text-navy-navy transition-colors duration-300 hover:fill-primary-text-primary hover:text-primary-text-primary"
        >
          <Linkedinicon />
        </a>
        <a
          href="https://www.instagram.com/lucasquearis/"
          target="_blank"
          className="fill-primary-text-navy-navy transition-colors duration-300 hover:fill-primary-text-primary hover:text-primary-text-primary"
        >
          <InstagramIcon />
        </a>
      </div>
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
