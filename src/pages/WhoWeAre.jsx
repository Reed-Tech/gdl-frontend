import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import WwaWeb from './Wwa'
import { corporateInformationMobile } from '../pages/CorporateInformation'
import { Store, type as t } from '../context/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { WhyUsMobile } from '../pages/WhyUs'
import $ from 'jquery'
import Card from '../components/Card'
import { boardOfDirectorsData } from '../pages/BoardOfDirectors'
import { managementTeamData } from '../pages/ManagementTeam'
import FooterNav from '../components/FooterNav'
import MediaBG from '../assets/images/GdlBuilding.jpg'
import MediaBGTwo from '../assets/images/gdlStaff.jpg'



const WhoWeAre = (props) => {
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


    function boardOfDirectorsMobileHandler(e) {
        dispatch({ type: t.BOARD_OF_DIRECTORS_MOBILE, active: e })
    }
    function managementTeamMobileHandler(e) {
        dispatch({ type: t.MANAGEMENT_TEAM_MOBILE, active: e })
    }


    function boardOfDirectorsMobileContent() {
        return (
            <div style={{ height: `calc(100vh - ${state.WWAMobileModal === "BOARD OF DIRECTORS" ? '17em' : '19.7em'})`, margin: '0.89em 1.2em' }}>
                <div className='wwa_modal-image' style={{ backgroundImage: `url(${state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].image ? boardOfDirectorsData[state.boardOfDirectorsActive].image : null})`, marginBottom: '1.8em' }}></div>
                <Card scroll className='boardOfDirectors_card' height='calc(100vh - 35em)'>
                    {state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].text ? boardOfDirectorsData[state.boardOfDirectorsActive].text.map((e) => <p key={e}>{e}</p>) : null}
                </Card>
            </div>
        )
    }

    function managementTeamMobileContent() {
        return (
            <div style={{ height: `calc(100vh - ${state.WWAMobileModal === "BOARD OF DIRECTORS" ? '17em' : '19.7em'})`, margin: '0.89em 1.2em' }}>
                <div className='wwa_modal-image' style={{ backgroundImage: `url(${state.managementTeamActive && managementTeamData[state.managementTeamActive].image ? managementTeamData[state.managementTeamActive].image : null})`, marginBottom: '1.8em' }}></div>
                <OverlayScrollbarsComponent >
                    <Card scroll className='boardOfDirectors_card' height='calc(100vh - 35em)'>
                        {state.managementTeamActive && managementTeamData[state.managementTeamActive].text ? managementTeamData[state.managementTeamActive].text.map((e) => <p key={e}>{e}</p>) : null}
                    </Card>
                </OverlayScrollbarsComponent>
            </div>
        )
    }


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
    
    // _______________________________________________________________________________________
    const slideData = [
        {
            image: MediaBG,
            id: 1,
            h3: 'At GDL, we strive to bring you the best in the finance industry',
        },
        {
            image: MediaBGTwo,
            id: '2vms',
            h3: 'Some catchy message to wow our users',
        },
    
    ]

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.id}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                <div className="headerSlider_container-overlay">
                    <div className='headerSlider_container-text'>
                        <h3>{slides.h3}</h3>
                    </div>
                </div>
            </div>
        </section>)
    )


    return (
        <div className='home' id='home'>
            <div className='home_landingPage' id='landingPage'>
                <Navbar history={props.history} />
                <HeaderSocialLinks />
                <StockInfo />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
            </div>
            <WwaWeb />
            {/* who we are mobile ----------------------------- */}
            <div className="WWA_container_mobile" >
                <div id="who-we-are-mobile">
                    <div className="corp-wwa">
                        <h1>Corporate Infomation</h1>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            { corporateInformationMobile }
                        </OverlayScrollbarsComponent>
                    </div>
                    <div className="board-wwa">
                        <h1>Board Of Directors</h1>
                        <header>
                            <h1>{state.boardOfDirectorsActive}</h1>
                        </header>
                        { boardOfDirectorsMobileContent()}
                        <footer>
                            { boardOfDirectorsMobileNav}
                        </footer>
                    </div>
                    <div className="manage-wwa ">
                        <h1>Management team</h1>
                        <header>
                            <h1>{state.managementTeamActive}</h1>
                        </header>
                        { managementTeamMobileContent()}
                        <footer>
                            { managementTeamMobileNav}
                        </footer>
                    </div>

                    <div className="why-wwa">
                        <h1>Why Us</h1>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            {WhyUsMobile }
                        </OverlayScrollbarsComponent>
                    </div>

                </div>

            </div>
            <div className="foot-wwa ">
                <FooterNav />
                
            </div>
       
           
        </div>
    )
}

export default WhoWeAre