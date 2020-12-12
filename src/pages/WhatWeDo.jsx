import React from 'react'
import PageSlider from '../components/PageSlider'
import WhatWeDoModal from '../components/WhatWeDoModal'
import AssetsManagement from './AssetsManagement'
import FinanceAndLeasing from './FinanceAndLeasing'
import { Store, type as t } from '../context/store'




const WhatWeDo = (props) => {
    const pages = ['ASSET MANAGEMENT', 'FINANCE AND LEASING',]
    const {  dispatch } = React.useContext(Store)
    const afterChange = function (index) {
        dispatch({ type: t.WHAT_WE_DO_MODAL_POSITION, index })
    }

    return (
        <div id='whatWeDo'>
            <WhatWeDoModal {...props} />
            <PageSlider afterChange={afterChange} navLinks={pages}>
                <AssetsManagement {...props} />
                <FinanceAndLeasing />
            </PageSlider>
        </div>
    )
}

export default WhatWeDo
