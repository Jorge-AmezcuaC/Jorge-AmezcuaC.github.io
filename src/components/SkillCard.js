import React, {useEffect, useRef} from "react";
import { useIsVisible } from "./useVisible";

const SkillCard = ({icon, name, content}) => {

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById(name).style.animationPlayState = 'running'
        }
    }, [isVisible])

    return(
        <div className="skillCard" id={name} ref={ref}>
            <div className="cardHeader">
                {icon}
                <p>{name}</p>
            </div>
            <ul className="cardBody">
                {content && content.map((item) => {
                    return(
                        <li key={item.name}>
                            {item.icon} {item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillCard