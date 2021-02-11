import React from 'react'
// import PageSlider from '../components/PageSlider'
import BoardOfDirectors from './BoardOfDirectors'
import CorporateInformation from './CorporateInformation'
import ManagementTeam from './ManagementTeam'
import WhyUs from './WhyUs'


const Wwa = (props) => {
    // const pages = ['CORPORATE INFORMATION', 'BOARD OF DIRECTORS', 'MANAGEMENT TEAM', 'WHY US/VALUE PROPOSITION']

    return (
       
        <div id='_wwa'>
            <div className="corp-wwa">
                <CorporateInformation />
            </div>
            <div className="board-wwa">
                <BoardOfDirectors />
            </div>
            <div className="manage-wwa">
                <ManagementTeam />
            </div>
            <div className="why-wwa">
                <WhyUs />
            </div>
           
           {/* <div id='who-we-are'>
                <PageSlider navLinks={pages} navRight>
                    <CorporateInformation />
                    <BoardOfDirectors />
                    <ManagementTeam />
                    <WhyUs />
                </PageSlider>
          </div> */}
           
        </div>
    )
}

export default Wwa
