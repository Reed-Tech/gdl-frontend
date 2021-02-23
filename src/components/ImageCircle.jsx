import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Store, type as t } from '../context/store'

const ImageCircle = (props) => {
    const { dispatch } = useContext(Store)
    function openModal(id) {
        dispatch({ type: t.MODAL_OPEN })
        props.onClick()

    }

    return (

        <div className={`imageCircle ${props.className}`} style={{ transform: `scale(${props.scale})`, backgroundImage: `url(${props.image})`, minWidth: `${props.width}` }} onClick={() => openModal(props.id)} >

        </div>
    )
}

ImageCircle.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default ImageCircle

