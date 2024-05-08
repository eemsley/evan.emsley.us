export const projects = [
  {
    title: "Shell",
    technologies: ["C", "C++", "Yacc", "Lex"],
    description:
      "Fully functional shell written with C, C++, lex, and yacc. Features include command piping, command history, and wildcard expressions.",
    image: require("../assets/shell.png"),
    link: "http://github.com",
  },
  {
    title: "Sprift Shopping",
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "Prisma ORM",
      "Vercel",
      "Clerk User Management",
      "Stripe",
      "Testflight",
    ],
    description:
      "Mobile e-commerce application for buying and selling clothes with a swipe-based interface. Features include Clerk User Management and Authentication, Stripe payment processing, and Testflight deployment for beta testing on IOS.",
    image: require("../assets/sprift.png"),
    link: "http://github.com",
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
    link: "http://github.com",
  },
  {
    title: "Xinu Process Sceduler",
    technologies: ["C", "Assembly", "Xinu OS"],
    description:
      "Updated the vanilla Xinu priority-based process sceduler to use dynamic priority sceduling based on CPU usage. If a process uses its full time quantum, its priority is lowered and its quantum is increased. If it yields the CPU, its priority is raised and its quantum is decreased.",
    image: require("../assets/xinu.png"),
    link: "http://github.com",
  },
];
