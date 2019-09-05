import React from 'react'

export default function Square({children}){
    return (
        <div
            style = {{
                height: '1vw',
                width: '1vw',
                border: '1px solid rgba(50, 50, 50, 0.2)',
                margin: '0',
            }}
        >
            {children}
        </div>
    )
}