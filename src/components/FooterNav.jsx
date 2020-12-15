import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSocialLinks from '../components/HeaderSocialLinks'

const FooterNav = () => {
    return (
        <div className='footerNav'>
            <div className="col-sm-12 col-md-12 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_copyright">
                <p>Copyright © 2020 GDL. All Rights Reserved.</p>
            </div>
            <nav className='col-sm-12 col-md-6 col-lg-4 w-100 d-flex justify-content-between flex-wrap footerNav_links align-content-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/'>Media</NavLink>
                <NavLink to='/'>Career</NavLink>
            </nav>
            <div className='col-sm-12 col-lg-4 w-100 d-flex'>
                <HeaderSocialLinks customClass='footerNav_socialLinks' />
            </div>

        </div>
    )
}
export default FooterNav
