import React from "react";
import SkillCard from "./SkillCard";
import { FaCode, FaTerminal } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import toolsArr from "./toolSrc";

const Skills = () => {
    return(
        <div id="Skills">
            <h3 className="subTitle">Skills</h3>
            <div className="skillsList">
                <SkillCard icon={<AiOutlineCloudServer size={50}/>} name="Backend" content={toolsArr[0]}/>
                <SkillCard icon={<FaCode size={50}/>} name="Frontend" content={toolsArr[1]}/>
                <SkillCard icon={<FaTerminal size={50}/>} name="Tools" content={toolsArr[2]}/>
            </div>
        </div>
    )
}

export default Skills