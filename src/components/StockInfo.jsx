import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'

// _______________________________________________________________________________________
const API_KEY = process.env.REACT_APP_STOCK;
// const data = [
//     {
//         name: 'Apple Stocks',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//         id: 'some random ',
//     },
//     {
//         name: 'aricot2',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot3',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot4',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot5',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot6',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot7',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot8',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot9',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot10',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot11',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
//     {
//         name: 'aricot12',
//         country: 'ngn',
//         amount: '0.65',
//         rate: '0',
//         color: 'green',
//     },
// ]
// _______________________________________________________________________________________

const sliderSettings = {
    dots: false,
    accessibility: false,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    focusOnSelect: true,
    arrows: false,

};

const stockCard = (name, country, amount, rate, color, key) =>
(
    <div className='stockInfo_card' key={name}>
        <div className='stockInfo_card-header'>
            <h3><strong>{name}</strong>/{country}</h3>
            <p style={{ color: color === 'EQUITY'? 'white': color === 'DEBT'? 'red':'#c0e3c0' }}><strong>{rate}%</strong></p>
        </div>
        <div className='stockInfo_card-body'>
            <h3>N{amount}</h3>
        </div>
    </div>
)


const StockInfo = () => {

    const [stockInfoData, setStockInfoData] = useState([])

    console.log(API_KEY);

    useEffect(() => {
        axios
            .get('https://marketdataapiv3.nse.com.ng/portal/samples/pricesRT.json')
            .then(res => {
                // console.log(res);
                setStockInfoData(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    console.log(stockInfoData);
    return (
        <div className='stockInfo'>
            <Slider {...sliderSettings}>
                {/* {data.map((e) => stockCard(e.name, e.country, e.amount, e.rate, e.color))} */}
                {stockInfoData.map((e) => stockCard(e.Symbol, 'NIG', e.Open, e.Close, e.Asset))}
            </Slider>


        </div>
    )
}

export default StockInfo
