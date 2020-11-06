import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import CorporateInformation from './CorporateInformation'

const Home = () => {
    return (
        <div  className='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar />
                <HeaderSocialLinks/>
                <StockInfo />
                <HeaderSlider />
            </div>
            <CorporateInformation/>

        </div>
    )
}

export default Home
