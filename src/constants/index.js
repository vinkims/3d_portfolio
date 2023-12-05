import {
  aws,
  mobile,
  backend,
  creator,
  web,
  javascript,
  jenkins,
  kafka,
  kubernetes,
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
  aspira,
  chemusar,
  meta,
  starbucks,
  tesla,
  tinka,
  shopify,
  carrent,
  jobit,
  tripguide,
  users,
  threejs,
  java,
  mysql,
  postgres,
  springboot,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "AWS",
    icon: aws,
  },
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "Fullstack Engineer",
    company_name: "Freelance",
    icon: chemusar,
    iconBg: "#383E56",
    date: "Jan 2018 - Dec 2018",
    points: [
      "Developing and maintaining web applications using JavaScript, React.js, HTML and CSS.",
      "Integrating third-party APIs to web and mobile applications.",
      "Employing SQL and NoSQL databases including MySQL, PostgreSQL and MongoDB.",
      "Optimizing application performance through code splitting, lazy loading and data caching.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Aspira Kenya",
    icon: aspira,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Dec 2020",
    points: [
      "Developing backend applications using Java, Spring Boot and Node.js.",
      "Designing and developing mobile applications using React Native, Android and iOS.",
      "Deploying applications to AWS EC2 and Elastic Beanstalk.",
      "Conducting comprehensive unit, integration and end-to-end tests.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tinka Networks Ltd",
    icon: tinka,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Developing microservices using Java, Spring Boot, Node.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Containerizing applications with Docker and orchestrating them with Kubernetes.",
      "Establishing CI/CD pipelines using Jenkins, CircleCI and GitHub Actions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Users API",
    description: 
      "A CRUD application that shows how to host a Spring Boot PostgreSQL application on Amazon EC2.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: users,
    source_code_link: "https://github.com/vinkims/users_api"
  }
];

export { services, technologies, experiences, testimonials, projects };