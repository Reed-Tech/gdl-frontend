import React from 'react'
import { NavLink } from 'react-router-dom'
import logo_small from '../assets/images/logo_small.svg'
import { FaCaretDown } from 'react-icons/fa'
import { Store, type as t } from '../context/store'




const Navbar = (props) => {

    React.useEffect(() => {
        window.onscroll = () => {
            const navbar = document.getElementById('navbar');
            window.scrollY > 20 ? navbar.classList.add('navbar_onScroll') : navbar.classList.remove('navbar_onScroll');
        }
    }, [])

    const [NavToggle, setNavToggle] = React.useState(false)
    const [dropDown, setDropdown] = React.useState('')
    const goToHome = () => window.scrollTo(0, 0)

    const { dispatch } = React.useContext(Store)


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

    function handleCloseModal() {
        setTimeout(() => {
            console.log('hello')
            dispatch({ type: t.MODAL_CLOSE })
            document.getElementsByTagName('BODY')[0].style.overflow = 'auto'
        }, 300)
    }

    return (
        <>
            <nav onClick={handleCloseModal} id='navbar' className='navbar'>
                <NavLink onClick={goToHome} className='navbar_brand' to='/'>
                    <img src={logo_small} alt="GDL" />
                </NavLink>
                <ul className='navbar_ul'>
                    <li className='navbar_ul-li mr-lg-5 mr-md-0'><NavLink to='./#home' onClick={goToHome}>Home</NavLink></li>
                    <li className='navbar_ul-li'><a href='/#what-we-do'>What we do</a></li>
                    <li className='navbar_ul-li'><NavLink to='/whoWeAre' onClick={goToHome} >Who we are</NavLink> </li>
                    <li className='navbar_ul-li navbar_nested_parent'>
                        <div className="navbar_nested_parent-container">
                            <a href>Resources</a>
                            {/* <NavLink to='#'>Resources</NavLink> */}
                            <ul className='navbar_nested_ul'>
                                <li> <NavLink to='/blog' onClick={goToHome} >Blog</NavLink>  </li>
                                <li> <NavLink to='/media' onClick={goToHome} >Media</NavLink>  </li>
                                <li> <NavLink to='/career' onClick={goToHome}>Career</NavLink>  </li>
                                <li> <NavLink to='/research' onClick={goToHome} >Research</NavLink>  </li>
                            </ul>
                        </div>
                    </li>
                    <li className='navbar_ul-li'><NavLink to='/contact-us' onClick={goToHome}>Contact</NavLink></li>
                    <li className='navbar_ul-li'><a href='https://mystifying-goodall-2b93ae.netlify.app/'>Open an account</a></li>
                    <li className='navbar_ul-li'><a href='https://clientportal.gdl.com.ng/'>Login</a></li>
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
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWANav('CORPORATE INFORMATION')} href='./#who-we-are-mobile'>CORPORATE INFORMATION</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWANav('BOARD OF DIRECTORS')} href='./#who-we-are-mobile'>BOARD OF DIRECTORS</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWANav('MANAGEMENT TEAM')} href='./#who-we-are-mobile'>MANAGEMENT TEAM</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWANav('WHY US/VALUE PROPOSITION')} href='./#who-we-are-mobile'>WHY US/VALUE PROPOSITION</a></li>

                    </div>
                </div>
                <div>
                    <li className={`navbar_mcontainer-navItem ${dropDown === 2 ? 'navbar_mcontainer-navItem-down' : ''}`}> <a onClick={() => setDropdown(2)} href='./#what-we-do-mobile'>WHAT WE DO <FaCaretDown color='black' /> </a></li>
                    <div className={`${dropDown === 2 ? 'navbar_mcontainer-navItem-subnavOpen' : 'navbar_mcontainer-navItem-subnavClosed'}`}>
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWDNav('ASSET MANAGEMENT')} href='./#what-we-do-mobile'>ASSET MANAGEMENT</a></li>
                        <li className='navbar_mcontainer-navItem'><a onClick={() => handleWWDNav('FINANCE AND LEASING')} href='./#what-we-do-mobile'>FINANCE AND LEASING</a></li>

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
                <li className='navbar_mcontainer-navItem'><a href='https://mystifying-goodall-2b93ae.netlify.app/'>OPEN AN ACCOUNT</a></li>
                <li className='navbar_mcontainer-navItem'><a href='https://clientportal.gdl.com.ng/'>Login</a></li>

            </div>
        </>
    )
}

export default Navbar
