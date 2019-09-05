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
        <div
            ref={drag}
            style={{
                opacity: isDragging? 0.3 : 1,
                cursor: 'move',
            }}
        >
            <svg height='100' width='100'>
                <circle 
                    cx='50' 
                    cy='50' 
                    r='40' 
                    stroke='darkgreen' 
                    strokeWidth='3' 
                    fill='lightgreen'
                />
            </svg>
        </div>
    )
}

export default Plant;