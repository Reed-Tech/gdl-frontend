import React from 'react'
// import FooterNav from '../components/FooterNav'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Advert from './Advert'
import CreatingWealth from './CreatingWealth'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'

const Home = (props) => {
    return (
        <div className='home' id='HOME'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider />
            </div>
            <WhoWeAre />
            <WhatWeDo />
            <Advert />
            <CreatingWealth />
            {/* <FooterNav /> */}
        </div>
    )
}

export default Home
