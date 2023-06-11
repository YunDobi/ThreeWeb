import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  latch,
  carrent,
  jobit,
  tripguide,
  threejs,
  cookking,
  interviewer,
  estate,
  LargetEquipment,
  singleLine,
  CTransformer
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Passionate',
    icon: web,
  },
  {
    title: '"Can do" Attitude',
    icon: creator,
  },
  {
    title: 'Communication',
    icon: mobile,
  },
  {
    title: 'Strong Time Management',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [];

const testimonials = [];

const projects = [
  {
    name: 'Cookking',
    description:
      'Recipe website with infinite scrolling based on the ratings of food. Mostly I worked on building reliable, reusable components with Redux and advanced hooks, and I Built an infinity scrolling pagination with image slideshow and complicated API call',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux',
        color: 'violet-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: cookking,
    source_code_link: 'https://github.com/cook-king-van/cook-king',
  },
  {
    name: 'Latch',
    description:
      'Real-time language exchange app built in 3 member-group project. In this project, we utilized all the knowledge that we learn from the Lighthouse Lab and spent a lot of efforts on deciding and planning the topic and design.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
    ],
    image: latch,
    source_code_link: 'https://github.com/Erica-jihyeon/Latch',
  },
  {
    name: 'Real-Estate-App',
    description:
      'This is a Next.js project bootstrapped with create-next-app. Also I used Bayut API for fetching the Saudi Arabia real estate data and Chakra-UI for desgining.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'Chakra-UI',
        color: 'violet-text-gradient',
      },
    ],
    image: estate,
    source_code_link: 'https://github.com/YunDobi/Real-Estate-App',
  },

  // {
  //   name: "Interviewer Scheduler",
  //   description:
  //     "Scheduler app for booking with a mentor in avaiable time. this project is built by React and API server with PostgreSQL, and some frameworks which are storybook, Jest and Cypress.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "postgresql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "cypress",
  //       color: "violet-text-gradient",
  //     },
  //   ],
  //   image: interviewer,
  //   source_code_link: "https://github.com/YunDobi/interviewer-scheduler",
  // },
];

const elecProjects = [
  {
    name: "Large Equipments Location drawing",
    description:
      "Drafting the location of the large equipment, such as motors, into the building. Follow the IEEE rules to install the correct models and locations.",
    image: LargetEquipment,
    source_code_link: "https://drive.google.com/drive/folders/13x1eUAy2BavKvs2St_vZdDUfQbpj4wbL?usp=sharing",
  },
  {
    name: "Single Line Diagram",
    description:
      "Drafting of a single-line diagram for MCC 30 motors It required two separate drawings to describe the entire motor system. Download the files and look at the second drawing too.",
 
    image: singleLine,
    source_code_link: "https://drive.google.com/drive/folders/15XqXpwyJjmZYI6gD3-nkxWFyFwGdF3lG?usp=sharing",
  },
    {
    name: "Current Transformer Diagram",
    description:
      "Diagram for the 737 Current Transformer Also, download the files for more detail about the Three Creeks transformer overcurrent protection demolition with a new relay installed.",
 
    image: CTransformer,
    source_code_link: "https://drive.google.com/drive/folders/1KLjt3t3CypS7uHzr-QougmQlcEjzX7Ru?usp=sharing",
  }
];

export { services, technologies, experiences, testimonials, projects, elecProjects };
