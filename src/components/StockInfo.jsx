import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import axios from 'axios'
import { Store, type as t } from '../context/store'



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
            <p style={{ color: color === 'EQUITY' ? 'white' : color === 'DEBT' ? 'rgb(250, 90, 90)' : '#c0e3c0' }}><strong>{rate}%</strong></p>
        </div>
        <div className='stockInfo_card-body'>
            <h3>&#x20A6;{amount}</h3>
        </div>
    </div>
)


const StockInfo = () => {

    const { dispatch } = React.useContext(Store)

    const [stockInfoData, setStockInfoData] = useState([])

    useEffect(() => {
        axios
            .get('https://gdlnigeria.herokuapp.com/api/v1/stock')
            .then(res => {
                dispatch({type: t.STOCK_INFO_DATA, payload:res.data.response})
                setStockInfoData(res.data.response)
            })
            .catch(err => {
                console.log(err)
            })

    },[])


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


