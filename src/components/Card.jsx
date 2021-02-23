import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'



const Card = (props) => {




    if (props.scrollable)
        return (
            <OverlayScrollbarsComponent 
                className={`h-100 ${props.col} ${props.className} `} style={{ maxHeight: 'fit-content', maxWidth: '655px' }}
            >
                <div className={`customCard ${props.className}`} >
                    {props.children}
                </div>
            </OverlayScrollbarsComponent >
        )

    else if (props.scroll)
        return (
            <OverlayScrollbarsComponent className={`${props.className} text-light`} style={{ backgroundColor: 'rgba(153, 35, 51, 0.7)', padding: '1.5em', height: props.height ?? 'calc(50%)' }}>
                {props.children}
            </OverlayScrollbarsComponent>
        )
    else
        return (
            <div className={`customCard ${props.className}`} style={{ maxWidth: props.width, maxHeight: props.maxHeight, minHeight: props.minHeight }}>
                {props.children}
            </div>
        )
}



export default Card
