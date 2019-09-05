import React from 'react'
import Square from '../Square'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { moveKnight } from '../GardenFunctions'
import SmartSquare from '../SmartSquare'
import Plant from '../Plant'


function renderSquare(i, plantPosition){
    const x = i % 15
    const y = Math.floor(i/15)
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

export default function GardenGrid({dimensions, plantPosition}){
    
    const squares = []
    for (let i = 0; i < 1000; i++){
        squares.push(renderSquare(i, plantPosition))
    }

    return(
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                {squares}
                Length: {dimensions.length}
                Width: {dimensions.width}
            </div>
        </DndProvider>
        
    )
}