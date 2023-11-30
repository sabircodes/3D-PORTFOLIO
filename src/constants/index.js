import { leetcode,gfg } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    tailwindcss,
    threads,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
   
];

export const experiences = [
    {
        title: "Competitive Programing",
        company_name: "Leetcode",
        icon: leetcode,
        iconBg: "#accbe1",
        points: [
           "Currently I hold a global rank of 92k",
           "460+ Problems Solved",
           "Contest rating of 1500+"
        ],
    },
    {
        title: "Competitive Programing",
        company_name: "GfG",
        icon: gfg,
        iconBg: "#fbc3bc",
        points: [
            "250+ Problems solved",
            "710+ points earned",
            "university rank 59"
        ],
    },
  
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sabircodes',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sabir-akhtar-444a33261/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Blog-app',
        description: 'Created a Full-stack blog app .if you Want to show case your creativity, this is just the app for you ',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Crypto Visor',
        description: 'Created a simple platform that can helps you with all your need of Crypto wether it is price or news related to it',
        link: 'https://github.com/sabircodes/Cryptovisor',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Youtube clone',
        description: 'Created a replica of You tube app for finding and enjoying videos and enjoy your time on the internet ',
        link: 'https://github.com/sabircodes/YTclone',
    }
   
];