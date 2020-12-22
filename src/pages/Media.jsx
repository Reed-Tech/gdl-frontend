import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Videos from '../components/Videos'
import MediaBG from '../assets/images/mediaBg.png'
import FooterNav from '../components/FooterNav'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import ImagesCarousel from '../components/ImagesCarousel'
import OurMission from '../components/OurMission'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import Banner from '../components/Banner'
import Events from '../components/Events'
import FooterCareer from '../components/FooterCareer'


// _______________________________________________________________________________________
const slideData = [
    {
        image: MediaBG,
        id: 1,
        h3: 'At GDL, we strive to bring you the best in the finance industry',
    },
    {
        image: MediaBG,
        id: '2vms',
        h3: 'Some catchy message to wow our users',
    },
    {
        image: MediaBG,
        id: '2vmas',
        h3: 'You really need to provide this catchy messages',
    },

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
            <div>
                <h1 style={{ margin: '3em' }}>Blog post components here</h1>
            </div>
            <Banner />
            <ImagesCarousel />
            <Events />
            <OurMission />
            <NewsLetterSubscription />
            <FooterCareer />
            <FooterNav />
        </section >


    )
}

export default Media
