import avatar from "./images/avatar.png";

export const personalInfo = {
  name: "Pranav Patani",
  phone: "+91 9549597444",
  email: "pranav.patani@gmail.com",
  linkedin: "https://linkedin.com/in/pranavpatani",
  github: "https://github.com/Pranav-Patani",

  shortBio:
    "A passionate Frontend Engineer with a knack for creating dynamic and responsive web applications.",

  profilePictureUrl: avatar,
};

export const education = [
  {
    institution: "Manipal University Jaipur",
    degree: "Bachelor of Technology in Computer Science Engineering",
    specialization: "Specialised in AI and ML",
    dates: "2022 – 2026",
  },
  {
    institution: "Neog Full Stack Web Development Bootcamp",
    degree: "",
    specialization:
      "Created projects like HandpickedBooks, FunWithTriangles and, Cash Register. Worked with React.Js, Javascript, SASS, CSS, HTML. Improved problem-solving and communication skills.",
    dates: "February 2023 – August 2023",
    link: "https://neog.camp",
  },
];

export const projects = [
  {
    title: "Shelf Share",
    technologies: "Javascript, SASS",
    description:
      "Built a responsive book discovery and sharing platform using vanilla JavaScript. Got 200+ users and tracked over 12,000 events using Mixpanel; average user engagement time of 5 minutes+, tracked via google analytics.",
    techStack: ["Javascript", "SASS", "CSS3", "HTML5", "Parcel", "SVG", "WebP"],
    liveLink: "https://shelfshare.vercel.app",
    githubLink: "https://github.com/Pranav-Patani/Shelf-Share",
    date: "July 2024",
  },
  {
    title: "Wild Oasis",
    technologies: "ReactJs, Styled Components",
    description:
      "Built a staff-only hotel dashboard with email/password authentication, dark mode, and form handling using React Hook Form. Developed booking analytics with Recharts and styled the app using 30+ reusable UI components.",
    techStack: [
      "React.Js",
      "React Query",
      "React Form",
      "Recharts",
      "Styled Components",
    ],
    liveLink: "https://oasiscabins.vercel.app",
    githubLink: "https://github.com/Pranav-Patani/wildoasis",
    date: "March 2025",
  },
  {
    title: "Beverage Breeze",
    technologies: "React.Js, SASS",
    description:
      "Built an e-commerce frontend with Context API and useReducer for global state management. Designed a responsive interface with custom CSS animations and styled components using modular SCSS.",
    techStack: ["ReactJs", "SASS"],
    liveLink: "https://beveragebreeze.vercel.app",
    githubLink: "https://github.com/Pranav-Patani/BeverageBreeze",
    date: "July 2023",
  },
];

export const techSkills = {
  languages: [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    { name: "C", link: "https://en.cppreference.com/w/c/language" },
    { name: "C++", link: "https://isocpp.org/" },
  ],
  developerTools: [{ name: "VS Code", link: "https://code.visualstudio.com/" }],
  technologiesLibraries: [
    { name: "React.Js", link: "https://react.dev/" },
    { name: "Redux", link: "https://redux.js.org/" },
    { name: "React Query", link: "https://tanstack.com/query/latest" },
    { name: "React Form", link: "https://react-hook-form.com/" },
    { name: "SASS", link: "https://sass-lang.com/" },
    { name: "Styled Components", link: "https://styled-components.com/" },
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Parcel", link: "https://parceljs.org/" },
    { name: "Linux", link: "https://www.linux.org/" },
  ],
};

export const blogs = [
  {
    title: "Creating A Router In Vanilla Javascript",
    description:
      "Explores a basic implementation of a vanilla JS router using OOP and addressing a few challenges I faced while learning the implementation.",
    link: "https://pranavpatani.hashnode.dev/creating-a-router-in-vanilla-javascript",
  },
  {
    title:
      "A Complete Guide to Setting Up Dev Tools for Vanilla JavaScript Projects",
    description:
      "Explains dev tools set-up in a vanilla JS project targeting tools like eslint, stylelint, husky, lint-staged, prettier, and commitlint.",
    link: "https://pranavpatani.hashnode.dev/a-complete-guide-to-setting-up-dev-tools-for-vanilla-javascript-projects-part-1",
  },
  {
    title:
      "Shelf Share: A Personal Space for Book Lovers to Find and Share Reads",
    description:
      "Explores a vanilla JS project I built, Shelf Share, highlighting its key features, technologies used, and challenges faced.",
    link: "https://pranavpatani.hashnode.dev/shelf-share-a-personal-space-for-book-lovers-to-find-and-share-reads",
  },
];
