import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_small from '../assets/images/logo_small.svg'



const Navbar = (props) => {
    const [NavToggle, setNavToggle] = React.useState(false)
    const goToHome = () => window.scrollTo(0, 0)
    return (
        <nav className='navbar'>
            <NavLink onClick={goToHome} className='navbar_brand' to='/'>
                <img src={logo_small} alt="GDL" />
            </NavLink>
            <ul className='navbar_ul'>
                <li className='navbar_ul-li mr-lg-5 mr-md-0'><NavLink onClick={goToHome} to='./'>Home</NavLink></li>
                <li className='navbar_ul-li'><a href='#whoWeAre'>Who we are</a></li>
                <li className='navbar_ul-li'><a href='#whatWeDo'>What we do</a></li>
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
                <li className='navbar_ul-li'><NavLink to='/contact-us'>Contact</NavLink></li>
            </ul>
            <ul className='navbar_ul'>
                <li className='navbar_ul-li'><NavLink to='#'>Open an account</NavLink></li>
                <li className='navbar_ul-li'><NavLink to='#'>Login</NavLink></li>
            </ul>

            {/* Mobile Menu */}
            <div className='navbar_mobile-hamburgerMenu'>
                <div onClick={() => setNavToggle(!NavToggle)} className={`navbar_mobile-hamburgerMenu-icon ${NavToggle ? 'navbar_mobile-hamburgerMenu-icon-close' : ''} `}>
                    <div></div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
