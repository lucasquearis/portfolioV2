import { LanguageEnum } from "../context/LanguageProvider";

export const LANGUAGES = {
  [LanguageEnum.ENGLISH]: {
    welcome: {
      greetings: "Hi, my name is",
      name: "Lucas A. Santos.",
      iam: "I'm Full Stack Developer",
      about: [
        "I'm a full-stack developer formed by",
        "specializing in front-end development. I am currently studying Applied Artificial Intelligence at",
      ],
      resumeButton: "See my Resume",
    },
    about: {
      titleSection: "About Me",
      paragraphs: [
        "Full Stack Developer with 3 years of experience and specialist in building complete and efficient web solutions.",
        "Mainly working with JavaScript and its frameworks (ReactJS, NodeJS, ExpressJS, TypeScript, NextJS), ensuring application performance and scalability, as well as SQL and NoSQL databases, ORMs, and Query Builders.",
        "Pursuing a degree in Applied Artificial Intelligence (PUC-PR) and specialized in Web Development (Trybe).",
        "I apply the Continuous Learning methodology daily to improve my skills and knowledge to deliver the best results.",
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
            "Developed important modules for the system, such as calculating minimum margin for load handling, load checklists, vehicles, and deliveries.",
            "Updated the project's legacy React code to the latest version already in TypeScript.",
            "Collaborated in project requirements analysis, helping to define tasks to avoid conflicts with other functionalities in the system and rework.",
            "Developed and maintained web applications using TypeScript, JavaScript, React, Node.js, and the Adonis.js framework.",
            "Implemented improvements for user experience and system security.",
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
            "Responsible for migrating application components from JavaScript to TypeScript, ensuring greater code security and maintainability.",
            "Refactored and improved the performance of legacy code, contributing to a better user experience.",
            "Collaborated with the team designer to develop the Previdenciarista website and blog in Next.js, faithfully following the proposed layout and meticulously attending to every detail.",
            "Studied and implemented micro-frontends using single-spa, improving the modularity and scalability of the application.",
            "Responsible for the project's Design System, making changes and maintaining all React components of the site/blog as well as the main application.",
            "Documented all system components in Storybook, creating an isolated environment for the creation and manipulation of components, facilitating their handling and maintenance.",
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
      iam: "Eu sou Desenvolvedor Full Stack",
      about: [
        "Sou desenvolvedor formado pela",
        "focado em desenvolvimento front-end. Eu estou atualmente estudando Inteligencia Artificial Aplicada na",
      ],
      resumeButton: "Veja meu currículo",
    },
    about: {
      titleSection: "Sobre Mim",
      paragraphs: [
        "Desenvolvedor Full Stack com 3 anos de experiência e especialista em construir soluções web 	completas e eficientes.",
        "Atuando principalmente com JavaScript e seus frameworks (ReactJS, NodeJS, ExpressJS, 	TypeScript, NextJS), garantindo a performance e escalabilidade das aplicações, assim como banco de dados SQL e NoSQL, ORM's e Query Builders.",
        "Graduando em Inteligência Artificial Aplicada (PUC-PR) e com especialização em Desenvolvimento 	Web (Trybe).",
        "Aplico diariamente a metodologia de Aprendizagem Contínua, justamente para aprimorar minhas 	habilidades e conhecimentos para entregar o melhor resultado.",
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
            "Desenvolvi módulos importantes para o sistema, como cálculo de margem mínima no atendimento de cargas, checklists de cargas, veículos e entregas.",
            "Atualizei o código legado do React do projeto para a mais nova já em TypeScript.",
            "Colaborei na análise de requisitos dos projetos, ajudando a definir tarefas para evitar conflitos com outras funcionalidades presentes no sistema e retrabalhos.",
            "Desenvolvi e mantive aplicações web utilizando TypeScript, JavaScript, React, Node.js e o framework Adonis.js.",
            "Implementei melhorarias para a experiência do usuário e segurança do sistema.",
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
            "Responsável pela migração dos componentes da aplicação de JavaScript para TypeScript, garantindo maior segurança e manutenção do código.",
            "Refatorei e melhorei o desempenho de códigos legados, contribuindo para uma melhor experiência do usuário.",
            "Colaborei com o designer do time para desenvolver o site e blog do Previdenciarista em Next.js, seguindo fielmente o layout proposto e cuidando de cada detalhe com perfeccionismo.",
            "Estudei e implementei micro-frontends utilizando single-spa, melhorando a modularidade e a escalabilidade da aplicação.",
            "Responsável pelo Design System do projeto, realizando alterações e manutenções em todos os componentes React do site/blog e também da aplicação principal.",
            "Documentei todos os componentes do sistema no Storybook, criando um ambiente isolado para a criação e manipulação de componentes, facilitando a manipulação e a manutenção do mesmo.",
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
          name: "Portfólio",
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
