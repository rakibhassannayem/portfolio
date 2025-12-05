import ecotrackImg from "../assets/screenshots/ecoTrack.png";
import gameHub from "../assets/screenshots/gameHub.png";
import courseManage from "../assets/screenshots/courseManage.png";

export const projects = [
  {
    id: "ecotrack",
    title: "EcoTrack",
    description:
      "EcoTrack is a React frontend for tracking personal and community sustainability challenges. The app lets users discover challenges, join them, update progress, and view detailed activity history. It connects to the Echo Track API to read and modify user-challenge data.",
    image: ecotrackImg,
    alt: "EcoTrack",
    liveLink: "https://ecotrack-dd506.web.app",
    techStack: ["React", "Firebase", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "daisyUI"],
    githubLink: "https://github.com/rakibhassannayem/echo-track-client.git",
    challenges: "Implementing real-time updates for challenge progress and ensuring responsive design across various devices.",
    futurePlans: "Adding social features for users to compete in challenges together and implementing a dark mode."
  },
  {
    id: "gamehub",
    title: "Gamehub - A Game Library",
    description:
      "An engaging online library for discovering and supporting indie game developers.",
    image: gameHub,
    alt: "Gamehub - A Game Library",
    liveLink: "https://gamehub-7fab1.web.app",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Firebase"],
    githubLink: "https://github.com/rakibhassannayem/gamehub-a9.git",
    challenges: "Optimizing API calls for fetching large lists of games and handling image loading efficiently.",
    futurePlans: "Integrating user reviews and ratings, and adding a wishlist feature."
  },
  {
    id: "course-management",
    title: "Course Management Client",
    description:
      "A Next.js + React client for a course management site. Uses Firebase Authentication for user sign-in, TailWind + DaisyUI for styling, and Axios for server API calls",
    image: courseManage,
    alt: "Course Management Client",
    liveLink: "https://course-management-client-delta.vercel.app/",
    techStack: ["React", "Next.js", "Firebase Auth", "Tailwind CSS", "DaisyUI", "Axios"],
    githubLink: "https://github.com/rakibhassannayem/Course-Management-Client",
    challenges: "Managing complex state for course creation and enrollment flows, and securing API endpoints.",
    futurePlans: "Adding instructor dashboards with analytics and student progress tracking."
  }
];
