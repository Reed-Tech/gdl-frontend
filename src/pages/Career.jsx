import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import CareerBG from '../assets/images/Career.png'
import CareerContent from '../components/CareerContent'
import BannerCareer from '../components/BannerCareer'
// import Banner from '../components/Banner'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterCareer from '../components/FooterCareer'
import FooterNav from '../components/FooterNav'
import CareerSlider from '../components/CareerSlider'

const slideData = [
    {
        image: CareerBG,
        id: 1,
        h3: 'GDL Career',
    },
]
// _______________________________________________________________________________________


const Career = () => {

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})`, backgroundPosition:'top right' }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                </div>
            </div>
        </section>))

    return (
        <section className='career'>
            <header>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            <CareerContent />
            <BannerCareer />
            <div className='career_strandedText'>
                <p>
                    If you are aiming for ‘more beyond’ then you fit our ideal candidate.
                    <br />Send your CV to <span> </span>
                    <strong><a href='mailto:humanresources@gdl.com.ng'>humanresources@gdl.com.ng</a></strong>
                </p>
            </div>
            <CareerSlider />
            {/* <Banner /> */}
            <NewsLetterSubscription />
            <FooterCareer />
            <FooterNav />

        </section>

    )
}

export default Career
