import React, {useState} from 'react'
import LinkButton from './LinkButtons'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
    const [theme, setTheme] = useState("#000")

    const showMail = () => {
        
    }

    return(
        <header>
        <div>
            <div>
                <h3>Hey!</h3>
                <h3>Hola!</h3>
            </div>
            <div>
                <p>I'M</p>
                <p>A</p>
                <p>FULL-STACK</p>
                <p>WEB</p>
                <p>DEVELOPER</p>
            </div>
        </div>
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <nav>
            <ul>
                <div>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Project</li>
                </div>
                <div>          
                    <li><LinkButton link="https://github.com/Jorge-AmezcuaC" text="Github" icon={<FaGithub color={theme}/>}/></li>
                    <li><LinkButton link="https://www.linkedin.com/in/jorge-alejandro-amezcua-carrillo/" text="Linkedin" icon={<FaLinkedin color={theme}/>}/></li>
                    <li><LinkButton text="SAY HEY!" icon={<MdEmail color={theme}/>} action={showMail}/></li>
                </div>
            </ul>
        </nav>
      </header>
    )
}

export default Header