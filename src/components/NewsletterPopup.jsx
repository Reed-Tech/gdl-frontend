import React from 'react'
import PopupImg from '../assets/images/newsletter.png'



function NewsletterPopup() {
    return (
        <div>
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src={PopupImg} alt="newsletter popup" />
                            </div>
                       </div>
                       <div class="col-lg-6">
                            <div class="login_form_inner">
                                <form class="row login_form" >
                                   <h5>Subscribe to our newsletter and be the first to receive updates on our new investment opportunities and promos.</h5>
                                    <div class="col-md-12 form-group">
                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" />
                                    </div>
                                    <div class="col-md-12 form-group">
                                        <button type="submit" value="submit" class="primary-btn">Log In</button>
                                    </div>
                                </form>
                            </div>
			    	   </div>
                   </div>
                </div>
            </section>
            
        </div>
    )
}
export default NewsletterPopup;