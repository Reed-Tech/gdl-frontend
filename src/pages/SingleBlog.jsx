import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterNav from '../components/FooterNav'
import BannerSingleBlog from '../components/BannerSingleBlog'
import SbComment from '../components/SbComment'
import { Store } from '../context/store'




const SingleBlog = (props) => {
    const { state, } = React.useContext(Store)
    const blogData = state.singleBlogPage
    console.log(blogData)

    const slideData = [
        {
            image: blogData.thumbnail_image,
            id: 1,
            h3: blogData.title,
        },
    
    ]


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
        <div>
            <header style={{ height: '100vh' }}>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            <section className="SingleBlogContent py-5">
                <div class="container text-center">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blogData.post
                        }}>
                        
                    </div>
                    {/* <div className="mt-3 mb-3">
                        <img src={blogData.thumbnail_image} alt="blog img" srcset=""/>
                    </div> */}
                    
                </div>
            </section>
            <SbComment />
            <BannerSingleBlog />

            <NewsLetterSubscription />
            <FooterNav />

        </div>
    )
}

export default SingleBlog
