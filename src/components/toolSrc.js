import { SiPostgresql, SiMariadbfoundation, SiDjango, SiPython, SiNextdotjs, SiVercel } from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { DiBootstrap, DiReact } from "react-icons/di";
import { FaGitAlt, FaLinux, FaAws, FaDocker } from "react-icons/fa";

const toolsArr = [
    [
        {name: "Postgresql", icon: <SiPostgresql/>},
        {name: "Mariadb", icon: <SiMariadbfoundation/>},
        {name: "Python", icon: <SiPython/>},
        {name: "Django Rest", icon: <SiDjango/>},
    ],
    [
        {name: "HTML", icon: <IoLogoHtml5/>},
        {name: "CSS", icon: <IoLogoCss3/>},
        {name: "Bootstrap", icon: <DiBootstrap/>},
        {name: "Javascript", icon: <IoLogoJavascript/>},
        {name: "Reac Js", icon: <DiReact/>},
        {name: "Reac Native", icon: <DiReact/>},
        {name: "Next Js", icon: <SiNextdotjs/>},
    ],
    [
        {name: "GIT", icon: <FaGitAlt/>},
        {name: "Linux", icon: <FaLinux/>},
        {name: "AWS", icon: <FaAws/>},
        {name: "Vercel", icon: <SiVercel/>},
        {name: "Docker", icon: <FaDocker/>},
    ],
]

export default toolsArr