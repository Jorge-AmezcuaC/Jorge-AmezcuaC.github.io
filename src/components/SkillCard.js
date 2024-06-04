import React from "react";

const SkillCard = ({icon, name, content}) => {
    return(
        <div className="skillCard">
            <div className="cardHeader">
                {icon}
                <p>{name}</p>
            </div>
            <ul className="cardBody">
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