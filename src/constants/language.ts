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
      resumeButton: "See my Resume",
    },
    about: {
      titleSection: "About Me",
      paragraphs: [
        "I've always been passionate about games, it awoke my curiosity to understand how it works, howeverything is developed, how each control command and screen works, thanks to this feeling, I found myself in the area of ​​technology and today I can say that I am a programmer.",
        "My first contact with programming was just me questioning how games work, with a 14-year-old in partnership with my best friend until today, I opened my first my favorite game server, it was an amazing experience for us at that age, we had to invest a lot of time and a little money to make it all work, but despite all the difficulties, we made it. As the server gained more harder proportions was to maintain, malicious people started to attack (DDOS) our server, making us discouraged and give up the idea of ​​keeping it running, we had no capital to trigger a network security service, which made it difficult for us to continue our plans.",
        "Today, after 12 years, I had the great opportunity to resume my studies in the programming area, I am studying development web on ",
        ", a school that allows you to study and only pay from the moment I'm employed, I'm starting a new stage of my life and chasing my dream, which is impact people through technology doing what I most master.",
      ],
    },
    work: {
      titleSection: "Where I've Worked",
      works: [
        {
          company: {
            name: "Coopercarga",
            site: "https://www.coopercarga.com.br/",
          },
          about: [
            "My first and current job as a full-stack developer, I'm learning a lot here.",
            "I'm working with a new back-end tool called AdoniJS.",
          ],
          date: {
            in: "Sep - 2023",
            out: "Present",
          },
          office: "Full-stack Developer",
        },
        {
          company: {
            name: "Previdenciarista",
            site: "https://previdenciarista.com/",
          },
          about: [
            "My first and current job as a developer, I'm learning a lot here.",
            "I learned to use Styled Components, to work with component library antd, storybook, Nextjs and TypeScript.",
          ],
          date: {
            in: "Feb - 2022",
            out: "Set - 2023",
          },
          office: "Front-end Developer",
        },
      ],
    },
    project: {
      titleSection: "Some Things I've Built",
      projects: [
        {
          name: "Free to play games",
          url: "https://free-to-play-project.vercel.app/",
          githubUrl: "https://github.com/lucasquearis/free-to-play-project",
          description:
            "An application that offers you a variety of free games. For those moments of boredom or even to find a game to play",
          technologies: [
            "Reactjs",
            "Context Api",
            "Bootstrap",
            "Free API",
            "React Router DOM",
            "Vercel Deploy",
          ],
          imagePath: "/assets/images/freeToPlayGames.png",
        },
        {
          name: "My first Portfólio",
          url: "https://lucasquearis.github.io/portfolio/",
          githubUrl: "https://github.com/lucasquearis/portfolio",
          description:
            "This was my first portfolio, I finished it as soon as I finished the Front-end module on Trybe",
          technologies: ["Reactjs", "Bootstrap", "Github Pages Deploy"],
          imagePath: "/assets/images/portfolio_1.png",
        },
        {
          name: "My second Portfólio",
          url: "#",
          githubUrl: "https://github.com/lucasquearis/portfolioV2",
          description:
            "This was my second and last portfolio so far, I decided to do it in Nextjs and Tailwind to learn new technologies",
          technologies: ["Nextjs", "Tailwind", "Vercel Deploy"],
          imagePath: "/assets/images/portfolio.png",
        },
        {
          name: "Forever Baby Case",
          url: "https://lucasquearis-forever-baby.netlify.app/",
          githubUrl: "https://github.com/lucasquearis/forever-liss-case",
          description:
            "A project I did for a technical challenge for a front-end job, project done in 2 days fully responsive, a really cool challenge",
          technologies: ["React", "Bootstrap", "Netlify Deploy"],
          imagePath: "/assets/images/foreverBaby.png",
        },
        {
          name: "Ar Motors",
          url: "https://armotoparts-project.netlify.app/",
          githubUrl: "https://github.com/lucasquearis/projeto-pessoal",
          description:
            "My first freelance job I learned a lot with this project, to manipulate the map and geolocation.",
          technologies: [
            "React",
            "Mapbox-GL",
            "antD",
            "Styled Components",
            "Netlify Deploy",
          ],
          imagePath: "/assets/images/arMotors.png",
        },
      ],
    },
    contact: {
      titleSection: "What's Next?",
      getInTouch: "Get in Touch",
      phase:
        "If you want to chat about programming, games, talk about the job market or just say hi, feel free, I'll try my best to answer you",
      contactButton: "Say Hello!",
    },
    header: [
      {
        key: "01.",
        word: "About",
        anchor: "#about",
      },
      {
        key: "02.",
        word: "Experience",
        anchor: "#experience",
      },
      {
        key: "03.",
        word: "Work",
        anchor: "#work",
      },
      {
        key: "04.",
        word: "Contact",
        anchor: "#contact",
      },
    ],
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
      resumeButton: "Veja meu currículo",
    },
    about: {
      titleSection: "Sobre Mim",
      paragraphs: [
        "Sempre fui apaixonado por jogos, isso despertou minha curiosidade para entender como isso funciona, como tudo é desenvolvido, como cada comando de controle e tela funcionam, graças a esse sentimento, me encontrei na área da tecnologia e hoje posso dizer que sou um programador.",
        " Meu primeiro contato com programação foi justamente me questionando como os jogos funcionam, com 14 anos de idade em parceria com meu melhor amigo até hoje, abri meu primeiro servidor do meu jogo favorito, foi uma experiência incrível para nós nessa idade, tivemos que investir muito tempo e um pouco de dinheiro para fazer tudo funcionar, mas apesar de todas as dificuldades, conseguimos. A medida que o servidor ganhava mais proporções mais difícil era manter, pessoas mal intencionadas começaram a atacar (DDOS) nosso servidor, nos fazendo desanimar e desistir da ideia de mantê-lo funcionando, não tínhamos capital para acionar um serviço de segurança de rede, o que dificultou de continuarmos nosso sonho.",
        "Hoje depois de 12 anos, tive a grande oportunidade de retomar os estudos na área de programação, estou cursando desenvolvimento web na ",
        ", uma escola que permite com que você estude e só pague a partir do momento em que estiver empregado, estou iniciando uma nova etapa da minha vida e correndo atrás do meu sonho, que é impactar as pessoas através da tecnologia fazendo o que eu mais amo.",
      ],
    },
    work: {
      titleSection: "Onde Trabalhei",
      works: [
        {
          company: {
            name: "Coopercarga",
            site: "https://www.coopercarga.com.br/",
          },
          about: [
            "Meu primeiro e atual trabalho como desenvolvedor fullstack, estou aprendendo muito aqui.",
            "Estou trabalhando com uma nova ferramenta no back-end chamada AdoniJS.",
          ],
          date: {
            in: "Set - 2023",
            out: "Atualmente",
          },
          office: "Desenvolvedor Full-stack",
        },
        {
          company: {
            name: "Previdenciarista",
            site: "https://previdenciarista.com/",
          },
          about: [
            "Meu primeiro e atual trabalho como desenvolvedor, estou aprendendo muito aqui.",
            "Aprendi a usar Styled Components, a trabalhar com biblioteca de componentes antd, storybook, Nextjs e TypeScript.",
          ],
          date: {
            in: "Fev - 2022",
            out: "Set - 2023",
          },
          office: "Desenvolvedor Front-end",
        },
      ],
    },
    project: {
      titleSection: "Alguns desenvolvimentos",
      projects: [
        {
          name: "Jogos grátis para jogar",
          url: "https://free-to-play-project.vercel.app/",
          githubUrl: "https://github.com/lucasquearis/free-to-play-project",
          description:
            "Um aplicativo que oferece uma variedade de jogos grátis. Para aqueles momentos de tédio ou até mesmo para encontrar um jogo para jogar",
          technologies: [
            "Reactjs",
            "Context Api",
            "Bootstrap",
            "Free API",
            "React Router DOM",
            "Vercel Deploy",
          ],
          imagePath: "/assets/images/freeToPlayGames.png",
        },
        {
          name: "Meu primeiro Portfólio",
          url: "https://lucasquearis.github.io/portfolio/",
          githubUrl: "https://github.com/lucasquearis/portfolio",
          description:
            "Esse foi meu primeiro portfólio, terminei assim que terminei o módulo Front-end no Trybe",
          technologies: ["Reactjs", "Bootstrap", "Github Pages Deploy"],
          imagePath: "/assets/images/portfolio_1.png",
        },
        {
          name: "Meu segundo Portfólio",
          url: "#",
          githubUrl: "https://github.com/lucasquearis/portfolioV2",
          description:
            "Esse foi meu segundo e último portfólio até agora, resolvi fazer no Nextjs e Tailwind para aprender novas tecnologias",
          technologies: ["Nextjs", "Tailwind", "Vercel Deploy"],
          imagePath: "/assets/images/portfolio.png",
        },
        {
          name: "Forever Baby Case",
          url: "https://lucasquearis-forever-baby.netlify.app/",
          githubUrl: "https://github.com/lucasquearis/forever-liss-case",
          description:
            "Um projeto que eu fiz para um desafio técnico para vaga de front-end, projeto feito em 2 dias totalmente responsivo, um desafio muito legal",
          technologies: ["React", "Bootstrap", "Netlify Deploy"],
          imagePath: "/assets/images/foreverBaby.png",
        },
        {
          name: "Ar Motors",
          url: "https://armotoparts-project.netlify.app/",
          githubUrl: "https://github.com/lucasquearis/projeto-pessoal",
          description:
            "Meu primeiro job free-lancer aprendi bastante com esse projeto, a manipular o mapa e geolocalização.",
          technologies: [
            "React",
            "Mapbox-GL",
            "antD",
            "Styled Components",
            "Netlify Deploy",
          ],
          imagePath: "/assets/images/arMotors.png",
        },
      ],
    },
    contact: {
      titleSection: "Qual é o próximo passo?",
      getInTouch: "Entre em contato",
      phase:
        "Se quiser conversar sobre programação, jogos, falar sobre o mercado de trabalho ou apenas dar um oi, fique a vontade, farei o possível para te responder",
      contactButton: "Diga olá!",
    },
    header: [
      {
        key: "01.",
        word: "Sobre",
        anchor: "#about",
      },
      {
        key: "02.",
        word: "Experiências",
        anchor: "#experience",
      },
      {
        key: "03.",
        word: "Trabalhos",
        anchor: "#work",
      },
      {
        key: "04.",
        word: "Contato",
        anchor: "#contact",
      },
    ],
  },
};
