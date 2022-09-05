import ckm from "assets/images/cho-korean-mart.webp";
import nabi from "assets/images/nabi.webp";

export const academic_projects_data = [
  {
    title: "Nabi",
    startingDate: "Aug. 2021",
    endingDate: "Dec. 2021",
    description:
      "Capstone project for my undergrad program. A progressive web application focusing on mental wellness. Developed in coordination with the Youth for Mental Health Coalition, a Philippine-based NGO.",
    tags: ["MERN", "MongoDB", "Express", "React", "Node"],
    logo: nabi,
    link: null,
  },
  {
    title: "CHO Korean Mart: Inventory Management App & POS",
    startingDate: "Feb. 2021",
    endingDate: "June 2021",
    description:
      "Client-based project for my Software Engineering course. This is an inventory management and POS in one standalone desktop application. Developed for CHO Korean Mart.",
    tags: ["React", "Electron", "NeDB"],
    logo: ckm,
    link: null,
  },
];

export const personal_projects_data = [
  {
    title: "Wordle Clone",
    startingDate: null,
    endingDate: null,
    description: "A clone of the famous game Wordle. Built entirely on React.",
    tags: ["React"],
    logo: null,
    link: "https://alnxcix.github.io/react-wordle/",
  },
  {
    title: "PokéDex",
    startingDate: null,
    endingDate: null,
    description:
      "Standard PokéDex app that displays a list of Pokémons, their typings, abilities, and stats. Built using React and uses PokéAPI to fetch information.",
    tags: ["React", "PokéAPI"],
    logo: null,
    link: "https://alnxcix.github.io/react-pokedex/",
  },
];
