import React from 'react'
import FooterNav from '../components/FooterNav'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import OurMission from '../components/OurMission'
import StockInfo from '../components/StockInfo'
import MediaBG from '../assets/images/Blog.jpg'
import SearchBlog from '../components/SearchBlog'
import BannerBlog from '../components/BannerBlog'
import BlogSlider from '../components/BlogSlider'


const slideData = [
    {
        image: MediaBG,
        id: 1,
        // h3: 'At GDL, we strive to bring you the best in the finance industry',
    },
]
// _______________________________________________________________________________________



const Blog = (props) => {
    console.log(props)
    const renderSlideData = (
        slideData.map((slides) => <section key={slides.id}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                 <div className="headerSlider_container-overlay">
                    <div className='headerSlider_container-text'>
                        <h3>{slides.h3}</h3>
                    </div>
                </div>
            </div>
        </section>))

    return (
        <section className='blog'>
            <header>
                <Navbar />
                <HeaderSocialLinks/>
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            <SearchBlog />
            <BlogSlider history={props.history}/>
            <BannerBlog />
            <OurMission
                header='Why Us'
                body='We believe that the traditional models of solving societal problems in a developing country like Nigeria has failed with not enough resources channelled towards improving the living conditions of Nigerians. We have observed that even where these resources are deployed, they are fraught with myriads of challenges, principally because our public service models are not strategically designed as service oriented agencies but as a means of distributing the revenue of a nation amongst a meagre few. Non-Governmental Organizations (NGOs) have done a bit in this regard but even they, are limited by the funds available to them from Donor Agencies and the struggle to attract these funds in the first place. We believe that commercial entities can play a significant role here.'
            />
            <NewsLetterSubscription />
            <FooterNav />
        </section>
    )
}

export default Blog
