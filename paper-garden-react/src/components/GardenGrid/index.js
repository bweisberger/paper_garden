import React from 'react'

//l = 4, w = 3
// function flipVariables(x, y){
//     const temp = x
//     x = y
//     y = temp
//     return [x, y]
// }

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
        <div className='garden-box' style={{ background: 'tan', border: '2px solid brown', width: `${gardenWidth}vh`, height: `${gardenHeight}vh`}}>

                <div>{width} {widthLabel}</div>
                <div>{height} {heightLabel}</div>
        </div>

    )
}

export default function GardenGrid({dimensions : {width, height}}){
    const garden = renderGarden(width, height)

    return(
        <div>
            {garden}
        </div>
               
    )
}