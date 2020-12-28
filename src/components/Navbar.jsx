import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_small from '../assets/images/logo_small.svg'
import { FaCaretDown } from 'react-icons/fa'
import {Store, type as t } from '../context/store'


const Navbar = (props) => {
    const [NavToggle, setNavToggle] = React.useState(false)
    const [dropDown, setDropdown] = React.useState('')
    const goToHome = () => window.scrollTo(0, 0)

    const {state, dispatch} =React.useContext(Store)
    console.log(state)


    const toggleHamburger = () => {
        setNavToggle(!NavToggle)
        setDropdown('')
    }

    function handleWWANav(page) {
        dispatch({ type: t.WWA_MOBILE, payload: page }, [])
        setNavToggle(!NavToggle)

    }
    function handleWWDNav(page) {
        dispatch({ type: t.WWD_MOBILE, payload: page }, [])
        setNavToggle(!NavToggle)

    }

    return (
        <>
            <nav className='navbar'>
                <NavLink onClick={goToHome} className='navbar_brand' to='/'>
                    <img src={logo_small} alt="GDL" />
                </NavLink>
                <ul className='navbar_ul'>
                    <li className='navbar_ul-li mr-lg-5 mr-md-0'><NavLink onClick={goToHome} to='./#home'>Home</NavLink></li>
                    <li className='navbar_ul-li'><a href='/#who-we-are'>Who we are</a></li>
                    <li className='navbar_ul-li'><a href='/#what-we-do'>What we do</a></li>
                </ul>
                <ul className='navbar_ul'>
                    <li className='navbar_ul-li navbar_nested_parent'>
                        <div className="navbar_nested_parent-container">
                            <NavLink to='#'>Resources</NavLink>
                            <ul className='navbar_nested_ul'>
                                <li> <NavLink to='/blog' >Blog</NavLink>  </li>
                                <li> <NavLink to='/media' >Media</NavLink>  </li>
                                <li> <NavLink to='/career' >Career</NavLink>  </li>
                                <li> <NavLink to='/research' >Research</NavLink>  </li>
                            </ul>
                        </div>
                    </li>
                    <li className='navbar_ul-li'><NavLink to='/contact-us'>Contact</NavLink></li>
                </ul>
                <ul className='navbar_ul'>
                    <li className='navbar_ul-li'><NavLink to='#'>Open an account</NavLink></li>
                    {/* <li className='navbar_ul-li'><NavLink to='#'>Login</NavLink></li> */}
                </ul>

                {/* Mobile Menu */}
                <div className='navbar_mobile-hamburgerMenu'>
                    <div onClick={toggleHamburger} className={`navbar_mobile-hamburgerMenu-icon ${NavToggle ? 'navbar_mobile-hamburgerMenu-icon-close' : ''} `}>
                        <div>
                        </div>
                    </div>

                </div>
            </nav>
            <div className={`navbar_mcontainer ${NavToggle ? 'navbar_mcontainer-opened' : ''}`}>
                <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./#home'>HOME</NavLink></li>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown === 1 ? 'navbar_mcontainer-navItem-down' : ''}`}> <a onClick={() => setDropdown(1)} href='./#who-we-are-mobile'>WHO WE ARE <FaCaretDown color='black' /> </a></li>
                    <div className={`${dropDown === 1 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWANav('CORPORATE INFORMATION')} href='./#who-we-are-mobile'>CORPORATE INFORMATION</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWANav('BOARD OF DIRECTORS')} href='./#who-we-are-mobile'>BOARD OF DIRECTORS</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWANav('MANAGEMENT TEAM')} href='./#who-we-are-mobile'>MANAGEMENT TEAM</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWANav('WHY US/VALUE PROPOSITION')} href='./#who-we-are-mobile'>WHY US/VALUE PROPOSITION</a></li>

                    </div>
                </div>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown === 2 ? 'navbar_mcontainer-navItem-down' : ''}`}> <a onClick={() => setDropdown(2)} href='./#what-we-do-mobile'>WHAT WE DO <FaCaretDown color='black' /> </a></li>
                    <div className={`${dropDown === 2 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWDNav('ASSET MANAGEMENT')} href='./#what-we-do-mobile'>ASSET MANAGEMENT</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={()=>handleWWDNav('FINANCE AND LEASING')} href='./#what-we-do-mobile'>FINANCE AND LEASING</a></li>

                    </div>
                </div>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown === 3 ? 'navbar_mcontainer-navItem-down' : ''}`}> <NavLink onClick={() => setDropdown(3)} to='./#home'>RESOURCES <FaCaretDown color='black' /> </NavLink></li>
                    <div className={`${dropDown === 3 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./blog'>BLOG</NavLink></li>
                        <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./media'>MEDIA</NavLink></li>
                        <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./career'>CAREER</NavLink></li>
                        <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./research'>RESEARCH</NavLink></li>

                    </div>
                </div>
                <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./contact-us'>CONTACT</NavLink></li>
                <li className='navbar_mcontainer-navItem'><NavLink onClick={goToHome} to='./#home'>OPEN AN ACCOUNT</NavLink></li>

            </div>
        </>
    )
}

export default Navbar
