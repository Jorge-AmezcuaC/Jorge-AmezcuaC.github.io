import React from "react";
import SkillCard from "./SkillCard";
import { FaCode, FaTerminal } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import toolsArr from "./toolSrc";

const Skills = () => {
    return(
        <div>
            <h3>Skills</h3>
            <div>
                <SkillCard icon={<FaCode/>} name="Backend" content={toolsArr[0]}/>
                <SkillCard icon={<AiOutlineCloudServer/>} name="Frontend" content={toolsArr[1]}/>
                <SkillCard icon={<FaTerminal/>} name="Tools" content={toolsArr[2]}/>
            </div>
        </div>
    )
}

export default Skills