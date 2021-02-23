import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Store, type as t } from '../context/store'

const UnderlayText = (props) => {
    const { dispatch } = useContext(Store)
    function openModal(id) {
        dispatch({ type: t.MODAL_OPEN })
        props.onClick()

    }

    return (

        <div className={`underlayText ${props.className}`} onClick={() => openModal(props.id)} >
            {props.children ?? <h3>{props.text}</h3>}
        </div>
    )
}

UnderlayText.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default UnderlayText

