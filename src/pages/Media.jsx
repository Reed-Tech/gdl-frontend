import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Videos from '../components/Videos'
import MediaBG from '../assets/images/Media.jpeg'
import FooterNav from '../components/FooterNav'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import ImagesCarousel from '../components/ImagesCarousel'
import OurMission from '../components/OurMission'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import Banner from '../components/Banner'
import Events from '../components/Events'



// _______________________________________________________________________________________
const slideData = [
    {
        image: MediaBG,
        id: 1,
        // h3: '',
    }

]
// _______________________________________________________________________________________


const Media = () => {

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.id}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                </div>
            </div>
        </section>)
    )
    return (
        <section className='_media'>
            <header style={{ height: '100vh' }}>
                <Navbar />
                <HeaderSocialLinks customClass='HeaderSocialLinks contactUs_socialLinks' />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            <Videos />
            {/* <BlogSlider /> */}
            <Banner />
            <ImagesCarousel />
            <Events />
            <OurMission />
            <NewsLetterSubscription />
            {/* <FooterCareer /> */}
            <FooterNav />
        </section >


    )
}

export default Media
