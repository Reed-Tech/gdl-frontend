import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Advert from './Advert'
import CreatingWealth from './CreatingWealth'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
import WWDBg from '../assets/images/landing2.png'
import WWAbg from '../assets/images/landing3.png'

const Home = (props) => {
    return (
        <div className='home' id='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider />
            </div>
            <WhoWeAre />
            <div id='corporate-information'className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWDBg})`}}>
                <h1>Corporate Information</h1>
            </div>
            <div id='board-of-directors' className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWDBg})` }}>
                <h1>Board of Directors</h1>
            </div>
            <div id='management-team' className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWDBg})`}}>
                <h1>Management Team</h1>
            </div>
            <div id='why-us' className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWDBg})`}}>
                <h1>Why us naa</h1>
            </div>
            <WhatWeDo />
            <div id='asset-management' className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWAbg})`}}>
                <h1>Asset Management</h1>
            </div>
            <div id='finance-and-leasing' className='__mobileOnly' style={{minHeight:'100vh', scrollSnapAlign:'start', backgroundImage: `url(${WWAbg})`}}>
                <h1>Finance and Leasing</h1>
            </div>

            <Advert />
            <CreatingWealth history={props.history}/>
        </div>
    )
}

export default Home
