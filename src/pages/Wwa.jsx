import React from 'react'
import BoardOfDirectors from './BoardOfDirectors'
import CorporateInformation from './CorporateInformation'
import ManagementTeam from './ManagementTeam'
import WhyUs from './WhyUs'


const Wwa = (props) => {
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
        </div>
    )
}

export default Wwa
