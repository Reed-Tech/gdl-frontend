import React from 'react'

const Card = (props) => {
    return (
        <div className={`customCard ${props.className}`} style={{ width: props.width }}>
            {props.children}
        </div>
    )
}

export default Card
