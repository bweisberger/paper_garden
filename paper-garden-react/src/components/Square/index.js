import React from 'react'

export default function Square({size, children}){
    return (
        <div
            style = {{
                width: `${size/2}vw`,
                height: `${size/2}vw`,
                border: '1px solid rgba(50, 50, 50, 0.2)',
                margin: '0',
            }}
        >
            {children}
        </div>
    )
}