import React from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'


export default function GardenContainer({children, project, dimensions, plantPosition}){

    return(
        <div>
            {project ? <ShowProject project={project}/> : <GardenGrid dimensions={dimensions} plantPosition={plantPosition}/>}
        </div>
    )
}