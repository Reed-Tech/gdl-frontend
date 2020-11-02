import React from 'react'
import Slider from "react-slick";
import image1 from '../images/Picture 1.png'
import image2 from '../images/section - human.png'

const customDotStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
}

const sliderSettings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendDots: dots => (
        <div style={customDotStyle}>
            <ul style={{ margin: "10px" }}> {dots}</ul>
        </div>
    )
};

const HeaderSlider = () => {
    return (
        <div className='HeaderSlider'>
            <Slider {...sliderSettings}>
                <div>
                    <div className='HeaderSlider__Text'>
                        <h3>Your financial goals are our priority </h3>
                        <h1>SECURE YOUR FUTURE</h1>
                        <h4>We are committed to building your wealth with different investment options, all tailored to suit <strong>YOU</strong> </h4>
                    </div>
                    <div>
                        <img className='HeaderSlider__Image' src={image1} alt="1" />
                    </div>
                </div>
                <div>
                    <div className='HeaderSlider__Text'>
                        <h3>There is nothing more important to us</h3>
                        <h1>SAFEGUARD YOUR FUNDS</h1>
                        <h4>We are committed to building your wealth with different investment options, all tailored to suit <strong>YOU</strong> </h4>
                    </div>
                    <img className='HeaderSlider__Image' src={image2} alt="2" />
                </div>
            </Slider>



        </div >
    )
}

export default HeaderSlider
