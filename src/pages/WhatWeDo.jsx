import React from 'react'
import PageSlider from '../components/PageSlider'
import AssetsManagement from './AssetsManagement'
import FinanceAndLeasing from './FinanceAndLeasing'

const WhatWeDo = () => {
    const pages =['ASSET MANAGEMENT', 'FINANCE AND LEASING']
    return (
        <div id='whatWeDo'>
            <PageSlider navLinks={pages}>
                <AssetsManagement/>
                <FinanceAndLeasing/>
            </PageSlider>
        </div>
    )
}

export default WhatWeDo
