import React from 'react'

export default function GardenGrid({dimensions}){
    return(
        <div>
            Length: {dimensions.length}
            Width: {dimensions.width}
        </div>
    )
}