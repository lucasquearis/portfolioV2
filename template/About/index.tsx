import Image from "next/image";
import StyledLi from "../../components/StyledLi";
import StyledLink from "../../components/StyledLink";
import TitleSection from "../../components/TitleSection";
import { RECENTS_TOOLS } from "../../constants";
import perfil from "../../public/assets/images/perfil.jpeg";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl py-14">
      <TitleSection number="before:content-['01.']">About Me</TitleSection>
      <div className="md:flex md:gap-12">
        <div className="md:w-3/5">
          <div className="text-lg">
            <p className="mb-2 text-primary-text-navy-navy">
              Sempre fui apaixonado por jogos, isso despertou minha curiosidade
              para entender como isso funciona, como tudo é desenvolvido, como
              cada comando de controle e tela funcionam, graças a esse
              sentimento, me encontrei na área da tecnologia e hoje posso dizer
              que sou um programador.
            </p>
            <p className="mb-2 text-primary-text-navy-navy">
              Meu primeiro contato com programação foi justamente me
              questionando como os jogos funcionam, com 14 anos de idade em
              parceria com meu melhor amigo até hoje, abri meu primeiro servidor
              do meu jogo favorito, foi uma experiência incrível para nós nessa
              idade, tivemos que investir muito tempo e um pouco de dinheiro
              para fazer tudo funcionar, mas apesar de todas as dificuldades,
              conseguimos. A medida que o servidor ganhava mais proporções mais
              difícil era manter, pessoas mal intencionadas começaram a atacar
              (DDOS) nosso servidor, nos fazendo desanimar e desistir da ideia
              de mantê-lo funcionando, não tínhamos capital para acionar um
              serviço de segurança de rede, o que dificultou de continuarmos
              nossos planos.
            </p>
            <p className="mb-2 text-primary-text-navy-navy">
              Hoje depois de 12 anos, tive a grande oportunidade de retomar os
              estudos na área de programação, estou cursando desenvolvimento web
              na{" "}
              {
                <StyledLink
                  name="Trybe"
                  target="_blank"
                  url="https://www.betrybe.com/"
                />
              }
              , uma escola que permite com que você estude e só pague a partir
              do momento em que estiver empregado, estou iniciando uma nova
              etapa da minha vida e correndo atrás do meu sonho, que é impactar
              as pessoas através da tecnologia fazendo o que eu mais amo.
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
  );
}
