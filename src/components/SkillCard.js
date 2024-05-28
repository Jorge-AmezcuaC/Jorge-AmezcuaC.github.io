import React from "react";

const SkillCard = ({icon, name, content}) => {
    return(
        <div>
            <div>
                {icon}
                <p>{name}</p>
            </div>
            <ul>
                {content && content.map((item) => {
                    return(
                        <li>
                            {item.icon} {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillCard