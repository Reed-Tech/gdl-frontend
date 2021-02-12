import React from 'react'
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import FooterNav from '../components/FooterNav'
import Wwa from './Wwa.jsx'
import { corporateInformationMobile } from './CorporateInformation'
import { Store, type as t } from '../context/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { WhyUsMobile } from './WhyUs'
// import { boardOfDirectorsMobile } from './BoardOfDirectors'
import { FaChevronLeft } from 'react-icons/fa'
import $ from 'jquery'
import Card from '../components/Card'
import { boardOfDirectorsData } from './BoardOfDirectors'
import { managementTeamData } from './ManagementTeam'
import MediaBG from '../assets/images/GdlBuilding.jpg'
import MediaBGTwo from '../assets/images/gdlStaff.jpg'


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

const WhoWeAre = (props) => {
    const { state, dispatch } = React.useContext(Store)
    // console.log(props);

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.id}>
            <div className='headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
                {/* <div className='headerSlider_container-text headerSlider_container-h3 wwa-headSlider-h3'>
                    <h3>{slides.h3}</h3>
                </div> */}
                <div className="headerSlider_container-overlay">
                    <div className='headerSlider_container-text'>
                        <h3>{slides.h3}</h3>
                    </div>
                </div>
            </div>
        </section>)
    )




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
            }
        })
    }, [dispatch, state.showModal])



    // function handleWWANav(page) {
    //     dispatch({ type: t.WWA_MOBILE, payload: page }, [])
    // }

    // function handleWWAModal(e) {
    //     dispatch({ type: t.WWA_MOBILE_MODAL, payload: e })
    // }

    function boardOfDirectorsMobileHandler(e) {
        dispatch({ type: t.BOARD_OF_DIRECTORS_MOBILE, active: e })
    }
    function managementTeamMobileHandler(e) {   
        dispatch({ type: t.MANAGEMENT_TEAM_MOBILE, active: e })
    }


    function closeMobileModal(e) {
        if (e === 'WWA') dispatch({ type: t.WWA_MOBILE_MODAL, payload: '' })
        else console.log('argument cant be blank')

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
        <div className='_whoWeAre'>
            <header style={{ height: '100vh' }}>
                <Navbar />
                <HeaderSocialLinks customClass='HeaderSocialLinks contactUs_socialLinks' />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            <Wwa />
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


            {/* <div className={`WWA_container __mobileOnly`} style={{ scrollSnapAlign: 'start', height: '100vh' }}>
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
            </div> */}
            

            {/* my version */}
           
            <div className="WWA_container __mobileOnly py-5" style={{ scrollSnapAlign: 'start', height: '100vh' }}>
                <div id="what-we-do-mobile">
                    <div className="corp-wwa">
                        <header>
                            <h1>Corporate Infomation</h1>
                        </header>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            { corporateInformationMobile }
                        </OverlayScrollbarsComponent>
                    </div>
                    {/* <div className="board-wwa">
                        <header>
                            <h1>Board Of Directors</h1>
                        </header>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            {corporateInformationMobile }
                        </OverlayScrollbarsComponent>
                    </div>
                  
                    <div className="manage-wwa">
                        <header>
                            <h1>Management Team</h1>
                        </header>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            { corporateInformationMobile }
                        </OverlayScrollbarsComponent>
                    </div> */}
                    <div className="why-wwa">
                        <header>
                            <h1>Why Us</h1>
                        </header>
                        <OverlayScrollbarsComponent  style={{ height: 'calc(100vh - 17em)', margin: '1em 1.2em' }}>
                            {WhyUsMobile }
                        </OverlayScrollbarsComponent>
                    </div>

                </div>

            </div>
            <div className="foot-wwa d-none d-md-block">
                  <FooterNav />
                
            </div>
        </div>
    )
}

export default WhoWeAre
