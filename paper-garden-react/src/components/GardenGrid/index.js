import React from 'react'
import Square from '../Square'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { movePlant } from '../GardenFunctions'
import SmartSquare from '../SmartSquare'
import Plant from '../Plant'


function renderSquare(i, plantPosition){
    const x = i % 15
    const y = Math.floor(i/15)
    // const plantMap = [plants.map((plant)=>{
    //     return(
            
    //     )
    // ]})
    return (
        <div key={i} style={{width: '5vw', height: '5vw', zIndex: -1}}>
            <SmartSquare x={x} y={y}>
                {renderPlant(x, y, plantPosition)}
            </SmartSquare>
        </div>
    )
}

function renderPlant(x, y, [plantX, plantY]){
    if(x === plantX && y === plantY){
        return <Plant/>
    }
}

export default function GardenGrid({
    dimensions: {length, width},
    plantPosition}){
    console.log(plantPosition, "<--plantPosition in GardenGrid")
    const squares = []
    for (let i = 0; i < 1000; i++){
        squares.push(renderSquare(i, plantPosition))
    }

    return(
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    zIndex: -1,
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
                Length: {length}
                Width: {width}
            </div>
        </DndProvider>
        
    )
}