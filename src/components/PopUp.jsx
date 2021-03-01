import React, { useState, useEffect } from 'react';
import { Modal } from "react-bootstrap";
import NewsletterBg from "../assets/images/newsletter.png"

const PopUp = () =>{
    
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
            backdrop="static"
            // keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
              <div className="login_box_area section_gap">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="login_box_img">
                        <img className="img-fluid" src={NewsletterBg} alt="newsletter Bg" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="login_form_inner">
                        <form className="row login_form" >
                          <p>Subscribe to our newsletter and be the first to receive updates on our new investment opportunities and promos.</p>
                          <div className="col-md-12 form-group">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" />
                          </div>
                          <div className="col-md-12 form-group">
                            <button type="submit" value="submit" className="primary-btn">Log In</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
       
            </Modal.Header>
         
          </Modal>
    )
}

export default PopUp

