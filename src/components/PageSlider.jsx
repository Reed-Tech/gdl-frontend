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
        dotsClass: `pageSlider-dots ${props.navRight ? ' pageSlider-dots-right' : ''}`,
        customPaging: function (i) {
            return (
                <p><span>{props.navLinks[i]}</span></p>
            );
        },
        // afterChange: function (index) {
        //     dispatch({type: t.WHAT_WE_DO_MODAL_POSITION, index})
        // }
        afterChange: props.afterChange
    }




    return (
        <Slider  {...sliderSettings} >
            {props.children}
        </Slider>
    )
}

export default PageSlider
