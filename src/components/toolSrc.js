import { SiPostgresql, SiMariadbfoundation, SiDjango, SiPython, SiNextdotjs, SiVercel } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { DiBootstrap, DiReact } from "react-icons/di";
import { FaGitAlt, FaLinux, FaAws, FaDocker } from "react-icons/fa";

const toolsArr = [
    [
        {name: "Postgresql", icon: <SiPostgresql size={30}/>},
        {name: "Mariadb", icon: <SiMariadbfoundation size={30}/>},
        {name: "Python", icon: <SiPython size={30}/>},
        {name: "Django Rest", icon: <SiDjango size={30}/>},
    ],
    [
        {name: "HTML", icon: <IoLogoHtml5 size={30}/>},
        {name: "CSS", icon: <IoLogoCss3 size={30}/>},
        {name: "Bootstrap", icon: <DiBootstrap size={30}/>},
        {name: "Javascript", icon: <IoLogoJavascript size={30}/>},
        {name: "Reac Js", icon: <DiReact size={30}/>},
        {name: "Reac Native", icon: <DiReact size={30}/>},
        {name: "Next Js", icon: <SiNextdotjs size={30}/>},
    ],
    [
        {name: "GIT", icon: <FaGitAlt size={30}/>},
        {name: "Linux", icon: <FaLinux size={30}/>},
        {name: "AWS", icon: <FaAws size={30}/>},
        {name: "Vercel", icon: <SiVercel size={30}/>},
        {name: "Docker", icon: <FaDocker size={30}/>},
    ],
]

export default toolsArr