import React, { useState, useEffect } from 'react';
import { Modal } from "react-bootstrap";

function PopUp
() {
    
        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);

        useEffect(() => {
            const popupModalValue = localStorage.getItem("popupModal")
            if (!popupModalValue) {
              const timer = setTimeout(() => {
                setShow(true);
                localStorage.setItem("popupModal", "1");
              }, 2000);
          
              return () => clearTimeout(timer);
            }
          }, []);

    return (
        <Modal 
            show={show} 
            onHide={handleClose} 
            centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Learn React
                </Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export default PopUp

