import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSocialLinks from '../components/HeaderSocialLinks'

const FooterNav = () => {
    return (
        <div className='footerNav'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/'>Media</NavLink>
                <NavLink to='/'>Career</NavLink>
            </nav>
            <div>
                <HeaderSocialLinks customClass='footerNav_socialLinks' />
                {/* <p>1, Afolabi Lesi street, Ilupeju, Lagos.</p> */}
            </div>

            <div>copyright</div>
        </div>
    )
}
export default FooterNav
