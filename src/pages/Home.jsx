import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Advert from './Advert'
import CreatingWealth from './CreatingWealth'
import WhatWeDo from './WhatWeDo'
import WhoWeAre from './WhoWeAre'
import { corporateInformationMobile } from '../pages/CorporateInformation'
import { Store, type as t } from '../context/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { WhyUsMobile } from '../pages/WhyUs'
import { AssetManagementMobile } from '../pages/AssetsManagement'
import { FinanceAndLeasingMobile } from '../pages/FinanceAndLeasing'





const Home = (props) => {

    const { state, dispatch } = React.useContext(Store)
    function handleWWANav(page) {
        dispatch({ type: t.WWA_MOBILE, payload: page }, [])
    }
    function handleWWDNav(page) {
        dispatch({ type: t.WWD_MOBILE, payload: page }, [])
    }


    return (
        <div className='home' id='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider />
            </div>
            <WhoWeAre />
            <div className='WWA_container __mobileOnly' style={{ scrollSnapAlign: 'start', height: '100vh' }}>
                <div id='who-we-are-mobile' >
                    <header>
                        <h1>{state.WWAMobile}</h1>
                    </header>
                    <OverlayScrollbarsComponent style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                        {/* {corporateInformationMobile} */}
                        {/* {WhyUsMobile} */}
                        {state.WWAMobile === 'CORPORATE INFORMATION' ? corporateInformationMobile :
                            state.WWAMobile === 'BOARD OF DIRECTORS' ? 'BOARD OF DIRECTORS' :
                                state.WWAMobile === 'MANAGEMENT TEAM' ? 'MANAGEMENT TEAM' :
                                    state.WWAMobile === 'WHY US/VALUE PROPOSITION' ? WhyUsMobile : 'Select a valid option'

                        }
                    </OverlayScrollbarsComponent>
                    <footer>
                        <span className={state?.WWAMobile === 'CORPORATE INFORMATION' ? 'navActive' : ''} onClick={() => handleWWANav('CORPORATE INFORMATION')}>CORPORATE INFORMATION</span>
                        <span className={state?.WWAMobile === 'BOARD OF DIRECTORS' ? 'navActive' : ''} onClick={() => handleWWANav('BOARD OF DIRECTORS')}>BOARD OF DIRECTORS</span>
                        <span className={state?.WWAMobile === 'MANAGEMENT TEAM' ? 'navActive' : ''} onClick={() => handleWWANav('MANAGEMENT TEAM')}>MANAGEMENT TEAM</span>
                        <span className={state?.WWAMobile === 'WHY US/VALUE PROPOSITION' ? 'navActive' : ''} onClick={() => handleWWANav('WHY US/VALUE PROPOSITION')}>WHY US/VALUE PROPOSITION</span>
                    </footer>
                </div>
            </div>

            <WhatWeDo />
            <div className='WWD_container __mobileOnly' style={{ minHeight: '100vh', scrollSnapAlign: 'start' }}>
                <div id='what-we-do-mobile'>
                    <header>
                        <h1>{state.WWDMobile}</h1>
                    </header>
                    <OverlayScrollbarsComponent style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                        {/* {corporateInformationMobile} */}
                        {/* {WhyUsMobile} */}

                        {state.WWDMobile === 'ASSET MANAGEMENT' ? AssetManagementMobile() :
                            state.WWDMobile === 'FINANCE AND LEASING' ? FinanceAndLeasingMobile() : 'select a valid option'

                        }
                    </OverlayScrollbarsComponent>
                    <footer>
                        <span className={state?.WWDMobile === 'ASSET MANAGEMENT' ? 'navActive' : ''} onClick={() => handleWWDNav('ASSET MANAGEMENT')}>ASSET MANAGEMENT</span>
                        <span className={state?.WWDMobile === 'FINANCE AND LEASING' ? 'navActive' : ''} onClick={() => handleWWDNav('FINANCE AND LEASING')}>FINANCE AND LEASING</span>
                    </footer>
                </div>
            </div>


            <Advert />
            <CreatingWealth history={props.history} />
        </div>
    )
}

export default Home
