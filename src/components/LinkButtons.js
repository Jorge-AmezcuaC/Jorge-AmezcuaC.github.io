import React, {useState} from "react";

const LinkButton = ({theme, link, icon, text, action, id}) => {
    const [isAnimated, setIsAnimated] = useState(false)

    const mouseIn = () => {
        setIsAnimated(true)
        document.getElementById(id).className = 'buttonText buttonTextIn'
        setTimeout(() => {
            setIsAnimated(false)
        }, 2100);
    }
    
    const mouseOut = () => {
        if(!isAnimated)
            document.getElementById(id).className = 'buttonText buttonTextOut'
        else
        setTimeout(() => {
            document.getElementById(id).className = 'buttonText buttonTextOut'
        }, 2000);
    }

    return(
        <a href={link} onMouseEnter={mouseIn} onMouseLeave={mouseOut} target="_blank" rel="noreferrer">
            <button className="buttons" onClick={action}>
                {icon}<div className="buttonText" id={id} style={{color: theme}}>{text}</div>
            </button>
        </a>
    )
}

export default LinkButton