import React from 'react'
import ShowProject from '../ShowProject'
import GardenGrid from '../GardenGrid'

let plantPosition = [0, 0]
let observer = null

export function observe(o) {
    if(observer) {
        throw new Error('Multiple obervers not yet implemented')
    }
    observer = o
    emitChange()
}

export function movePlant(toX, toY){
    plantPosition = [toX, toY]
    emitChange()
}

function emitChange() {
    observer(plantPosition)
}

export default function GardenContainer({children, project, dimensions, plantPosition}){

    return(
        <div>
            {project ? <ShowProject project={project}/> : <GardenGrid dimensions={dimensions} plantPosition={plantPosition}/>}
        </div>
    )
}