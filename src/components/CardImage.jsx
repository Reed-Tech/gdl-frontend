import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Store, type as t } from '../context/store'

const CardImage = (props) => {
    const { dispatch } = useContext(Store)

    function openModal(id) {
        dispatch({ type: t.MODAL_OPEN })
    }

    return (
        // <div className={`cardImage ${props.className}`} style={{background:`url(${props.image})`}} {...props}  >
        //     {props.children}
        // </div>
        <div className={`cardImage ${props.className}`} style={{ transform: `scale(${props.scale})`, backgroundImage: `url(${props.image})`, minWidth: `${props.width}` }} onClick={() => openModal(props.id)} >
            {props.children ?? <h3>{props.text}</h3>}

        </div>
    )
}

CardImage.propTypes = {
    className: PropTypes.string,
}

export default CardImage

