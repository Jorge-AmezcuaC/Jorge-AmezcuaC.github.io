import React, {useState} from "react";

const LinkButton = ({link, icon, text, action}) => {
    const [isAnimated, setIsAnimated] = useState(false)

    const mouseIn = () => {
        setIsAnimated(true)
        document.getElementById(text).className = 'buttonText buttonTextIn'
        setTimeout(() => {
            setIsAnimated(false)
        }, 2100);
    }
    
    const mouseOut = () => {
        if(!isAnimated)
            document.getElementById(text).className = 'buttonText buttonTextOut'
        else
        setTimeout(() => {
            document.getElementById(text).className = 'buttonText buttonTextOut'
        }, 2000);
    }

    return(
        <a href={link} onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
            <button className="buttons" onClick={action}>
                {icon}<div className="buttonText" id={text}>{text}</div>
            </button>
        </a>
    )
}

export default LinkButton