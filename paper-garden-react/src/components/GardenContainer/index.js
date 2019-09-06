import React from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'


export default function GardenContainer({
    project,
    // project: {name, last_updated, id},
    dimensions, 
    plantPosition}){

    return(
        <div>
            {/* <GardenHeader projectId={id} projectName={name} lastSave={last_updated}/> */}
            <GardenGrid project={project} dimensions={dimensions} plantPosition={plantPosition}/>
        </div>
    )
}