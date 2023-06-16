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
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  nextjs,
  aws,
  openAi,
  ayres,
  hydrauTech,
  transystems,
  ac,
  gt,
  aiIcon,
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
    title: 'Web Development',
    icon: web,
  },
  {
    title: 'React & Next.JS',
    icon: mobile,
  },
  {
    title: 'JavaScript',
    icon: backend,
  },
  {
    title: 'Problem Solving',
    icon: creator,
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
    name: 'Next.JS',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
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
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Open-AI',
    icon: openAi,
  },
];

const experiences = [
  {
    title: 'Hydrualic Engineer',
    company_name: 'Ayres Associates',
    icon: ayres,
    iconBg: '#FFFFFF',
    date: 'January 2020 - April 2023',
    points: [
      'Led and assisted in project management decisions while maintaining client and contractor relationships.',
      'Developed numerical models of riverine, hydraulic, and hydrologic systems.',
      'Designed culverts and drainage features along highway environments.',
      'Composed technical engineering reports documenting analysis and design methodologies.',
    ],
  },
  {
    title: 'Water Resources Engineer',
    company_name: 'Hydrau-Tech',
    icon: hydrauTech,
    iconBg: '#383E56',
    date: 'April 2019 - January 2020',
    points: [
      "Led and assisted in the design of scour countermeasures for Scour Critical Structures within the CDOT's Plan of Action (POA) Program. ",
      'Performed detailed site surveys of hydraulic structures, floodplains, and stream bathymetry.',
      'Estimated construction costs for various countermeasure and stream channel designs. ',
    ],
  },
  {
    title: 'Site/Civil Engineer',
    company_name: 'Transystems, Formally SEPI',
    icon: transystems,
    iconBg: '#FFFFFF',
    date: 'February 2017 - August 2018',
    points: [
      'Developed full site design, construction specification, modeling, and management of private and municipal developments.',
      'Composed construction contract and bidding packages.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Represented SEPI Engineering as the Town of Leland contracted engineer at Town Review Council meetings',
    ],
  },
];

const testimonials = [
  {
    testimonial: 'Ben really cares about his clients and deliverables.',
    name: 'Adrienne Cox',
    designation: 'Division 3 Planning Engineer',
    company: 'NCDOT',
    image: ac,
  },
  {
    testimonial: 'He gets the job done.',
    name: 'Greg Thompson',
    designation: 'Senior Project Manager',
    company: 'Summit Design and Engineering Services',
    image: gt,
  },
];

const projects = [
  {
    name: 'AI Icon Generator',
    description:
      'Web-based, AI powered, icon generator that saves you from paying for a designer and wasting time.',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'pink-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenAI',
        color: 'orange-text-gradient',
      },
      {
        name: 'AWS',
        color: 'pink-text-gradient',
      },
    ],
    image: aiIcon,
    source_code_link: 'https://github.com/benjaminctyner/icon-generator-ai/',
    host_link: 'http://icons.ben-t.dev',
    li_link: 'https://www.linkedin.com/in/ben-tyner/',
  },
];

export { services, technologies, experiences, testimonials, projects };
