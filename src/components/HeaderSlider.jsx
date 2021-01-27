import React from 'react'
import Slider from "react-slick"
import slideOne from '../assets/images/homeSlide1.JPG'
import slideTwo from '../assets/images/homeSlide2.JPEG'

// _______________________________________________________________________________________
const slideData = [
    {
        image: slideOne,
        id: 1,
        h3: 'Your financial goals are our priority.',
        h1: 'SECURE YOUR FUTURE',
        h4: 'We are committed to building your wealth with different investment options, all tailored to suit YOU.'
    },
    {
        image: slideTwo,
        id: '2vms',
        h3: 'Your financial goals are our priority.',
        h1: 'WE BUILD FUTURES',
        h4: `We are committed to building your wealth with different investment options, all tailored to suit YOU.`
    },

]
// _______________________________________________________________________________________

const HeaderSlider = (props) => {


    const sliderSettings = {
        dots: true,
        dotsClass: "headerSlider_container-dots",
        accessibility: true,
        infinite: true,
        speed: 900,
        slidesToScroll: 1,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        focusOnSelect: false,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        lazyLoad: 'progressive',
    };


    const renderSlideData = (
        slideData.map((slides) => <section key={slides.id}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                <div className="headerSlider_container-overlay">
                    <div className='headerSlider_container-text'>
                        <h3>{slides.h3}</h3>
                        <h1>{slides.h1}</h1>
                        <h4>{slides.h4}</h4>
                    </div>
                </div>
            </div>
        </section>)
    )

    return (
        <div className='headerSlider'  >
            <Slider {...sliderSettings}  >
                {props.children ?? renderSlideData}
            </Slider>
        </div >
    )
}

export default HeaderSlider
