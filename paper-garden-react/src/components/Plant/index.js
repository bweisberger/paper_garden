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
                borderRadius: '50%',
                opacity: isDragging? 0.3 : 1,
                cursor: 'move',
                position: 'relative',
                zIndex: 2,
                background: 'lightgreen',
                border: '2px solid darkgreen',
                height: '4.5vw',
                width : '4.5vw'
            }}
        >
        </div>
    )
}

export default Plant;