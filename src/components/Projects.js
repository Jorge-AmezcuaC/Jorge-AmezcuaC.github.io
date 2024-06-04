import React, {useState} from "react";

const Projects = () => {
    const [projects, setProjects] = useState([
        {photo: '', name: 'Proyecto 1', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 2', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 3', url: 'https://github.com/Jorge-AmezcuaC'},
        {photo: '', name: 'Proyecto 4', url: 'https://github.com/Jorge-AmezcuaC'},
    ])
    return(
        <div id="Projects">
            <h3 className="subTitle">Projects</h3>
            <p>{"For now I only have School projects or projects for fun, I'm sorry :("}</p>
            <div className="projectList">
                {projects.map((item) => {
                    return(
                        <div>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects