// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";

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
        btnText: "Hire Me",
        image: Hero_person,
        hero_content: [
            {
                count: "1+",
                text: "Years of Experinse in Web development",
            },
            {
                count: "5+",
                text: "Projects Worked in my career",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "Figma",
                para: "Lorem ipsum text  dummy",
                logo: figma,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."
            },
            {
                name: "Node js",
                para: "Lorem ipsum text  dummy",
                logo: nodejs,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."

            },
            {
                name: "Adobe Photoshop",
                para: "Lorem ipsum text  dummy",
                logo: ps,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."

            },
            {
                name: "React js",
                para: "Lorem ipsum text  dummy",
                logo: reactjs,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."

            },
            {
                name: "Sketch",
                para: "Lorem ipsum text  dummy",
                logo: sketch,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."

            },
            {
                name: "Python",
                para: "Lorem ipsum text  dummy",
                logo: python,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, ame. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est beatae quos rem."

            },
        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        service_content: [
            {
                title: "Web Development",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                icon: HiCodeBracket,
            },
            {
                title: "ui / ux DESIGNING",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                icon: IoColorPaletteOutline,
            },
            {
                title: "PhotoShop Editing",
                para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
                icon: IoLogoTux,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: Hero_person,
        project_content: [
            {
                title: "Gym Website",
                image: project1,
            },
            {
                title: "Social Media web",
                image: project2,
            },
            {
                title: "Creative Website",
                image: project3,
            },
        ],
    },

    Contact: {
        title: "Contect Me",
        subtitle: "GET IN TOUCH",
        social_media: [
            {
                text: "mcelil.altiparmak@gmail.com",
                icon: GrMail,
                link: "mailto:mcelil.altiparmak@gmail.com",
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
