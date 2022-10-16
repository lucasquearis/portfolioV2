import Image from "next/image";
import StyledLi from "../../components/StyledLi";
import TitleSection from "../../components/TitleSection";
import { RECENTS_TOOLS } from "../../constants";
import perfil from "../../public/assets/images/perfil.jpeg";

export default function About() {
  return (
    <section className="py-14">
      <div>
        <TitleSection number="before:content-['01.']">About Me</TitleSection>
        <div className="text-lg">
          <p className="mb-2 text-primary-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
            perspiciatis autem quisquam ipsum in molestias. Ut animi neque
            accusantium maiores, optio vero. Illum eveniet recusandae
            repellendus incidunt exercitationem asperiores.
          </p>
          <p className="mb-2 text-primary-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
            perspiciatis autem quisquam ipsum in molestias. Ut animi neque
            accusantium maiores, optio vero. Illum eveniet recusandae
            repellendus incidunt exercitationem asperiores.
          </p>
          <p className="mb-2 text-primary-secondary-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero
            perspiciatis autem quisquam ipsum in molestias. Ut animi neque
            accusantium maiores, optio vero. Illum eveniet recusandae
            repellendus incidunt exercitationem asperiores.
          </p>
        </div>
        <ul className="mt-5 grid grid-cols-2 p-0 text-sm text-primary-secondary-200">
          {RECENTS_TOOLS.map((tool) => (
            <StyledLi key={tool} item={tool} />
          ))}
        </ul>
      </div>
      <div className="relative z-10 mx-auto mt-12 h-56 w-56 rounded bg-primary-primary after:absolute after:left-6 after:top-6 after:-z-10 after:block after:h-full after:w-full after:rotate-180 after:rounded after:border-2 after:border-primary-primary after:transition-all after:hover:top-4 after:hover:left-4">
        <Image
          className="rounded opacity-75 transition-all duration-700 hover:opacity-100"
          src={perfil}
        />
      </div>
    </section>
  );
}
