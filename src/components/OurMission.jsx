import React from 'react'
import CardImage from './CardImage'
import CAF from '../assets/images/CAF.png'
import IAF from '../assets/images/IAF.png'


const cardData = [
    { name: 'CORPORATE ACCOUNT FORM', image: CAF, link: 'https://mystifying-goodall-2b93ae.netlify.app/corporate', },
    { name: 'INDIVIDUAL ACCOUNT FORM', image: IAF, link: 'https://mystifying-goodall-2b93ae.netlify.app/individual', },
]

const OurMission = (props) => {

    return (
        <div className='ourMission text-center '>
            <div className="row text-center ">
                <div className="col-lg-6 col-sm-12 ourMission_mission">
                    <div className="ourMission_mission--left">
                        <h1>{props.header ?? 'Our Mission'}</h1>
                        <p>{props.body ?? `Providing unique financial solutions to \n strengthen and expand the middle class`}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 ourMission_createAccount">
                    <h1 className='text-sm-left mt-5 mt-lg-0 text-lg-center'>Open an account</h1>
                    <p>Choose an account that is right for you and fill in your details to login</p>
                    <div className='ourMission_createAccount-cards mt-5 justify-content-lg-center justify-content-sm-start'>
                        {cardData.map((e) =>
                            <CardImage onClick={()=> console.log(e.link)} key={e.name} width='180px' image={e.image}>
                                <h3><a href={e.link}>{e.name}</a> </h3>
                            </CardImage>
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurMission
