import React from 'react'

export default function ProjectList({children, projects, showProject}){
    const projectMap = projects.map((project)={
        return (
            <li key={project.id}><a onClick={showProject}>{project.name}</a></li>
        )
    })
}