import React, {useEffect, useRef} from "react";
import { useIsVisible } from "./useVisible";
import backImg from '../img/backend.png'
import frontImg from '../img/frontend.png'
import concepImg from '../img/conceptuales.png'
import mobileImg from '../img/mobile.png'

const Projects = () => {
    const projects = [
        {photo: frontImg, name: 'Frontend Projects', altImg: 'example of frontend projects', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: backImg, name: 'Backend & admin panels Projects', altImg: 'example of backend projects', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: mobileImg, name: 'Mobile Projects', altImg: 'example of mobile apps projects', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: concepImg, name: 'Conceptual Projects', altImg: 'example of conceptual design projects', url: 'https://github.com/Jorge-AmezcuaC'},
    ]

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('projectstitle').style.animationPlayState = 'running'
            // document.getElementById('comment').style.animationPlayState = 'running'
        }
    }, [isVisible])

    return(
        <div id="Projects" ref={ref}>
            <h3 className="subTitle" id="projectstitle">Projects</h3>
            {/* <p id="comment">{"Im still coding this part sorry, last update: 23:00 2/aug/2024"}</p> */}
            <div className="projectList">
                {projects.map((item) => {
                    return(
                        <div key={item.name} className="imgCont">
                            <img  src={item.photo} alt={item.altImg} className="imgProy"/>
                            <div className="descPro">{item.name}</div>
                        </div>
                    )
                })}
            </div>
            <button className="redirectButton" onClick={() => alert("I'm still codign this part sorry, last update: 23:00 4/aug/2024")}>See More</button>
        </div>
    )
}

export default Projects