import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import SingleBlogBG from '../assets/images/BlogImage.png'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterNav from '../components/FooterNav'
import SingleBlogContent from '../components/SingleBlogContent'
import BannerSingleBlog from '../components/BannerSingleBlog'
import SbComment from '../components/SbComment'



const slideData = [
    {
        image: SingleBlogBG,
        id: 1,
        h3: 'Surfing In Maldives',
    },

]
// _______________________________________________________________________________________


const SingleBlog = () => {
    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='research_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                <div className='headerSlider_container-text singleBlogSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                    <p>
                        <a href="/blog">BACK TO BLOGS</a>
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

            < SingleBlogContent />
            < SbComment />
            < BannerSingleBlog />
         
            <NewsLetterSubscription />
            <FooterNav />
        </section>
    )
}

export default SingleBlog
