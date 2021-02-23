import React from 'react'
import PageSlider from '../components/PageSlider'
import XampleModal from '../components/XampleModal'
import ManagementTeamInfo from './ManagementTeamInfo'
import { Store, type as t } from '../context/store'




const Xample = (props) => {
    const pages = ['Management Team',]
    const { dispatch } = React.useContext(Store)
    const afterChange = function (index) {
        dispatch({ type: t.WHAT_WE_DO_MODAL_POSITION, index })
    }



    return (
        <div id='_wwa'>
            <XampleModal {...props} />
            <PageSlider afterChange={afterChange} navLinks={pages}>
                <ManagementTeamInfo {...props} />
            </PageSlider>
        </div>
    )
}

export default Xample
