import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import Advert from './Advert'
import CreatingWealth from './CreatingWealth'
import WhatWeDo from './WhatWeDo'
import { Store, type as t } from '../context/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { AssetManagementMobile } from '../pages/AssetsManagement'
import { FinanceAndLeasingMobile } from '../pages/FinanceAndLeasing'
import { FaChevronLeft } from 'react-icons/fa'
import $ from 'jquery'
import Card from '../components/Card'
import { whatWeDoCardTexts } from '../components/WhatWeDoModal'
import FooterNav from '../components/FooterNav'



const Home = (props) => {
    const { state, dispatch } = React.useContext(Store)
    // console.log(props);




    React.useEffect(() => {
        let webWidth = 1023
        const bodyElement = document.getElementsByTagName('BODY')[0]

        if (state?.showModal === true) {
            bodyElement.style.overflow = 'hidden'
        }
        else bodyElement.style.overflow='auto'

        $(window).on('resize', () => {
            if (window.innerWidth >= webWidth) {
                dispatch({ type: t.WWD_MOBILE_MODAL, payload: 'closed' })
            }
        })
    }, [dispatch, state.showModal])



  
    function handleWWDNav(page) {
        dispatch({ type: t.WWD_MOBILE, payload: page }, [])
    }

  

    function handleWWDMobileModalNav(e) {
        dispatch({ type: t.WWD_MOBILE_MODAL_NAV, payload: e })
    }

    function closeMobileModal(e) {
        // if (e === 'WWA') dispatch({ type: t.WWA_MOBILE_MODAL, payload: '' })
         if (e === 'WWD') dispatch({ type: t.WWD_MOBILE_MODAL, payload: '' })
        else console.log('argument cant be blank')

    }

    function handleCloseModal() {
        setTimeout(() => {
            console.log('hello')
            dispatch({ type: t.MODAL_CLOSE })
            document.getElementsByTagName('BODY')[0].style.overflow = 'auto'
        }, 300)
    }

    function handleWWDCloseButton(){
        handleCloseModal()
    }


    function assetManagementMobileContent() {
        return (
            whatWeDoCardTexts[state.WWDMobileModalNav]?.map(e =>
                <Card className='mb-3' key={e}>
                    {e}
                </Card>
            )
        )
    }

    function FinanceAndLeasingMobileContent() {
        return (
            whatWeDoCardTexts[state.WWDMobileModalNav]?.map(e =>
                <Card className='mb-3' key={e}>
                    {e}
                </Card>
            )
        )
    }



    const financeLeasingNavLinks = (<>
        <span className={state?.WWDMobileModalNav === 'HIGH YIELD NOTE' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('HIGH YIELD NOTE')}>HIGH YIELD NOTE</span>
        <span className={state?.WWDMobileModalNav === 'TREASURY BILLS' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('TREASURY BILLS')}>TREASURY BILLS</span>
        <span className={state?.WWDMobileModalNav === 'LONG TERM NOTE' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('LONG TERM NOTE')}>LONG TERM NOTE</span>
        <span className={state?.WWDMobileModalNav === 'DOLLAR NOTE' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('DOLLAR NOTE')}>DOLLAR NOTE</span>
        <span className={state?.WWDMobileModalNav === 'GDL FINANCE' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('GDL FINANCE')}>GDL FINANCE</span>
    </>)
    const assetManagementNavLinks = (<>
        <span className={state?.WWDMobileModalNav === 'MONEY MARKET FUND' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('MONEY MARKET FUND')}>MONEY MARKET FUND</span>
        <span className={state?.WWDMobileModalNav === 'SMART INVESTMENT ACCOUNT' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('SMART INVESTMENT ACCOUNT')}>SMART INVESTMENT ACCOUNT</span>
        <span className={state?.WWDMobileModalNav === 'STOCKBROKING' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('STOCKBROKING')}>STOCKBROKING</span>
        <span className={state?.WWDMobileModalNav === 'RESEARCH' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('RESEARCH')}>RESEARCH</span>
        <span className={state?.WWDMobileModalNav === 'FINANCIAL ADVISORY' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('FINANCIAL ADVISORY')}>FINANCIAL ADVISORY</span>
        <span className={state?.WWDMobileModalNav === 'ENTERPRISE TRANSGENERATIONAL PROGRAM' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('ENTERPRISE TRANSGENERATIONAL PROGRAM')}>ETP</span>
    </>)

    return (
        <div className='home' id='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider />
            </div>
     
            <WhatWeDo />
            {/* _______________________________Mobile modal WWD___________________________________ */}
            <div className={`__mobileOnly px-4 wwd_modal ${state.WWDMobileModal === 'opened' ? 'd-block' : ''}`}>
                <div id='what-we-do-mobile'>
                    <header>
                        <span className='position-absolute mt-n1' onClick={() => {closeMobileModal('WWD'); handleWWDCloseButton()}}><FaChevronLeft size={18} color='white' /></span>
                        <h1>{state.WWDMobileModalNav}</h1>
                    </header>
                    <OverlayScrollbarsComponent style={{ height: 'calc(100vh - 18.5em)', margin: '1em 1.2em' }}>
                        {state.WWDMobile === 'ASSET MANAGEMENT' ? assetManagementMobileContent() : FinanceAndLeasingMobileContent()}
                    </OverlayScrollbarsComponent>
                    <footer>
                        {state.WWDMobile === "FINANCE AND LEASING" ? financeLeasingNavLinks : assetManagementNavLinks}
                    </footer>
                </div>
            </div>
            <div className='WWD_container __mobileOnly' style={{ minHeight: '100vh', scrollSnapAlign: 'start' }}>
                <div id='what-we-do-mobile'>
                    <header>
                        <h1>{state.WWDMobile}</h1>
                    </header>
                    <div style={{ margin: '1em 1.2em' }}>
                        {state.WWDMobile === 'ASSET MANAGEMENT' ? AssetManagementMobile() :
                            state.WWDMobile === 'FINANCE AND LEASING' ? FinanceAndLeasingMobile() : 'select a valid option'
                        }
                    </div>
                    <footer>
                        <span className={state?.WWDMobile === 'ASSET MANAGEMENT' ? 'navActive' : ''} onClick={() => handleWWDNav('ASSET MANAGEMENT')}>ASSET MANAGEMENT</span>
                        <span className={state?.WWDMobile === 'FINANCE AND LEASING' ? 'navActive' : ''} onClick={() => handleWWDNav('FINANCE AND LEASING')}>FINANCE AND LEASING</span>
                    </footer>
                </div>
            </div>
            <Advert />
            <CreatingWealth history={props.history} />
            <FooterNav />

        </div>
    )
}

export default Home
