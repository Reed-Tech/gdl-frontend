import React from 'react'

const Card = (props) => {
    return (
        <div className={`customCard ${props.className}`} style={{ minWidth: props.width }}>
            {props.children}
        </div>
    )
}

export default Card
