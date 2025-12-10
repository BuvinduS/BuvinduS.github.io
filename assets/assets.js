import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img_me.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

import UoM_logo from "./University_of_Moratuwa_logo.png";
import CSE_logo from "./cse_logo.png";
import LinkedIn_logo from "./LinkedIn_logo.png";
import Github_logo from "./GitHub-logo.png";
import DS_logo from "./DS_College_crest.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  UoM_logo,
  CSE_logo,
  LinkedIn_logo,
  Github_logo,
  DS_logo,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

// Custom
export const projectData = [
  {
    name: "Ikmangaman",
    image: "/project_images/ikmangaman_img.png",
    description:
      "Worked on API handling and backend development for Ikmangaman, an AI-powered travel planning platform designed to transform the way people explore domestic tourism in Sri Lanka.",
    links: [
      {
        url: "https://github.com/nsanjula/Ikmangaman.lk.git",
        text: "GitHub",
        icon: "github",
      },
      { url: "https://ikmangaman.netlify.app/", text: "Live Demo" },
      // { url: "https://blog.com/gesture", text: "Read Blog" },
    ],
  },
  {
    name: "Gesture Based Volume Controller",
    image: "/project_images/volume_control_image.png",
    description:
      "Uses OpenCV, MediaPipe and the Python Core Audio Windows Library (pycaw) to use computer vision and adjust system volume of a windows based device",
    links: [
      {
        url: "https://github.com/BuvinduS/Hand-Tracking-Volume-Control.git",
        text: "GitHub",
        icon: "github",
      },
    ],
  },
  {
    name: "8-bit Nano Processor",
    image: "/project_images/NanoPro_img.png",
    description:
      " Developed a 4 bit nano processor capable of executing various instructions using VHDL and AMD Vivado™ Design Suite",
    links: [
      {
        url: "https://github.com/nsanjula/Ikmangaman.lk.git",
        text: "GitHub",
        icon: "github",
      },
    ],
  },
];

export const achievementData = [
  {
    title: "Fundamentals of Accelerated Data Science",
    description:
      "Execution of end-to-end GPU accelerated data science workflows",

    offered_by: "NVIDIA",
    url: "https://learn.nvidia.com/certificates?id=bcJd4Q9cS-6hVB9DQ4fqIw" /*Might not be there*/,
  },

  {
    title: "The Arduino Platform and C Programming",
    description:
      "Introduction to Arduino and implementation of serial communication protocols",
    offered_by: "Coursera, University of California, Irvine",
    url: "https://www.coursera.org/account/accomplishments/verify/3MBR32IJWJ0D?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" /*Might not be there*/,
  },
  {
    title: "Python (Basic)",
    offered_by: "HackerRank",
    url: "https://www.hackerrank.com/certificates/b3c6b346c617?trk=public_profile_see-credential" /*Might not be there*/,
  },
  {
    title: "Finalist - IDEALIZE 2025",
    description:
      "Island-wide Mobile App and Web Development competition organized by AIESEC in University of Moratuwa",
    img: "/achievement_images/IDEALIZE_2025.jpg",
  },
];
