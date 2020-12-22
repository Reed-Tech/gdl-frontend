import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSocialLinks from '../components/HeaderSocialLinks'

const FooterNav = (props) => {
    const goToHome = () => window.scrollTo(0, 0)

    return (
        <div className='footerNav'>
            <div className="col-sm-12 col-md-12 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_copyright">
                <p>Copyright © 2020 GDL. All Rights Reserved.</p>
            </div>
            <nav className='col-sm-12 col-md-6 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_links align-content-center'>
                <NavLink to='/#home' onClick={goToHome}>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/media'>Media</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
            <div className='col-sm-12 col-lg-4 w-100 d-flex'>
                <HeaderSocialLinks customClass='footerNav_socialLinks' />
            </div>

        </div>
    )
}
export default FooterNav
