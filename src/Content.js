// import images
import Hero_person from "./assets/images/Hero/person.png";

import JavaScript from "./assets/images/Skills/javascript.png";
import bash from "./assets/images/Skills/bash.png";
import firebase from "./assets/images/Skills/firebase.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import tailwindcss from "./assets/images/Skills/tailwindcss.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import pointing from "./assets/images/Projects/pointing.png";

// import icons from react-icons

import { HiCodeBracket,HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsLinkedin,BsTwitter } from "react-icons/bs";
import { HiOutlineHome,HiOutlineMail } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { IoColorPaletteOutline,IoLogoTux } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";


export const content = {
    nav: [
        {
            id: "home",
            link: "#home",
            icon: HiOutlineHome,
        },
        {
            id: "skills",
            link: "#skills",
            icon: BiUser,
        },
        {
            id: "services",
            link: "#services",
            icon: HiOutlineWrenchScrewdriver,
        },
        {
            id: "projects",
            link: "#projects",
            icon: CgWebsite,
        },
        {
            id: "contact",
            link: "#contact",
            icon: HiOutlineMail,
        },
    ],
    hero: {
        title: "Web Developer",
        firstName: "CELİL",
        LastName: "ALTIPARMAK",
        btnText: "My Resume",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: '"A new web developer with a desire to create innovative and engaging digital experiences that drive results"',
            },
            {
                count: "4+",
                text: "Projects Worked in my career",
            },
        ],
    },
    skills: {
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "JavaScript",
                logo: JavaScript,
                text: "I am proficient in JavaScript, with experience in both front-end and back-end development. I have a solid understanding of web development concepts and frameworks such as React, Angular and Node.js. My expertise in JavaScript allows me to deliver efficient and high-quality web applications that are optimized for both desktop and mobile devices."
            },
            {
                name: "Node.js",
                logo: nodejs,
                text: "I have a strong understanding of Node.js and its various modules and libraries. I have experience building web applications and APIs using Node.js and have a good understanding of JavaScript. I am always eager to learn new skills and explore new technologies in the field."

            },
            {
                name: "Firebase",
                logo: firebase,
                text: "I am experienced in Firebase, including authentication, real-time database and cloud storage. I am able to provide seamless user experience. Always eager to learn new Firebase features, I am confident in my ability to develop effective solutions."

            },
            {
                name: "React.js",
                logo: reactjs,
                text: "I am experienced in React.js, skilled in using libraries and tools like Redux and Context API. I am familiar with latest features and best practices in React.js and stay updated on new developments. Confident in my ability to develop efficient and user-friendly React.js applications including this portfolio application."

            },
            {
                name: "Bash",
                logo: bash,
                text: "I have a basic understanding of Bash scripting language and have some experience using it for simple tasks. I am familiar with the basic syntax and commands, and I am interested in learning more about this language and its capabilities."

            },
            {
                name: "TailwindCSS",
                logo: tailwindcss,
                text: "I am familiar with TailwindCSS, a popular utility-first CSS framework that allows for rapid prototyping and easy customization of designs. With my knowledge of TailwindCSS, I can create visually appealing and responsive designs quickly and efficiently. I am excited to use my knowledge of TailwindCSS to improve the user experience and enhance the overall look and feel of web projects."

            },
        ],
        icon: MdArrowForward,
    },
    services: {
        subtitle: "WHAT I OFFER",
        service_content: [
            {
                title: "Web Development",
                para: "As a React developer, I can deliver high-quality, robust and efficient web applications. My expertise in React and JavaScript, along with my ability to quickly learn and adapt to new technologies, enables me to deliver solutions that not only meet but exceed customer expectations.",
                icon: HiCodeBracket,
            },
            {
                title: "UI/UX Designing",
                para: "As a UI/UX designer, I specialize in creating user-friendly and visually appealing designs using the latest technologies such as Tailwind and CSS. I understand the importance of usability and how it impacts the success of a product or service.",
                icon: IoColorPaletteOutline,
            },
            {
                title: "DevOps",
                para: "As a hobbyist in the DevOps field, I know Bash scripting language and have experience deploying personal applications on Raspberry Pi. I am passionate about automating tasks and improving the efficiency of the development and deployment process.",
                icon: IoLogoTux,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: pointing,
        project_content: [
            {
                title: "Circular Music Player",
                image: project1,
                explanation: "In this project it was challenging for me to understand the concept of interactive progress bar. This project helped me understand the importance of good algorithms.  ",
                link: "https://celil6p.github.io/audio-player/ "
            },
            {
                title: "Relaxing White Noises",
                image: project2,
                explanation: 'The things I learned from the "Circular Music Project" helped me to write this project from ground-up with my programmer friend Eren Eroğlu. We put a lot of effort in this project at that time',
                link: "https://eren-celil.github.io/relaxing-white-noises/"
            },
            {
                title: "Rock Paper Scissors",
                image: project3,
                explanation: "After I completely learned html/CSS/JavaScript basics properly this was my first project. The code might be complete scramble but I was so proud when I complete this without looking any guide",
                link: "https://celil6p.github.io/rps/"
            },
        ],
    },

    Contact: {
        title: "Contect Me",
        social_media: [
            {
                text: "mcelil.altiparmak@gmail.com",
                icon: GrMail,
                link: "mailto:mcelil.altiparmak@gmail.com",
            },
            {
                text: "Github",
                icon: AiOutlineGithub,
                link: "https://github.com/Celil6p",
            },
            {
                text: "Telegram",
                icon: FaTelegramPlane,
                link: "https://t.me/CelilAltiparmak",
            },
            {
                text: "LinkedIn",
                icon: BsLinkedin,
                link: "https://www.linkedin.com/in/muhammed-celil-altiparmak-b78097159/",
            },
            {
                text: "Twitter",
                icon: BsTwitter,
                link: "https://twitter.com/ALTPRMK_Celil",
            },
        ],
    },
};
