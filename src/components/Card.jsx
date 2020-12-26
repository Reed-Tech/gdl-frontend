import React from 'react'




const Card = (props) => {
    return (
        <div className={`customCard ${props.className}`} style={{ maxWidth: props.width, maxHeight: props.maxHeight }}>
            {props.children}
        </div>
    )
}

export default Card
