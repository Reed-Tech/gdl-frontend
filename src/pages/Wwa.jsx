import React from 'react'
import PageSlider from '../components/PageSlider'
import BoardOfDirectors from './BoardOfDirectors'
import CorporateInformation from './CorporateInformation'
import ManagementTeam from './ManagementTeam'
import WhyUs from './WhyUs'

const WhoWeAre = (props) => {
    const pages = ['CORPORATE INFORMATION', 'BOARD OF DIRECTORS', 'MANAGEMENT TEAM', 'WHY US/VALUE PROPOSITION']

    return (
        <div id='who-we-are'>
            <PageSlider navLinks={pages} navRight>
                <CorporateInformation />
                <BoardOfDirectors />
                <ManagementTeam />
                <WhyUs />
            </PageSlider>
            
        </div>
    )
}

export default WhoWeAre
