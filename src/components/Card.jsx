import React from 'react'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'




const Card = (props) => {

    if (props.scrollable)
        return (
            <OverlayScrollbarsComponent
                className={`h-100 ${props.col} ${props.className} `} style={{ maxHeight: 'calc(100vh - 20em)', maxWidth: '655px' }}
            >
                <div className={`customCard ${props.className}`} >
                    {props.children}
                </div>
            </OverlayScrollbarsComponent >
        )

    else if (props.scroll)
        return (
            <OverlayScrollbarsComponent className={`${props.className} text-light`} style={{backgroundColor:'rgba(0, 0, 0, 0.65)', padding:'1.5em', height:'calc(100vh - 20em)'}}>
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
