import Moody from "../../assets/images/moody.png";
import Resumaker from "../../assets/images/resumaker.png";
import Spotify from "../../assets/images/spotify.png";
import TechPathAi from "../../assets/images/TechPathAI.png";
import SalMine from "../../assets/images/SalMine.png";

export const projectsData = [
  {
    id: 1,
    title: "Tech Path AI",
    description:
      "Tech Path AI is an AI-powered career guidance platform designed to help students make informed decisions about their future in Software Engineering and Computer Science. The system evaluates users through assessments and analyzes their skills, interests, and strengths to provide personalized career recommendations. It also offers learning roadmaps and guidance to bridge skill gaps and support long-term career growth. The platform also aims to provide insights about various tech fields through roadmaps & career descriptions.",
    image: TechPathAi,
    tags: [
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "React hook form",
      "Yup",
      "Tan Stack Query",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    sourceCode: "https://github.com/AbdulWasaySaleem/CareerMentor.git",
    demo: "https://tech-path-ai.vercel.app/",
    achievements: [
      "Developed the frontend of Tech Path AI as part of the Final Year Project (FYP).",
      "Implemented role-based access control for user and admin dashboards.",
      "Built a responsive and scalable UI using React.js, Tailwind CSS, and Shadcn UI.",
      "Integrated RESTful APIs using Axios and React Query for efficient data fetching and real-time updates.",
      "Implemented complex form validation with React Hook Form and Yup, reducing errors by 50%.",
      "Enhanced content creation experience by integrating ProseKit rich text editor.",
      "Followed best practices throughout the development cycle, significantly improving code maintainability.",
    ],
  },
  {
    id: 2,
    title: "SAL Mine",
    description:
      "Sal Mine is a project developed for a USA-based client, aimed at providing first aid solutions during emergencies. The system helps by sharing essential information, such as allergies, existing medical conditions, and current medications of the patient with available doctors, enabling them to provide timely and informed medical assistance.",
    image: SalMine,
    tags: ["React.js", "Tailwind CSS", "Axios", "Context API"],
    sourceCode: "",
    demo: "",
    achievements: [
      "Successfully implemented a fully responsive design, ensuring optimal performance and usability across all devices, from desktops to mobile phones.",
      "Implemented role-based access control for patient and doctors dashboards.",
      "Developed a clean and intuitive UI, resulting in increased user engagement and satisfaction.",
      "Created reusable React components, reducing development time and ensuring consistency across the application.",
      "Implemented English to Spanish translation and vice versa using i18n, providing real-time language translation.",
      "Integrated html2canvas for previewing and downloading the patient card, improving user satisfaction and engagement.",
      "Collaborated with backend developer for integrating Restful APIs into the application.",
    ],
  },
  {
    id: 3,
    title: "Resumaker",
    description:
      "Resumaker is a versatile web app designed to make resume creation simple and efficient for users preparing for their next roles.",
    image: Resumaker,
    tags: [
      "Next.js",
      "React.js",
      "Clerk",
      "Firebase",
      "Tailwind CSS",
      "Ant Design",
    ],
    sourceCode: "https://github.com/rumaisanaveed/resumaker.git",
    demo: "https://resume-maker-kit.netlify.app/",
    achievements: [
      "Successfully implemented a fully responsive design, ensuring optimal performance and usability across desktops, tablets, and mobile devices.",
      "Implemented role-based access control for patient and doctor dashboards to maintain secure and structured access.",
      "Designed and developed a clean, intuitive UI, enhancing user engagement and overall satisfaction.",
      "Built reusable React components, reducing development time and maintaining design consistency across the application.",
      "Implemented real-time English-Spanish translation using i18n, enabling seamless bilingual support.",
      "Integrated html2canvas for patient card preview and download functionality, improving user experience and engagement.",
      "Collaborated closely with the backend developer to integrate RESTful APIs, ensuring smooth data flow and functionality.",
    ],
  },
  {
    id: 4,
    title: "Moody",
    description:
      "A beautifully designed mobile app that lets users track their moods over the last 7 days and much more. Users can track their moods easily!",
    image: Moody,
    tags: [
      "Expo Router",
      "React Native",
      "Firebase",
      "React Query",
      "Zustand",
      "TypeScript",
    ],
    sourceCode: "https://github.com/rumaisanaveed/moody.git",
    demo: "",
    achievements: [
      "Developed a mobile app using React Native and Expo Router that allows users to track and visualize their moods over the past 7 days.",
      "Implemented state management using Zustand, enabling efficient and centralized handling of user mood data.",
      "Integrated Firebase for secure authentication and real-time data storage, ensuring reliable persistence across devices.",
      "Used React Query for efficient data fetching and synchronization with Firebase, providing smooth real-time updates.",
      "Leveraged TypeScript to enforce type safety and improve code reliability across the application.",
      "Designed an intuitive and responsive UI, enhancing user engagement and providing a seamless experience on both Android and iOS devices.",
      "Built reusable React Native components, reducing development time and maintaining consistency across the app.",
    ],
  },
  {
    id: 5,
    title: "Spotify Clone",
    description:
      "A simple Spotify clone UI built to explore music app layouts. Focused on pixel perfect UI, clean design and smooth navigations.",
    image: Spotify,
    tags: ["Expo Router", "React Native", "Style Sheets"],
    sourceCode: "",
    demo: "",
    achievements: [
      "Developed a Spotify Clone mobile app using React Native and Expo Router, focusing on exploring music app layouts and design patterns.",
      "Implemented pixel-perfect UI with clean and responsive designs using Style Sheets, ensuring a visually appealing user experience.",
      "Built reusable and modular React Native components to maintain consistency and reduce development time.",
      "Implemented smooth navigation flows with Expo Router, providing an intuitive and seamless app experience.",
      "Focused on UI/UX best practices to replicate core features of a music streaming application in a simplified manner.",
    ],
  },
];
