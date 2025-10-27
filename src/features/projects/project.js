import Resumaker from "../../assets/images/resumaker.png";
import EmojiVault from "../../assets/images/emoji-vault.png";
import Moody from "../../assets/images/moody.png";
import Spotify from "../../assets/images/spotify.png";

export const ProjectsData = [
  {
    id: 1,
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
  },
  {
    id: 2,
    title: "Emoji Vault",
    description:
      "It's a dynamic web app that lets users quickly search for and access their favorite emojis to use anywhere.",
    image: EmojiVault,
    tags: ["React.js", "Tailwind CSS", "Axios", "Context API", "Ant Design"],
    sourceCode: "https://github.com/rumaisanaveed/emoji-vault.git",
    demo: "https://emoji-vault.vercel.app/",
  },
  {
    id: 3,
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
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "A simple Spotify clone UI built to explore music app layouts. Focused on pixel perfect UI, clean design and smooth navigations.",
    image: Spotify,
    tags: ["Expo Router", "React Native", "Style Sheets"],
    sourceCode: "",
    demo: "",
  },
];
