import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "Java- Script",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "Mongo DB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "Type- Script",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "AdamAi OpenAi Image Generator",
    company_name: "Visit Website ",
    github: " | Github Docs",
    link: "https://adamaiimage.adamalrasi.com/",
    githubLink: "https://github.com/adamalrasi/AdamAi__OpenAi-Image-Generator",
    icon: react,
    iconBg: "#d7f7F5",
    date: "Tech Stack: React, OpenAi, Dall-E, TailwindCSS",
    points: [
      "Generate images of my pixel doing whatever you like. Whether it's fighting off zombies or riding a dragon, the choice is yours.",
      "The application is connected to the OpenAi Dall E API. Built on Vite@React.",
      "The Pixel was made during my time at the School of Code Bootcamp, I thought it would be fun to build a a site to play around with my Pixel.",
    ],
  },
  {
    title: "AdamAi Ultimate Article Summarizer",
    company_name: "Visit Website ",
    github: " | Github Docs",
    icon: javascript,
    iconBg: "#f0db4e",
    date: "Tech Stack: React, TailwindCSS, OpenAI, RapidAPI",
    points: [
      "This website was built to summarize articles for busy users. It is built on React and linked to RapidAPI using the POST HTTP method. OpenAI handles the summarization and sends back a response. While building this project, I learned about RapidAPI and its many possibilities.",
      "Connected to RapidAPI/OpenAPI via Fetch method.",
    ],
  },
  {
    title: "AdamAi Funniest Coding Ai ChatBot",
    company_name: "Visit Website ",
    github: " | Github Docs",
    icon: nodejs,
    iconBg: "#b7e4c7",
    date: "Tech Stack: OpenAI, JavaScript, Node.js, Express.js, HTML/CSS",
    points: [
      "AdamAi is a language model AI developed with advanced technology to understand and generate human-like text. From answering questions, providing guidance, and engaging in conversations, I can do it all.",
      "Adam Ai can analyze your code, spot potential bugs, suggest improvements, and offer mind-blowing solutions.",
      "Connected to the OpenAi API, responsed with emojis and funny jokes.",
    ],
  },
  {
    title: "3D Product Website",
    company_name: "Visit Website ",
    github: " | Github Docs",
    icon: express,
    iconBg: "#a2d2ff",
    date: "React, TailwindCSS, MySQL, OpenAI",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
