import React from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'

export default function GardenContainer({children, project, dimensions}){
    
    return(
        <div>
            {project ? <ShowProject project={project}/> : <GardenGrid dimensions={dimensions}/>}
        </div>
    )
}