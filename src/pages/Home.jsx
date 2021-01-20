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
import { boardOfDirectorsMobile } from '../pages/BoardOfDirectors'
import { FaChevronLeft } from 'react-icons/fa'
import $ from 'jquery'
import Card from '../components/Card'
import { boardOfDirectorsData } from '../pages/BoardOfDirectors'
import { managementTeamData } from '../pages/ManagementTeam'
import { whatWeDoCardTexts } from '../components/WhatWeDoModal'



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
                dispatch({ type: t.WWA_MOBILE_MODAL, payload: '' })
                dispatch({ type: t.WWD_MOBILE_MODAL, payload: 'closed' })
            }
        })
    }, [dispatch, state.showModal])



    function handleWWANav(page) {
        dispatch({ type: t.WWA_MOBILE, payload: page }, [])
    }
    function handleWWDNav(page) {
        dispatch({ type: t.WWD_MOBILE, payload: page }, [])
    }

    function handleWWAModal(e) {
        dispatch({ type: t.WWA_MOBILE_MODAL, payload: e })
    }

    function boardOfDirectorsMobileHandler(e) {
        dispatch({ type: t.BOARD_OF_DIRECTORS_MOBILE, active: e })
    }
    function managementTeamMobileHandler(e) {
        dispatch({ type: t.MANAGEMENT_TEAM_MOBILE, active: e })
    }

    function handleWWDMobileModalNav(e) {
        dispatch({ type: t.WWD_MOBILE_MODAL_NAV, payload: e })
    }

    function closeMobileModal(e) {
        if (e === 'WWA') dispatch({ type: t.WWA_MOBILE_MODAL, payload: '' })
        else if (e === 'WWD') dispatch({ type: t.WWD_MOBILE_MODAL, payload: '' })
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

    function boardOfDirectorsMobileContent() {
        return (
            <OverlayScrollbarsComponent style={{ height: `calc(100vh - ${state.WWAMobileModal === "BOARD OF DIRECTORS" ? '17em' : '19.7em'})`, margin: '1em 1.2em' }}>
                <div className='wwa_modal-image' style={{ backgroundImage: `url(${state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].image ? boardOfDirectorsData[state.boardOfDirectorsActive].image : null})`, marginBottom: '1.8em' }}></div>
                <Card scroll className='boardOfDirectors_card' height='calc(100vh - 30em)'>
                    {state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].text ? boardOfDirectorsData[state.boardOfDirectorsActive].text.map((e) => <p key={e}>{e}</p>) : null}
                </Card>
            </OverlayScrollbarsComponent>
        )
    }

    function managementTeamMobileContent() {
        return (
            <OverlayScrollbarsComponent style={{ height: `calc(100vh - ${state.WWAMobileModal === "MANAGEMENT TEAM" ? '17em' : '19.7em'})`, margin: '1em 1.2em' }}>
                <div className='wwa_modal-image' style={{ backgroundImage: `url(${state.managementTeamActive && managementTeamData[state.managementTeamActive].image ? managementTeamData[state.managementTeamActive].image : null})`, marginBottom: '1.8em' }}></div>
                <Card scroll className='boardOfDirectors_card' height='calc(100vh - 30em)'>
                    {state.managementTeamActive && managementTeamData[state.managementTeamActive].text ? managementTeamData[state.managementTeamActive].text.map((e) => <p key={e}>{e}</p>) : null}
                    {/* {state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].text ? managementTeamData[state.boardOfDirectorsActive].text.map((e) => <p key={e}>{e}</p>) : null} */}
                </Card>
            </OverlayScrollbarsComponent>
        )
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
        <span className={state?.WWDMobileModalNav === 'TREASURY BILL' ? 'navActive' : ''} onClick={() => handleWWDMobileModalNav('TREASURY BILL')}>TREASURY BILL</span>
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

    const boardOfDirectorsMobileNav = (
        state.boardOfDirectorsNav.map((e) =>
            <span key={e} className={state?.boardOfDirectorsActive === e ? 'navActive' : ''} onClick={() => boardOfDirectorsMobileHandler(e)}>{e}</span>
        )
    )

    const managementTeamMobileNav = (
        state.managementTeamNav.map((e) =>
            <span key={e} className={state?.managementTeamActive === e ? 'navActive' : ''} onClick={() => managementTeamMobileHandler(e)}>{e}</span>
        )
    )


    return (
        <div className='home' id='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider />
            </div>
            <WhoWeAre />
            {/* who we are mobile ----------------------------- */}


            <div className={`__mobileOnly wwa_modal px-4 ${state.WWAMobileModal === 'BOARD OF DIRECTORS' ? 'd-block' : state.WWAMobileModal === 'MANAGEMENT TEAM' ? 'd-block' : ''}`}>
                <header>
                    <div><span onClick={() => closeMobileModal('WWA')}><FaChevronLeft size={18} color='white' /></span></div>
                    <h1>{state.WWAMobileModal === 'MANAGEMENT TEAM' ? state.managementTeamActive : state.boardOfDirectorsActive}</h1>
                </header>
                {state.WWAMobileModal === 'MANAGEMENT TEAM' ? managementTeamMobileContent() : boardOfDirectorsMobileContent()}
                <footer>
                    {state.WWAMobileModal === 'BOARD OF DIRECTORS' ? boardOfDirectorsMobileNav : managementTeamMobileNav}
                </footer>
            </div>


            <div className={`WWA_container __mobileOnly`} style={{ scrollSnapAlign: 'start', height: '100vh' }}>
                <div id='who-we-are-mobile' >
                    <header>
                        <h1>{state.WWAMobile}</h1>
                    </header>
                    <OverlayScrollbarsComponent style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                        {state.WWAMobile === 'CORPORATE INFORMATION' ? corporateInformationMobile :
                            state.WWAMobile === 'BOARD OF DIRECTORS' ? boardOfDirectorsMobile() :
                                state.WWAMobile === 'MANAGEMENT TEAM' ? 'MANAGEMENT TEAM' :
                                    state.WWAMobile === 'WHY US/VALUE PROPOSITION' ? WhyUsMobile : 'Select a valid option'

                        }
                    </OverlayScrollbarsComponent>
                    <footer>
                        <span className={state?.WWAMobile === 'CORPORATE INFORMATION' ? 'navActive' : ''} onClick={() => handleWWANav('CORPORATE INFORMATION')}>CORPORATE INFORMATION</span>
                        <span className={state?.WWAMobile === 'BOARD OF DIRECTORS' ? 'navActive' : ''} onClick={() => handleWWAModal('BOARD OF DIRECTORS')}>BOARD OF DIRECTORS</span>
                        <span className={state?.WWAMobile === 'MANAGEMENT TEAM' ? 'navActive' : ''} onClick={() => handleWWAModal('MANAGEMENT TEAM')}>MANAGEMENT TEAM</span>
                        <span className={state?.WWAMobile === 'WHY US/VALUE PROPOSITION' ? 'navActive' : ''} onClick={() => handleWWANav('WHY US/VALUE PROPOSITION')}>WHY US/VALUE PROPOSITION</span>
                    </footer>
                </div>
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
                    <OverlayScrollbarsComponent style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
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
