import React from 'react'
import Slider from 'react-slick'

const data = [
    {
        name: 'aricot1',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot2',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot3',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot4',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot5',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot6',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot7',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot8',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot9',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot10',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot11',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
    {
        name: 'aricot12',
        country: 'ngn',
        amount: '0.65',
        rate: '0',
        color: 'green',
    },
]

const sliderSettings = {
    dots: false,
    // className: 'center',
    // centerPadding: "60px",
    accessibility: true,
    infinite: true,
    speed: 1000,
    // slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    focusOnSelect: true,

};

const stockCard = (name, country, amount, rate, color) =>
    (
        <div className='stockInfo_card'>
            <div className='stockInfo_card-header'>
                <h3><strong>{name}</strong>/{country}</h3>
                <p style={{ color: color }}><strong>{rate}%</strong></p>
            </div>
            <div className='stockInfo_card-body'>
                <h3>N{amount}</h3>
            </div>
        </div>
    )


const StockInfo = () => {
    return (
        <div className='stockInfo'>
        {/* <div> */}
            {/* {data.map((e) => stockCard(e.name, e.country, e.amount, e.rate, e.color))} */}


            <Slider {...sliderSettings}>
                {data.map((e) => stockCard(e.name, e.country, e.amount, e.rate, e.color))}

            </Slider>


        </div>
    )
}

export default StockInfo
