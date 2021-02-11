import React from 'react'
import { NavLink } from 'react-router-dom'
// import HeaderSocialLinks from '../components/HeaderSocialLinks'
import FooterSocialLinks from '../components/FooterSocialLinks'

const FooterNav = (props) => {
    const myDate = new Date()
    const goToHome = () => window.scrollTo(0, 0)

    return (
        // <div className='footerNav'>
        //     <div className='col-sm-12 col-lg-4 w-100 footerNav_services'>
        //        <p>Our Services</p>
        //        <ul>
        //            <li>Invest Now</li>
        //            <li>Money Market Fund</li>
        //            <li>Buy Shares</li>
        //            <li>Asset Management</li>
        //            <li>Finance and leashing</li>
        //            <li>Research</li>
        //        </ul>
        //     </div>
        //     <nav className='col-sm-12 col-md-6 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_links align-content-center'>
        //         <NavLink to='/#home' onClick={goToHome}>Home</NavLink>
        //         <NavLink to='/blog' onClick={goToHome}>Blog</NavLink>
        //         <NavLink to='/media' onClick={goToHome}>Media</NavLink>
        //         <NavLink to='/career' onClick={goToHome}>Career</NavLink>
        //     </nav>
        //     <div className='col-sm-12 col-lg-4 w-100 d-flex'>
        //         <HeaderSocialLinks customClass='footerNav_socialLinks' />
        //     </div>
        //     <div className="col-sm-12 col-md-12 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_copyright">
        //         <p>Copyright © {myDate.getFullYear()} GDL. All Rights Reserved.</p>
        //     </div>

        // </div>
        <div className="footerNav py-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 mx-auto">
                        <h3 className="footer-title">Our Services</h3>
                        <ul className="list-unstyled">
                            <li><a href="https://mystifying-goodall-2b93ae.netlify.app/">Invest Now</a></li>
                            <li><a href="/#what-we-do">Money Market Fund</a></li>
                            <li><a href="/">Buy Shares</a></li>
                            <li><a href="/#what-we-do">Asset Management</a></li>
                            <li><a href="/#what-we-do">Finance and Leasing</a></li>
                            <li><a href="/research">Research</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mx-auto">
                        <h3 className="footer-title">About Us</h3>
                        <ul className="list-unstyled">
                            <li><NavLink to='/#home' onClick={goToHome}>Home</NavLink></li>
                            <li><NavLink to='/blog' onClick={goToHome}>Blog</NavLink></li>
                            <li><NavLink to='/media' onClick={goToHome}>Media</NavLink></li>
                            <li><a href="/faq">FAQs</a></li>
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
