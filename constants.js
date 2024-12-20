export const METADATA = {
  author: "Hima vamsi",
  title: "Portfolio | Hima vamsi",
  description:
    "Hima vamsi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern websites that captivate and engage users.",
  siteUrl: "#",
  twitterHandle: "",
  keywords: [
    "Hima vamsi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "#",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern websites",
  "A pragmatic Backend Developer"
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: himavamsi.kummari@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/hima-vamsi-297744250/",
  },
  {
    name: "github",
    url: "https://github.com/himavamsi12",
  },
  {
    name: "instagram",
    url: "#",
  },
  {
    name: "twitter",
    url: "#",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", ],
};

export const PROJECTS = [
  {
    name: "Travel advisor",
    image: "/projects/pocketadvisor.png",
    blurImage: "/projects/blur/",
    description: "it shows about restuarants,hotels by google map API 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "#",
    tech: ["react", "tailwindcss", "mapbox"],
  },
  {
    name: "NXT Trendz shopping website",
    image: "/projects/nxttrendz.png",
    blurImage: "/projects/blur/",
    description: "Shopping website similar amazon it provides according prime and non prime users",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "#",
    tech: ["typescript", "react", "tailwindcss"],
  },
  {
    name: "Youtube clone",
    image: "/projects/nxtwatch.png",
    blurImage: "/projects/blur/",
    description:
      "Youtube clone it provides content of entertainment,sports..",
    gradient: ["#000066", "#6699FF"],
    url: "#",
    tech: ["react"],
  },
  {
    name: "Food munch",
    image: "/projects/foodmunch.png",
    blurImage: "/projects/blur/",
    description: "its shows about the menu of the food present in the each restuarants",
    gradient: ["#142D46", "#2E4964"],
    url: "#",
    tech: ["react"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Sixjuly",
      description:
        "Sixjuly is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img src="/projects/sixjuly.svg"/>
        </div>
      ),
    },
    {
      title: "Experience",
      description:
        "As a Frontend Developer, I specialize in creating animated and interactive websites that captivate users and deliver seamless digital experiences. By leveraging powerful tools like GSAP (GreenSock Animation Platform), I design smooth animations, scroll effects, and dynamic transitions that bring ideas to life. My focus is on crafting responsive and visually appealing designs while implementing modern web development practices to ensure functionality across all devices. With a passion for blending creativity and technology, I aim to transform concepts into engaging and immersive online experiences.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
    /*{
      title: "Evolution",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget tellus vel neque dictum euismod rutrum a augue. Pellentesque consequat vehicula dictum. Ut dictum lacinia tellus, et elementum urna blandit quis. Integer imperdiet ipsum luctus, finibus dui non, ultrices lectus. Nunc cursus nulla nibh, at tempor ex mollis elementum. Suspendisse lorem metus, fermentum at velit quis, maximus ornare dui.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },*/
    /*{
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },*/
  ],
  AVIATE: [
    {
      title: "JP Morgan Chase & Co",
      description:
        "J.P. Morgan is a leading global financial services firm that provides solutions in investment banking, asset management, wealth management, and financial advisory. With a history spanning over 200 years, the company is known for its innovation, integrity, and client-focused approach.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img src="/projects/jpmorgan1.png"/>
        </div>
      ),
    },
    {
      title: "Experience",
      description:
        "Designed and implemented a dynamic live graph using JPMorgan Chases's open-source library,resulting in a 20% increase in trader's monitoring efficiency. Achieved optimal web application output by repairing repository files, showcasing high-performance and scalability expertise. Established a local dev environment by downloading essential files, tools, and dependencies.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Software Engineer
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Rinex",
      description:
        "Rinex is a dynamic platform dedicated to empowering learners with cutting-edge educational resources and skill-building opportunities. Specializing in innovative learning solutions, Rinex offers courses and training programs tailored to meet the demands of the modern workforce, emphasizing practical, real-world applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          <img src="/projects/rinex1.png"/>
        </div>
      ),
    },
    {
      title: "Experience",
      description:
        "Improved machine learning algorithms by actively participating in brainstorming sessions with experts, leading to a 15% increase in overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Artificial Inteligence
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
