export const projects = [
  {
    title: "Shell",
    technologies: ["C", "C++", "Yacc", "Lex"],
    description:
      "Fully functional shell written with C, C++, lex, and yacc. Features include command piping, command history, and wildcard expressions. Source code can't be shown as per Purdue CS course policy.",
    image: require("../assets/shell.png"),
  },
  {
    title: "Sprift Shopping",
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "Prisma ORM",
      "Clerk",
      "Stripe",
      "Testflight",
    ],
    description:
      "Mobile e-commerce application for buying and selling clothes with a swipe-based interface. Features include Clerk User Management and Authentication, Stripe payment processing, and Testflight deployment for beta testing on IOS.",
    image: require("../assets/sprift.png"),
    link: "https://www.spree-commerce.com/",
    github: "https://github.com/eemsley/sprift",
  },
  {
    title: "Noter (Twitter Clone)",
    technologies: [
      "Node.js/Express",
      "React",
      "Tailwind",
      "PostgreSQL",
      "Prisma ORM",
    ],
    description:
      'Twitter clone which allows users to post "notes" and follow other users. Features include account creation/login, CRUD operations for notes, and note sharing to other users.',
    image: require("../assets/noter.png"),
    github: "https://github.com/eemsley/noter",
  },
  {
    title: "Xinu Process Sceduler",
    technologies: ["C", "Assembly", "Xinu OS"],
    description:
      "Updated the vanilla Xinu priority-based process sceduler to use dynamic priority sceduling based on CPU usage. If a process uses its full time quantum, its priority is lowered and its quantum is increased. If it yields the CPU, its priority is raised and its quantum is decreased.",
    image: require("../assets/xinu.png"),
    github: "https://github.com/eemsley/xinu-process-scheduler",
  },
  {
    title: "Portfolio",
    technologies: ["React", "Tailwind", "Vercel"],
    description:
      "This portfolio site! Made from scratch with React and Tailwind.",
    image: require("../assets/portfolio.png"),
    link: "http://evan.emsley.us",
    github: "http://github.com/eemsley/evan.emsley.us",
  },
  {
    title: "Band Website",
    technologies: ["React", "Tailwind", "Vercel"],
    description:
      "Website for the band Arboretum. Features include YouTube embeds, Spotify embeds, and a Shopify store integration.",
    image: require("../assets/arboretum.png"),
    github: "http://github.com/eemsley/arboretum",
    link: "https://arboretum-three.vercel.app/",
  },
];

export const skills = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "HTML/CSS",
  "Tailwind CSS",
  "SQL",
  "MongoDB",
  "git",
  "GitHub Actions",
];
