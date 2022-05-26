// necessary imports
import amazonaws from "assets/svg/amazonaws.svg";
import androidstudio from "assets/svg/androidstudio.svg";
import bootstrap from "assets/svg/bootstrap.svg";
import css3 from "assets/svg/css3.svg";
import electron from "assets/svg/electron.svg";
import git from "assets/svg/git.svg";
import html5 from "assets/svg/html5.svg";
import java from "assets/svg/java.svg";
import javascript from "assets/svg/javascript.svg";
import mongodb from "assets/svg/mongodb.svg";
import nextdotjs from "assets/svg/nextdotjs.svg";
import nodedotjs from "assets/svg/nodedotjs.svg";
import react from "assets/svg/react.svg";
import tailwindcss from "assets/svg/tailwindcss.svg";

// export const skills_high = [html5, css3, javascript, bootstrap, react];
export const skills_high = [
  { label: "HTML", logo: html5 },
  { label: "CSS", logo: css3 },
  { label: "JavaScript", logo: javascript },
  { label: "Bootstrap", logo: bootstrap },
  { label: "React", logo: react },
  { label: "Next", logo: nextdotjs },
];
export const skills_medium = [
  { label: "Java", logo: java },
  { label: "Git", logo: git },
  { label: "Node", logo: nodedotjs },
  { label: "MongoDB", logo: mongodb },
  { label: "Android Studio", logo: androidstudio },
  { label: "Electron", logo: electron },
  { label: "Amazon AWS", logo: amazonaws },
];
export const skills_low = [{ label: "Tailwind", logo: tailwindcss }];
