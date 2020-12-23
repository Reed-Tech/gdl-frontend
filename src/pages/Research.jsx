import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import ResearchBG from '../assets/images/mediaBg.png'
import OurMission from '../components/OurMission'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterNav from '../components/FooterNav'


const slideData = [
    {
        image: ResearchBG,
        id: 1,
        h3: 'GDL Research',
    },

]
// _______________________________________________________________________________________


const Research = () => {
    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                    <p>
                        GDL Research Division aims at providing clients with independent and unbiased access to analysis and opinion.

                    </p>
                </div>
            </div>
        </section>))
    return (
        <section className='research'>
            <header style={{height:'100vh'}}>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
                <h1>Blog Posts </h1>
                <OurMission />
                <NewsLetterSubscription />
                <FooterNav />
        </section>
    )
}

export default Research