import React, { useRef, useEffect } from "react";
import SkillCard from "./SkillCard";
import { FaCode, FaTerminal } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import toolsArr from "./toolSrc";
import { useIsVisible } from "./useVisible";

const Skills = () => {
    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('skillsTitle').style.animationPlayState = 'running'
        }
    }, [isVisible])

    return(
        <div id="Skills" ref={ref}>
            <h3 className="subTitle" id="skillsTitle">Skills</h3>
            <div className="skillsList">
                <SkillCard icon={<AiOutlineCloudServer size={50}/>} name="Backend" content={toolsArr[0]}/>
                <SkillCard icon={<FaCode size={50}/>} name="Frontend" content={toolsArr[1]}/>
                <SkillCard icon={<FaTerminal size={50}/>} name="Tools" content={toolsArr[2]}/>
            </div>
        </div>
    )
}

export default Skills