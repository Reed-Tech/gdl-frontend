import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'

const Home = () => {
    return (
        <div  className='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar />
                <HeaderSocialLinks/>
                <StockInfo />
                <HeaderSlider />
            </div>

        </div>
    )
}

export default Home
