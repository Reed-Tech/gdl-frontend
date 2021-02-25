import React from 'react'
import Slider from 'react-slick'



const PageSlider = (props) => {

    const sliderSettings = {
        dots: true,
        accessibility: false,
        adaptiveHeight: true,
        draggable: false,
        infinite: false,
        pauseOnHover: false,
        fade: false,
        slidesToScroll: 1,
        variableWidth: false,
        cssEase: "ease-in-out",
        arrows: false,
        focusOnSelect: false,
        speed: 900,
        beforeChange: (i) => props.afterChange(i),
        dotsClass: `pageSlider-dots ${props.navRight ? ' pageSlider-dots-right' : ''}`,
        customPaging: function (i) {
            return (
                <p><span>{props.navLinks[i]}</span></p>
            );
        },
    }




    return (
        <Slider  {...sliderSettings} >
            {props.children}
        </Slider>
    )
}

export default PageSlider
