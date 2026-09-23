import web1 from "../src/images/Lemus-screenshot.png";
import web2 from "../src/images/Portfolio_screenshot.png";
import web3 from "../src/images/Drinkally_screenshot.png";
import web4 from "../src/images/Bank.jpg";


const projectData = [{
    img: web1,
    link: "https://lemusandson.com/",
    name: "Lemus & Son Landing Page",
    stack: [ "Figma", "React", "Vite", "Tailwind CSS"],
    githubLink: "https://github.com/xsaul/lemusandson"
},
{
    img: web2,
    link: "https://xsaul.github.io/Portfolio/",
    name: "Saul's Portfolio",
    stack: ["React", "Vite", "Tailwind CSS", "i18next"],
    githubLink: "https://github.com/xsaul/Portfolio"
},
{
    img: web3,
    link: "https://xsaul.github.io/drinkally/",
    name: "Drinkally",
    stack: ["React", "React Router", "Vite", "Tailwind CSS"],
    githubLink: "https://github.com/xsaul/drinkally"
},
{
    img: web4,
    link: "https://xsaul.github.io/Bank-app/",
    name: "HooBank"
},
]

export default projectData;