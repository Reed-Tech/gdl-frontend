import React from 'react'
import { NavLink } from 'react-router-dom'
// import HeaderSocialLinks from '../components/HeaderSocialLinks'
import FooterSocialLinks from '../components/FooterSocialLinks'

const FooterNav = (props) => {
    const myDate = new Date()
    const goToHome = () => window.scrollTo(0, 0)

    return (
        <div className="footerNav py-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto">
                        <h3 className="footer-title">Our Services</h3>
                        <ul className="list-unstyled">
                            <li><a href="https://mystifying-goodall-2b93ae.netlify.app/">Invest Now</a></li>
                            <li><a href="/contact-us">Buy Shares</a></li>
                            <li><a href="/research">Research</a></li>
                            <li><a href="/#what-we-do">What We Do</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <h3 className="footer-title">About Us</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to='/#home' onClick={goToHome}>Home</NavLink></li>
                            <li><NavLink to='/blog' onClick={goToHome}>Blog</NavLink></li>
                            <li><NavLink to='/media' onClick={goToHome}>Media</NavLink></li>
                            <li><NavLink to='/faq' onClick={goToHome}>FAQs</NavLink></li>
                            <li><NavLink to='/career' onClick={goToHome}>Career</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <h3 className="footer-title">Follow Us</h3>
                         <FooterSocialLinks customClass='footerNav_socialLinks' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center footerNav_copyright">
                        <p>
                        <p>Copyright © {myDate.getFullYear()} GDL. All Rights Reserved.</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterNav
