import React from 'react'
import pdfImg from '../assets/images/APRIL CONSUMER PRICE INDEX (CPI) REPORT.pdf'

function ResearchCards() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <div className='researchCards'>
                        <div className='researchCards_body text-center'> 
                            <h4><a href={pdfImg}>APRIL CONSUMER PRICE INDEX (CPI) REPORT</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResearchCards
