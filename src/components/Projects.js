import React, {useEffect, useRef} from "react";
import { useIsVisible } from "./useVisible";

const Projects = () => {
    const projects = [
        {photo: '', name: 'Proyecto 1', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 2', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 3', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 4', url: 'https://github.com/Jorge-AmezcuaC'},
    ]

    const ref = useRef()
    const isVisible = useIsVisible(ref)

    useEffect(() => {
        if(isVisible){
            document.getElementById('projectstitle').style.animationPlayState = 'running'
            document.getElementById('comment').style.animationPlayState = 'running'
        }
    }, [isVisible])

    return(
        <div id="Projects" ref={ref}>
            <h3 className="subTitle" id="projectstitle">Projects</h3>
            <p id="comment">{"For now I only have School projects or projects for fun, I'm sorry :("}</p>
            <div className="projectList">
                {projects.map((item) => {
                    return(
                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects