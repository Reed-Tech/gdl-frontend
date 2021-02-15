import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import CareerBG from '../assets/images/Career.png'
import BannerCareer from '../components/BannerCareer'
import NewsLetterSubscription from '../components/NewsLetterSubscription'
import FooterCareer from '../components/FooterCareer'
import FooterNav from '../components/FooterNav'
import { useParams } from 'react-router-dom'

const slideData = [
    {
        image: CareerBG,
        id: 1,
        h3: 'GDL Career',
    },
]
// _______________________________________________________________________________________


const SingleSingle = () => {

    const { singleBlog } = useParams()

    console.log(singleBlog);

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='career_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})`, backgroundPosition: 'top right' }}>
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
            <section className='careerCareer_content'>
                <h1>{singleBlog}</h1>
                <div>
                    <h4>Description</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div>
                    <h4>Key Responsibilities</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div>
                    <h4>Desired Skills</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div>
                    <h4>Education/Experience</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>

            </section>
            <BannerCareer />
            <div className='career_strandedText'>
                <p>
                    If you are aiming for ‘more beyond’ then you fit our ideal candidate.
                    <br />Send your CV to <span> </span>
                    <strong><a href='mailto:humanresources@gdl.com.ng'>humanresources@gdl.com.ng</a></strong>
                </p>
            </div>
            {/* <Banner /> */}
            <NewsLetterSubscription />
            <FooterCareer />
            <FooterNav />

        </section>

    )
}

export default SingleSingle
