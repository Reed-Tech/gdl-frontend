import React from 'react'
import CardImage from './CardImage'
import SmartSavingImg from '../assets/images/SmartSaving.png'
import StockBG from '../assets/images/assetManagement1s.png'
import SiaBG from '../assets/images/SIA.png'
import MMF from '../assets/images/MMF.png'
import CAF from '../assets/images/CAF.png'
import IAF from '../assets/images/IAF.png'


const cardData = [
    { name: 'GDL STOCKBROKING FORM', image: StockBG, link: '/#', },
    { name: 'GDL SIA FORM', image: SiaBG, link: '/#', },
    { name: 'MMF APPLICATION FORM', image: MMF, link: '/#', },
    { name: 'SMART SAVE ACCOUNT FORM', image: SmartSavingImg, link: '/#', },
    { name: 'CORPORATE ACCOUNT FORM', image: CAF, link: '/#', },
    { name: 'INDIVIDUAL ACCOUNT FORM', image: IAF, link: '/#', },
]

const OurMission = (props) => {

    return (
        <div className='ourMission d-flex flex-wrap'>
            <div className="col-lg-5 col-sm-12 ourMission_mission">
                <div>
                    <h1>{props.header ?? 'Our Mission'}</h1>
                    <p>{props.body ?? 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                </div>
            </div>
            <div className="col-lg-7 col-sm-12 ourMission_createAccount">
                <h1 className='text-sm-left mt-5 mt-lg-0 text-lg-center'>Create your Account Now</h1>
                <div className='ourMission_createAccount-cards justify-content-lg-center justify-content-sm-start'>
                    {cardData.map((e) =>
                        <CardImage key={e.name} width='180px' image={e.image}>
                            <h3>{e.name}</h3>
                        </CardImage>
                    )}

                </div>
            </div>
        </div>
    )
}

export default OurMission
