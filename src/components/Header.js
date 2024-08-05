import React, {useState, useEffect, useRef} from 'react'
import LinkButton from './LinkButtons'
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useIsVisible} from './useVisible'
import '../circles.css'
import Circle from './Circle';
import EmailShow from './EmailShow';

const Header = () => {
    const [theme, setTheme] = useState("#000")
    const [showNav, setShowNav] = useState(false)
    const [showEmail, setShowEmail] = useState(false)

    const showMail = () => {
        setShowEmail(true)
    }

    const hiddeMail = () => {
        setShowEmail(false)
    }

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    const refNav = useRef()
    const naVisible = useIsVisible(refNav)
    const refNavB = useRef()
    const naVisibleB = useIsVisible(refNavB)


    useEffect(() => {
        if(isVisible)
            document.getElementById('welcome').style.animationPlayState = 'running'
        if(!naVisible && !naVisibleB){
            setShowNav(true)
            setTheme('#fff')
        }else{
            setShowNav(false)
            setTheme('#000')
        }
    }, [isVisible, naVisible, naVisibleB])

    return(
        <header>
        <div className='topHeader' ref={refNavB}>
            <div className='greeting'>
                <h3 className='hey'>HEY!</h3>
                <h3 className='hola'>Hola!</h3>
            </div>
            <div className='title'>
                <h3 className='letter1'>I'M</h3>
                <h3 className='letter2'>A</h3>
                <h3 className='letter3'>FULL-STACK</h3>
                <h3 className='letter4'>WEB</h3>
                <h3 className='letter5'>DEVELOPER</h3>
            </div>
            <div style={{width: '120px'}}></div>
            <Circle clasStyle='circle1'/>
            <Circle clasStyle='circle2'/>
            <Circle clasStyle='circle3'/>
            <Circle clasStyle='circle4'/>
        </div>
        <h1 className='welcome' id='welcome' ref={ref}>WELCOME TO MY PORTFOLIO</h1>
        <nav className='navbar' ref={refNav}>
            <ul className='navMenu'>
                <div className='firstOptions'>
                    <li><a href='#About'>About Me</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                </div>
                <div className='moveMenu'>          
                    <li><LinkButton id={'b1'} link="https://github.com/Jorge-AmezcuaC" theme={theme} text="Github" icon={<FaGithub color={theme} size={30}/>}/></li>
                    <li><LinkButton id={'b2'} link="https://www.linkedin.com/in/jorge-alejandro-amezcua-carrillo/" theme={theme} text="Linkedin" icon={<FaLinkedin color={theme} size={30}/>}/></li>
                    <li><LinkButton id={'b3'} theme={theme} text="SAY HEY!" icon={<MdEmail color={theme} size={30}/>} action={showMail}/></li>
                </div>
            </ul>
        </nav>
        
        <nav className='fixNav' style={{display: `${!showNav ? 'none': ''}`}}>
            <ul className='navMenu'>
                <div className='firstOptions'>
                    <li><a href='#About'>About Me</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                </div>
                <div className='moveMenu'> 
                    <li><LinkButton id={'b11'} link="https://github.com/Jorge-AmezcuaC" theme={theme} text="Github" icon={<FaGithub color={theme} size={30}/>}/></li>
                    <li><LinkButton id={'b22'} link="https://www.linkedin.com/in/jorge-alejandro-amezcua-carrillo/" theme={theme} text="Linkedin" icon={<FaLinkedin color={theme} size={30}/>}/></li>
                    <li><LinkButton id={'b33'} theme={theme} text="SAY HEY!" icon={<MdEmail color={theme} size={30}/>} action={showMail}/></li>
                </div>
            </ul>
        </nav>
        {showEmail && <EmailShow action={hiddeMail}/>}
      </header>
    )
}

export default Header