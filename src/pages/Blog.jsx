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
                body='We believe that the traditional models of solving societal problems in Nigeria has failed due to the lack of concern towards improving the living conditions of Nigerians. Resources do not reach those they are meant for because our public service models only serve as a means to enrich a meagre few. NGOs have made some progress but are constrained by a lack of funds and the struggle to attract these funds. We believe that commercial entities can play a significant role in improving the life of the average Nigerian.'
            />
            <NewsLetterSubscription />
            <FooterNav />
        </section>
    )
}

export default Blog
