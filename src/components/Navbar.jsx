import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_small from '../assets/images/logo_small.svg'
import { FaCaretDown } from 'react-icons/fa'

const NavItems = {
    home: `<li className='navbar_ul-li mr-lg-5 mr-md-0'><NavLink onClick={goToHome} to='./#home'>Home</NavLink></li>`
}

const Navbar = (props) => {
    const [NavToggle, setNavToggle] = React.useState(false)
    const [dropDown, setDropdown] = React.useState('')
    console.log(dropDown);
    const goToHome = () => window.scrollTo(0, 0)


    const toggleHamburger = () => {
        setNavToggle(!NavToggle)
        setDropdown('')
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
                    <li className={`navbar_mcontainer-navItem ${dropDown == 1 ? 'navbar_mcontainer-navItem-down' : ''}`}> <NavLink onClick={() => setDropdown(1)} to='./#home'>WHO WE ARE <FaCaretDown color='black' /> </NavLink></li>
                    <div className={`${dropDown == 1 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#corporate-information'>CORPORATE INFORMATION</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#board-of-directors'>BOARD OF DIRECTORS</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#management-team'>MANAGEMENT TEAM</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#why-us'>WHY US/VALUE PROPOSITION</a></li>

                    </div>
                </div>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown == 2 ? 'navbar_mcontainer-navItem-down' : ''}`}> <NavLink onClick={() => setDropdown(2)} to='./#home'>WHAT WE DO <FaCaretDown color='black' /> </NavLink></li>
                    <div className={`${dropDown == 2 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#asset-management'>ASSET MANAGEMENT</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={goToHome} href='./#finance-and-leasing'>FINANCE AND LEASING</a></li>

                    </div>
                </div>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown == 3 ? 'navbar_mcontainer-navItem-down' : ''}`}> <NavLink onClick={() => setDropdown(3)} to='./#home'>RESOURCES <FaCaretDown color='black' /> </NavLink></li>
                    <div className={`${dropDown == 3 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
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
