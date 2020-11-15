import React from 'react'

const CardImage = (props) => {
    return (
        <div className={`cardImage ${props.className}`} style={{background:`url(${props.image})`}}>
            {props.children}
        </div>
    )
}

export default CardImage

