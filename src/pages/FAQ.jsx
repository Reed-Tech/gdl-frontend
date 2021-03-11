import React from 'react';
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import FaqBG from '../assets/images/Contact-1.jpg'
import FooterNav from '../components/FooterNav'
import Accordians from '../components/Accordians';


const slideData = [
    {
        image: FaqBG,
        id: 1,
        h3: "GDL FAQn s",
    },
]




const FAQ = () => {


    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='faq_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})`, backgroundPosition:'top right' }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                </div>
            </div>
        </section>)
    )

    return (
        <section className='faq'>
            <header>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            {/* accorodians */}
            <Accordians />
        <FooterNav />

    </section>
    )
}


export default  FAQ