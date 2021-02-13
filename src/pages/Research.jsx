import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import ResearchBG from '../assets/images//research-1.jpg'
import OurMission from '../components/OurMission'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterNav from '../components/FooterNav'
// import BlogSlider from '../components/BlogSlider'



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
            <div className='research_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
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
            <header style={{ height: '100vh' }}>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            {/* <BlogSlider /> */}
            <OurMission />
            <NewsLetterSubscription />
            <FooterNav />
        </section>
    )
}

export default Research
