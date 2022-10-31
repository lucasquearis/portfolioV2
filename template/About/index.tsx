import Image from "next/image";
import StyledLi from "../../components/StyledLi";
import StyledLink from "../../components/StyledLink";
import TitleSection from "../../components/TitleSection";
import { RECENTS_TOOLS } from "../../constants";
import perfil from "../../public/assets/images/perfil.jpeg";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade delay={500} triggerOnce>
      <section id="about" className="mx-auto max-w-4xl py-14">
        <TitleSection number="before:content-['01.']">About Me</TitleSection>
        <div className="md:flex md:gap-12">
          <div className="md:w-3/5">
            <div className="text-lg">
              <p className="mb-2 text-primary-text-navy-navy">
                I've always been passionate about games, it awoke my curiosity
                to understand how it works, how everything is developed, how
                each control command and screen works, thanks to this feeling, I
                found myself in the area of ​​technology and today I can say
                that I am a programmer.
              </p>
              <p className="mb-2 text-primary-text-navy-navy">
                My first contact with programming was just me questioning how
                games work, with a 14-year-old in partnership with my best
                friend until today, I opened my first my favorite game server,
                it was an amazing experience for us at that age, we had to
                invest a lot of time and a little money to make it all work, but
                despite all the difficulties, we made it. As the server gained
                more harder proportions was to maintain, malicious people
                started to attack (DDOS) our server, making us discouraged and
                give up the idea of ​​keeping it running, we had no capital to
                trigger a network security service, which made it difficult for
                us to continue our plans.
              </p>
              <p className="mb-2 text-primary-text-navy-navy">
                Today, after 12 years, I had the great opportunity to resume my
                studies in the programming area, I am studying development web
                on{" "}
                {
                  <StyledLink
                    name="Trybe"
                    target="_blank"
                    url="https://www.betrybe.com/"
                  />
                }
                , a school that allows you to study and only pay from the moment
                I'm employed, I'm starting a new stage of my life and chasing my
                dream, which is impact people through technology doing what I
                most master.
              </p>
            </div>
            <ul className="mt-5 grid grid-cols-2 p-0 text-sm text-primary-text-navy-navy">
              {RECENTS_TOOLS.map((tool) => (
                <StyledLi key={tool} item={tool} />
              ))}
            </ul>
          </div>
          <div className="relative z-10 mx-auto mt-12 h-56 w-56 rounded bg-primary-text-primary after:absolute after:left-6 after:top-6 after:-z-10 after:block after:h-full after:w-full after:rotate-180 after:rounded after:border-2 after:border-primary-text-primary after:transition-all after:hover:top-4 after:hover:left-4 md:h-80 md:w-80">
            <Image
              className="rounded opacity-75 transition-all duration-700 hover:opacity-100"
              src={perfil}
              layout="fill"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}
