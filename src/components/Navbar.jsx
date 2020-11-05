import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_small from '../images/logo_small.svg'



const Navbar = () => {
    const [toggle, setToggle] = React.useState(false)

    return (
        <nav className='navbar'>
            <NavLink className='navbar_brand' to='/'>
                <img src={logo_small} alt="GDL" />
            </NavLink>
            <ul className='navbar_ul'>
                <li className='navbar_ul-li'><NavLink to='./'>Home</NavLink></li>
                <li className='navbar_ul-li'><NavLink to='#'>What we do</NavLink></li>
                <li className='navbar_ul-li'><NavLink to='#'>Who we are</NavLink></li>
                <li className='navbar_ul-li'><NavLink to='#'>Business units</NavLink></li>
            </ul>
            <ul className='navbar_ul'>
                <li className='navbar_ul-li navbar_nested_parent'>
                    <div className="navbar_nested_parent-container">
                        <NavLink to='#'>Resources</NavLink>
                        <ul className='navbar_nested_ul'>
                            <li> <NavLink to='#' >Blog</NavLink>  </li>
                            <li> <NavLink to='#' >Media</NavLink>  </li>
                            <li> <NavLink to='#' >Career</NavLink>  </li>
                            <li> <NavLink to='#' >Research</NavLink>  </li>
                        </ul>
                    </div>
                </li>
                <li className='navbar_ul-li'><NavLink to='#'>Contact</NavLink></li>
            </ul>
            <ul className='navbar_ul'>
                <li className='navbar_ul-li'><NavLink to='#'>Open an account</NavLink></li>
                <li className='navbar_ul-li'><NavLink to='#'>Login</NavLink></li>
            </ul>

            {/* Mobile Menu */}
            <div className='navbar_mobile-hamburgerMenu'>
                <div onClick={() => setToggle(!toggle)} className={`navbar_mobile-hamburgerMenu-icon ${toggle ? 'navbar_mobile-hamburgerMenu-icon-close' : ''} `}>
                    <div></div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
