import React from 'react'

export default function ProjectList({children, projects, showProject}){
    console.log(projects, 'projects in ProjectList')
    const projectMap = projects.map((project)=>{
        return (
            <li key={project.id}><a onClick={showProject.bind(null, project.id)}>{project.name}</a></li>
        )
    })
    return(
        <ul>
            {projectMap}
        </ul>
    )
}