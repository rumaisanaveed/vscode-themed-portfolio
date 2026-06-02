import react_icon from "../assets/icons/react_icon.svg";
import json_icon from "../assets/icons/json_icon.svg";
import js_icon from "../assets/icons/js_icon.svg";
import ts_blue_icon from "../assets/icons/ts_blue_icon.jpg";
import css_icon from "../assets/icons/css_icon.svg";
import html_icon from "../assets/icons/html_icon.svg";
import markdown_icon from "../assets/icons/markdown_icon.svg";
import md_icon from "../assets/icons/md_icon.svg";
import Code from "../components/icons/CodeIcon";
import Files from "../components/icons/FilesIcon";
import Github from "../components/icons/GithubIcon";
import Pencil from "../components/icons/Pencil";
import Mail from "../components/icons/MailIcon";
import Account from "../components/icons/AccountIcon";
import Settings from "../components/icons/SettingsIcon";
import HackathonIcon from "../components/icons/hackathon.png";
import ExperienceIcon from "../components/icons/experience.png";

export const explorerItems = [
  {
    name: "home.jsx",
    path: "/",
    icon: `${react_icon}`,
  },
  {
    name: "experience.md",
    path: "/experience",
    icon: `${ExperienceIcon}`,
  },
  {
    name: "articles.json",
    path: "/articles",
    icon: `${json_icon}`,
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: `${js_icon}`,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: `${css_icon}`,
  },
  {
    name: "tech-stack.html",
    path: "/tech-stack",
    icon: `${html_icon}`,
  },
  {
    name: "hackathons.ts",
    path: "/hackathons",
    icon: `${HackathonIcon}`,
  },
];

export const sidebarTopItems = [
  {
    Icon: Files,
    path: "/",
  },
  {
    Icon: Code,
    path: "/projects",
  },
  {
    Icon: Pencil,
    path: "/articles",
  },
  {
    Icon: Mail,
    path: "/contact",
  },
];
export const sidebarBottomItems = [
  {
    Icon: Account,
    path: "/",
  },
  {
    Icon: Settings,
    path: "/settings",
  },
];
