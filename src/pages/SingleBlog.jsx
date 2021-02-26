import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterNav from '../components/FooterNav'
import BannerSingleBlog from '../components/BannerSingleBlog'
import SbComment from '../components/SbComment'
import { Store } from '../context/store'
import { FaAngleLeft } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa/index.esm'
import ShareBlog from '../components/ShareBlog'





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
                        <NavLink to="/blog"><FaAngleLeft /> BACK TO BLOGS  </NavLink>
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
                <div class="SingleBlogContent_container text-center">
                    <div className="row">
                        <div 
                            className="col-md-12"
                            //  <div
                                dangerouslySetInnerHTML={{
                                    __html: blogData.post
                                }}>
                                
                            {/* </div> */}
                        </div>
                        <div className=" col-md-12  mt-5 mb-5 text-center reacion">
                            <span className="mr-4"> <FaHeart title="react to this blog" className="faHeart" size='24' /> </span>
                            <span> <ShareBlog /> </span>
                        </div>
                    </div>
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
