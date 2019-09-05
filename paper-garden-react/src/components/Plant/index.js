import React from 'react'
import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'

function Plant(){
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.PLANT},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <svg
            height= '4.5vw'
            width = '4.5vw'
            ref={drag}
            style={{
                opacity: isDragging? 0.3 : 1,
                cursor: 'move',
            }}
        >
                <circle 
                    cx='2.25vw' 
                    cy='2.25vw' 
                    r='2vw' 
                    stroke='darkgreen' 
                    strokeWidth='3' 
                    fill='lightgreen'
                />
        </svg>
    )
}

export default Plant;