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
            <p id="comment">{"Im still coding this part sorry, last update: 23:00 2/aug/2024"}</p>
            <div className="projectList">
                {projects.map((item) => {
                    return(
                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
            <button className="redirectButton">Conocer Mas</button>
        </div>
    )
}

export default Projects