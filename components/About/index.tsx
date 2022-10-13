import Image from "next/image";
import { RECENTS_TOOLS } from "../../constants";
import perfil from "../../public/images/perfil.jpeg";

export default function About() {
  return (
    <section className="mb-96">
      <div>
        <h2 className="relative z-0 mb-10 mt-2.5 flex w-full items-center gap-1 whitespace-nowrap font-mono text-2xl font-bold text-primary-secondary-100 before:mr-1 before:font-mono before:text-lg before:text-primary-primary before:content-['01.'] after:relative after:top-[1px] after:ml-1 after:block after:h-[1px] after:w-full after:bg-primary-secondary-200 after:opacity-30">
          About Me
        </h2>
        <div>
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
        <ul className="mt-5 grid grid-cols-2 p-0 text-lg text-primary-secondary-200">
          {RECENTS_TOOLS.map((tool) => (
            <li className="mb-2.5 text-sm before:pr-2.5 before:text-primary-primary before:content-['▹']">
              {tool}
            </li>
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
