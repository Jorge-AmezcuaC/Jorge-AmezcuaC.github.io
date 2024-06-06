import React, {useState, useEffect, useRef} from 'react'
import LinkButton from './LinkButtons'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useIsVisible} from './useVisible'

const Header = () => {
    const [theme, setTheme] = useState("#000")

    const showMail = () => {
        setTheme('#fff')
    }

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('welcome').style.animationPlayState = 'running'
        }
    }, [isVisible])

    return(
        <header>
        <div className='topHeader'>
            <div className='greeting'>
                <h3 className='hey'>Hey!</h3>
                <h3 className='hola'>Hola!</h3>
            </div>
            <div className='title'>
                <h3 className='letter1'>I'M</h3>
                <h3 className='letter2'>A</h3>
                <h3 className='letter3'>FULL-STACK</h3>
                <h3 className='letter4'>WEB</h3>
                <h3 className='letter5'>DEVELOPER</h3>
            </div>
            <div style={{width:"120px"}}></div>
        </div>
        <h1 className='welcome' id='welcome' ref={ref}>WELCOME TO MY PORTFOLIO</h1>
        <nav className='navbar'>
            <ul className='navMenu'>
                <div className='firstOptions'>
                    <li><a href='#About'>About Me</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                </div>
                <div className='moveMenu'>          
                    <li><LinkButton link="https://github.com/Jorge-AmezcuaC" text="Github" icon={<FaGithub color={theme} size={30}/>}/></li>
                    <li><LinkButton link="https://www.linkedin.com/in/jorge-alejandro-amezcua-carrillo/" text="Linkedin" icon={<FaLinkedin color={theme} size={30}/>}/></li>
                    <li><LinkButton text="SAY HEY!" icon={<MdEmail color={theme} size={30}/>} action={showMail}/></li>
                </div>
            </ul>
        </nav>
      </header>
    )
}

export default Header