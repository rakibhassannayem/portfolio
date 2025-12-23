import ecotrackImg from "../assets/screenshots/ecoTrack.png";
import gameHub from "../assets/screenshots/gameHub.png";
import courseManage from "../assets/screenshots/courseManage.png";
import clubSphere from "../assets/screenshots/clubSphere.png";

export const projects = [
  {
    id: "clubSphere",
    title: "Club Sphere",
    description:
      "Club Sphere is a comprehensive web application designed to streamline the management of clubs, events, and memberships. It provides a seamless experience for administrators, club managers, and members to interact, organize, and participate in various club activities.",
    image: clubSphere,
    alt: "Club Sphere",
    liveLink: "https://clubsphere-da4e4.web.app/",
    techStack: [
      "React (v19)",
      "Tailwind CSS",
      "DaisyUI",
      "React Router (v7)",
      "Tanstack Query",
      "Firebase",
      "Axios",
      "Framer Motion",
      "Lucide React, React Icons",
      "React Icons",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/rakibhassannayem/clubSphere.git",
    challenges:
      "Securely managing navigation and protecting routes to ensure that Admins, Managers, and Members can strictly access only their authorized dashboards and features.",
    futurePlans:
      "Adding a real-time chat or discussion forum feature to allow club members to interact, discuss events, and build a stronger community within their clubs.",
  },
  {
    id: "ecotrack",
    title: "EcoTrack",
    description:
      "EcoTrack is a React frontend for tracking personal and community sustainability challenges. The app lets users discover challenges, join them, update progress, and view detailed activity history. It connects to the Echo Track API to read and modify user-challenge data.",
    image: ecotrackImg,
    alt: "EcoTrack",
    liveLink: "https://ecotrack-dd506.web.app",
    techStack: [
      "React",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "daisyUI",
    ],
    githubLink: "https://github.com/rakibhassannayem/echo-track-client.git",
    challenges:
      "Implementing real-time updates for challenge progress and ensuring responsive design across various devices.",
    futurePlans:
      "Adding social features for users to compete in challenges together and implementing a dark mode.",
  },
  {
    id: "course-management",
    title: "Course Management System",
    description:
      "A Next.js + React client for a course management site. Uses Firebase Authentication for user sign-in, TailWind + DaisyUI for styling, and Axios for server API calls",
    image: courseManage,
    alt: "Course Management Client",
    liveLink: "https://course-management-client-delta.vercel.app/",
    techStack: [
      "React",
      "Next.js",
      "Firebase Auth",
      "Tailwind CSS",
      "DaisyUI",
      "Axios",
    ],
    githubLink: "https://github.com/rakibhassannayem/Course-Management-Client",
    challenges:
      "Managing complex state for course creation and enrollment flows, and securing API endpoints.",
    futurePlans:
      "Adding instructor dashboards with analytics and student progress tracking.",
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
    challenges:
      "Optimizing API calls for fetching large lists of games and handling image loading efficiently.",
    futurePlans:
      "Integrating user reviews and ratings, and adding a wishlist feature.",
  },
];
