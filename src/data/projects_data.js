import ckm from 'assets/images/cho-korean-mart.webp';
import nabi from 'assets/images/nabi.webp';

export const client_based_projects = [
  {
    title: 'Nabi',
    startingDate: 'Aug. 2021',
    endingDate: 'Dec. 2021',
    description:
      'Capstone project. A progressive web application focusing on mental wellness. Developed in coordination with the Youth for Mental Health Coalition, a Philippine-based NGO.',
    tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node'],
    logo: nabi,
    link: undefined,
  },
  {
    title: 'CHO Korean Mart: Inventory Management App & POS',
    startingDate: 'Feb. 2021',
    endingDate: 'June 2021',
    description:
      'Software Engineering project. This is an inventory management and POS in one standalone desktop application. Developed for CHO Korean Mart.',
    tags: ['React', 'Electron', 'NeDB'],
    logo: ckm,
    link: undefined,
  },
];

export const showcase_projects = [
  {
    title: 'CPU Scheduling Simulator',
    startingDate: undefined,
    endingDate: undefined,
    description: 'React project that simulates CPU scheduling algorithms.',
    tags: ['React', 'Material UI', 'Algorithms'],
    logo: undefined,
    link: 'https://alnxcix.github.io/react-cpu-scheduling/',
  },
  {
    title: 'Wordle Clone',
    startingDate: undefined,
    endingDate: undefined,
    description: 'A clone of the famous game Wordle. Built entirely on React.',
    tags: ['React', 'Game'],
    logo: undefined,
    link: 'https://alnxcix.github.io/react-wordle/',
  },
  {
    title: 'PokéDex',
    startingDate: undefined,
    endingDate: undefined,
    description:
      'Standard PokéDex app that displays a list of Pokémons, their typings, abilities, and stats. Built using React and uses PokéAPI to fetch information.',
    tags: ['React', 'PokéAPI'],
    logo: undefined,
    link: 'https://alnxcix.github.io/react-pokedex/',
  },
];
