import React from 'react'
import Slider from 'react-slick'



const CorporateInformation = () => {
    const sliderSettings = {
        dots: true,
    }
    return (
        <div className='corporateInformation'>
            <Slider {...sliderSettings}>
                <section>
                    <h1>Header</h1>
                    <div>
                        <h3>Cards goes here</h3>
                    </div>
                </section>

            </Slider>
        </div>
    )
}

export default CorporateInformation
