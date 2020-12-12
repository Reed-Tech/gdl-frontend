import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'

const ContactUs = () => {
    return (
        <section className='contactUs'>
            <header>
                <HeaderSocialLinks customClass='HeaderSocialLinks contactUs_socialLinks'/>
                <div className='contactUs_blur' />
                <Navbar />
                <div></div>
                <div className='contactUs_text'>
                    <Link to='#'>BACK TO CAREER</Link>
                    <h1>Contact Us</h1>
                    <p>How can we assist you?</p>
                </div>
                <StockInfo />
            </header>
            <div className='contactUs_form'>

            </div>
        </section >
    )
}

export default ContactUs
