import React, {useEffect, useRef} from "react";
import { useIsVisible } from "./useVisible";

const AboutMe = () => {
    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('aboutme').style.animationPlayState = 'running'
        }
    }, [isVisible])


    return(
        <div id="About" ref={ref}>
            <h3 className="subTitle" id="aboutme">About Me</h3>
            <p>Hello, I'm Jorge and i'm currenly studying computer engineering, 
                My main focus is web and mobile app development, 
                I love challenges and learning new things.</p>
        </div>
    )
}

export default AboutMe