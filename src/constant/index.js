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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Passionate",
    icon: web,
  },
  {
    title: "Communication",
    icon: mobile,
  },
  {
    title: "Strong Time Management",
    icon: backend,
  },
  {
    title: "Expereinced as a Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [

]

const testimonials = [

]


const projects = [
  {
    name: "Cookking",
    description:
      "Recipe website with infinite scrolling based on the ratings of food. Mostly I worked on building reliable, reusable components with Redux and advanced hooks, and I Built an infinity scrolling pagination with image slideshow and complicated API call",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "violet-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: cookking,
    source_code_link: "https://github.com/cook-king-van/cook-king",
  },
  {
    name: "Latch",
    description:
      "Real-time language exchange app built in 3 member-group project. In this project, we utilized all the knowledge that we learn from the Lighthouse Lab and spent a lot of efforts on deciding and planning the topic and design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: latch,
    source_code_link: "https://github.com/Erica-jihyeon/Latch",
  },
  {
    name: "Interviewer Scheduler",
    description:
      "Scheduler app for booking with a mentor in avaiable time. this project is built by React and API server with PostgreSQL, and some frameworks which are storybook, Jest and Cypress.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "cypress",
        color: "violet-text-gradient",
      },
    ],
    image: interviewer,
    source_code_link: "https://github.com/YunDobi/interviewer-scheduler",
  },
];

export { services, technologies, experiences, testimonials, projects };