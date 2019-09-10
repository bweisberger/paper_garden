import React from 'react'
import Square from '../Square'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import { movePlant } from '../GardenFunctions'

function SmartSquare({size, x, y, children}) {
    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.PLANT,
        drop: () => movePlant(x, y),
        collect: mon => ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop(),
        }),
    })

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                // border: '1px solid thin tan'
            }}
        >
            <Square size={size} >{children}</Square>
            {isOver && (
                <div
                    style={{
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                />
            )}
        </div>
    )
}

export default SmartSquare