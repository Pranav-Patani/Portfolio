import avatar from "/assets/avatar.webp";
import shelfshare from "/assets/shelfshare.webp";
import wildoasisLight from "/assets/wildoasis-light.webp";
import wildoasisDark from "/assets/wildoasis-dark.webp";
import beveragebreeze from "/assets/beveragebreeze.webp";
import routerBlog from "/assets/router-blog.webp";
import devToolsBlog from "/assets/dev-tools-blog.webp";
import shelfshareBlog from "/assets/shelfshare-blog.webp";

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
    description: [
      `🔍 Search books`,
      `📖 Share books that inspire you`,
      `📚 Build and share collections that showcase your unique bookish world`,
    ],
    techStack: ["Javascript", "SASS", "CSS3", "HTML5", "Parcel", "SVG", "WebP"],
    liveLink: "https://shelfshare.vercel.app",
    githubLink: "https://github.com/Pranav-Patani/Shelf-Share",
    date: "July 2024",
    image: shelfshare,
  },
  {
    title: "Wild Oasis",
    technologies: "ReactJs, Styled Components",
    description: [
      `📊 Dashboard: Gives an overview of the hotel bookings data, showing primary stats with a graphical overview`,
      `🛡️ Authentication: Gives access only to the hotel staff`,
      `🛏️ Room management system: Review, add, edit, and delete rooms`,
    ],
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
    imageLight: wildoasisLight,
    imageDark: wildoasisDark,
  },
  {
    title: "Beverage Breeze",
    technologies: "React.Js, SASS",
    description: [
      `🔍 Search - Find beverages through the global search bar in the header`,
      `🛒 Cart and Wishlist - Save items for checkout or save for a later purchase`,
      `⚙ Filtering – Use various filters for a precise search`,
    ],
    techStack: ["ReactJs", "SASS"],
    liveLink: "https://beveragebreeze.vercel.app",
    githubLink: "https://github.com/Pranav-Patani/BeverageBreeze",
    date: "July 2023",
    image: beveragebreeze,
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
    { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Parcel", link: "https://parceljs.org/" },
    { name: "Linux", link: "https://www.linux.org/" },
  ],
};

export const blogs = [
  {
    title: "Creating A Router In Vanilla Javascript",
    description:
      "Navigation is one of the biggest challenges when dealing with a single-page application. You need to ensure that the user does not notice any difference in the website's behavior compared to that of a multi-page application. Any links that redirect the user within the application must be handled so that they do not cause",
    link: "https://pranavpatani.hashnode.dev/creating-a-router-in-vanilla-javascript",
    image: routerBlog,
  },
  {
    title:
      "A Complete Guide to Setting Up Dev Tools for Vanilla JavaScript Projects",
    description:
      "Managing and debugging large code bases can be challenging, especially when they lack proper structure or standards. Following a standard for writing code from the beginning, we can avoid spending hours on minor issues and reduce the communication gap among",
    link: "https://pranavpatani.hashnode.dev/a-complete-guide-to-setting-up-dev-tools-for-vanilla-javascript-projects-part-1",
    image: devToolsBlog,
  },
  {
    title:
      "Shelf Share: A Personal Space for Book Lovers to Find and Share Reads",
    description:
      "Have you ever had a great collection of books but couldn’t find an easy way to share it with your fellow readers? Did you ever struggle with organizing books or collections of books without creating a mess? If your answer is yes, then",
    link: "https://pranavpatani.hashnode.dev/shelf-share-a-personal-space-for-book-lovers-to-find-and-share-reads",
    image: shelfshareBlog,
  },
];
