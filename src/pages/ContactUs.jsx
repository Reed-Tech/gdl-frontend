import React from 'react'
import ContactUsForm from '../components/ContactUsForm'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import FooterMap from '../components/FooterMap'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
// import { useEffect } from "react"



const ContactUs = () => {

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         alert("I just responded to the code and ran after 5 secs");
    //     }, 1000)
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, []);



    return (
        <section className='contactUs'>
            <header>
                <HeaderSocialLinks customClass='HeaderSocialLinks contactUs_socialLinks' />
                <div className='contactUs_blur' />
                <Navbar />
                <div className='contactUs_text'>
                    <h1>Contact Us</h1>
                    <p>How can we assist you?</p>
                </div>
                <StockInfo />
            </header>
            <div className='contactUs_form'>
                <ContactUsForm />
            </div>
            
            
            <Footer />
            <FooterMap />
            <FooterNav />
        </section >
    )
}

export default ContactUs
