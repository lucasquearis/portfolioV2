import { LanguageEnum } from "../context/LanguageProvider";

export const LANGUAGES = {
  [LanguageEnum.ENGLISH]: {
    welcome: {
      greetings: "Hi, my name is",
      name: "Lucas A. Santos.",
      iam: "I'm Front-end Developer",
      about: [
        "I'm a junior full-stack developer formed by",
        "specializing in front-end development. I am currently studying Applied Artificial Intelligence at",
      ],
    },
    about: {
      paragraphs: [
        "I've always been passionate about games, it awoke my curiosity to understand how it works, howeverything is developed, how each control command and screen works, thanks to this feeling, I found myself in the area of ​​technology and today I can say that I am a programmer.",
        "My first contact with programming was just me questioning how games work, with a 14-year-old in partnership with my best friend until today, I opened my first my favorite game server, it was an amazing experience for us at that age, we had to invest a lot of time and a little money to make it all work, but despite all the difficulties, we made it. As the server gained more harder proportions was to maintain, malicious people started to attack (DDOS) our server, making us discouraged and give up the idea of ​​keeping it running, we had no capital to trigger a network security service, which made it difficult for us to continue our plans.",
        "Today, after 12 years, I had the great opportunity to resume my studies in the programming area, I am studying development web on ",
        ", a school that allows you to study and only pay from the moment I'm employed, I'm starting a new stage of my life and chasing my dream, which is impact people through technology doing what I most master.",
      ],
    },
  },
  [LanguageEnum.PORTUGUESE]: {
    welcome: {
      greetings: "Olá, meu nome é",
      name: "Lucas A. Santos.",
      iam: "Eu sou Desenvolvedor Front End",
      about: [
        "Sou desenvolvedor full-stack junior formado pela",
        "focado em desenvolvimento front-end. Eu estou atualmente estudando Inteligencia Artificial Aplicada na",
      ],
    },
    about: {
      paragraphs: [
        "Sempre fui apaixonado por jogos, isso despertou minha curiosidade para entender como isso funciona, como tudo é desenvolvido, como cada comando de controle e tela funcionam, graças a esse sentimento, me encontrei na área da tecnologia e hoje posso dizer que sou um programador.",
        " Meu primeiro contato com programação foi justamente me questionando como os jogos funcionam, com 14 anos de idade em parceria com meu melhor amigo até hoje, abri meu primeiro servidor do meu jogo favorito, foi uma experiência incrível para nós nessa idade, tivemos que investir muito tempo e um pouco de dinheiro para fazer tudo funcionar, mas apesar de todas as dificuldades, conseguimos. A medida que o servidor ganhava mais proporções mais difícil era manter, pessoas mal intencionadas começaram a atacar (DDOS) nosso servidor, nos fazendo desanimar e desistir da ideia de mantê-lo funcionando, não tínhamos capital para acionar um serviço de segurança de rede, o que dificultou de continuarmos nosso sonho.",
        "Hoje depois de 12 anos, tive a grande oportunidade de retomar os estudos na área de programação, estou cursando desenvolvimento web na ",
        ", uma escola que permite com que você estude e só pague a partir do momento em que estiver empregado, estou iniciando uma nova etapa da minha vida e correndo atrás do meu sonho, que é impactar as pessoas através da tecnologia fazendo o que eu mais amo.",
      ],
    },
  },
};
