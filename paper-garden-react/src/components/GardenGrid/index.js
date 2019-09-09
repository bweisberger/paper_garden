import React from 'react'
import Square from '../Square'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { movePlant } from '../GardenFunctions'
import SmartSquare from '../SmartSquare'
import Plant from '../Plant'

//l = 4, w = 3
function flipVariables(x, y){
    const temp = x
    x = y
    y = temp
    return [x, y]
}

function renderGarden(width, height){
    // h  ______________________   
    // e |                      |
    // i |                      |
    // g |                      |    
    // h |                      |
    // t |______________________|
                //width
    
    let widthLabel = 'feet wide'
    let heightLabel = 'feet high'

    let tempLabel = heightLabel
    let tempHeight = height
    if(height > width){
        //flip values and labels if height is > width
        height = width
        width = tempHeight

        heightLabel = widthLabel
        widthLabel = tempLabel
    } 
    let gardenWidth = (width/height)*70
    let gardenHeight = 70

        
    return ( 
        <div className='garden-box' style={{ border: '2px solid black', width: `${gardenWidth}vh`, height: `${gardenHeight}vh`}}>
                <div>{width} {widthLabel}</div>
                <div>{height} {heightLabel}</div>
        </div>

    )
}

// function renderPlant(size, x, y, [plantX, plantY]){
//     if(x === plantX && y === plantY){
//         return <Plant size={size}/>
//     }
// }

export default function GardenGrid({dimensions : {width, height}}){
    
    // console.log(plantPosition, "<--plantPosition in GardenGrid")
    // const squares = [];
    // const area = length*width;
    // for (let i = 0; i < area; i++){
    const garden = renderGarden(width, height)
    // }

    return(
        <div>
            {garden}
        </div>
        // <DndProvider backend={HTML5Backend}>
        //     <div
        //         style={{
        //             zIndex: -1,
        //             position: 'relative',
        //             width: '60vw',
        //             height: '100%',
        //             display: 'flex',
        //             flexWrap: 'wrap'
        //         }}
        //     >
        //         {squares}
        //         Length: {length}
        //         Width: {width}
        //     </div>
        // </DndProvider>
        
    )
}