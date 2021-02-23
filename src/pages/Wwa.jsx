import React from 'react'
import BoardOfDirectors from './BoardOfDirectors'
import CorporateInformation from './CorporateInformation'
import WhyUs from './WhyUs'
import Xample from './Xample'


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
                <Xample />
            </div>
            <div className="why-wwa">
                <WhyUs />
            </div>
        </div>
    )
}

export default Wwa
