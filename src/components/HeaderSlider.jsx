import React from 'react'
import Slider from "react-slick"
import image1 from '../images/Picture 1.png'
import image2 from '../images/section - human.png'


const sliderSettings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    focusOnSelect: true,
    arrows: false,

};

const HeaderSlider = () => {
    return (
        // <div className='headerSlider' style={{display:'block', background:`blue`}}>
        // <div className='headerSlider' style={{display:'block', background:`url(${image1})`}}>
        <div className='headerSlider'  style ={ { backgroundImage: `url('https://i.ytimg.com/vi/MC-mszipMKY/mqdefault.jpg')` } }>
            <Slider {...sliderSettings}>
                <div className='headerSlider_container'>
                    <div className='headerSlider_text'>
                        <h3>Your financial goals are our priority </h3>
                        <h1>SECURE YOUR FUTURE</h1>
                        <h4>We are committed to building your wealth with different investment options, all tailored to suit <strong>YOU.</strong> </h4>
                    </div>
                </div>
            </Slider>



        </div >
    )
}

export default HeaderSlider
