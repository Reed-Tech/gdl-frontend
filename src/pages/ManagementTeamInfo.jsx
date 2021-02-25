import React, { useEffect } from 'react'
import Kolade from '../assets/images/9b253ad50b9eb887c6011a0a17b0444e.png'
import Oyekemi from '../assets/images/cf635ca96661303335c62f862c1611f4.png'
import Ofonama from '../assets/images/Ofonama.png'
import Perpetual from '../assets/images/Perpetual.png'
import Oluyemi from '../assets/images/Oluyemi.png'
import Josephine from '../assets/images/cf635ca96661303335c62f862c1611f4.png'
import ImageCircle from '../components/ImageCircle'
import UnderlayText from '../components/UnderlayText'
import { Store, type as t } from '../context/store'



const assetManagementCards = [
    // ID Text used for  Nav Links Text  .... i don't have strength please😐 
    { id: 'Kolawole Ayeye', text: <p> Kolawole Ayeye<br />View Profile</p>, icon: Kolade },
    { id: 'Oyekemi Ayeye', text: <p>Oyekemi Ayeye <br />View Profile</p>,  icon: Oyekemi },
    { id: 'Ofonama Joshua', text: <p>Ofonama Joshua <br /> View Profile</p>, icon: Ofonama },
    { id: 'Perpetual Anagha', text: <p>Perpetual Anagha <br /> View Profile</p>, icon: Perpetual },
    { id: 'Oluyemi Adekoya', text: <p>Oluyemi Adekoya <br /> View Profile</p>, icon: Oluyemi },
    { id: 'Josephine Ernest-Ikechukwu', text: <p>Josephine Ernest-Ikechukwu<br /> View Profile</p>, icon: Josephine },
]

export const managementTeamData = {
    'Kolawole Ayeye': {
        id: 'Kolawole Ayeye',
        name: 'Kolawole Ayeye',
        text: ['Yemi is an Information Systems Architect with tertiary degrees in Chemical Engineering, Computing and Information Systems. His working experience spans across Manufacturing, Telecoms, Oil &amp; Gas, and Finance sectors of the Nigerian Economy. Apart from possessing several vendor-specific certifications which include Microsoft &amp; Cisco, he is also a member of ISACA (Information Security Audit and Control Association) as a Certified Information Systems Auditor (CISA). He is certified by the Balanced Scorecard Institute USA as a Balanced Scorecard Professional (BSP).'],
        image: Kolade
    },
    'Oyekemi Ayeye': {
        id: 'Oyekemi Ayeye',
        name: 'Oyekemi Ayeye',
        text: ['Oyekemi holds an MBA from the prestigious Lagos Business School (Pan African University) and B.Pharm from the University of Ife. She is also a trained Oracle Certified Application Developer. Her experience spans twenty years in various fields including Pharmacy, Software Development and Business Management. She is a well experienced and an astitute business administrator. She brings on board her skills in the areas of strategic planning, operations and project management.'],
        image: Oyekemi,
    },
    'Ofonama Joshua': {
        id: 'Ofonama Joshua',
        name: 'Ofonama Joshua',
        text: ['Ofonama’s career in finance began in Accenture (formerly Anderson Consulting), before moving to National Bank of Nigeria, where she rose to Banking officer. She left National Bank to Fidelity Bank where she rose to be a deputy branch manager. She joined the GDL team from Keystone Bank Limited where she was the Branch Manager (Oregun Branch). Ofonama has a Masters in Business Administration (MBA) from the University of Calabar and has attended numerous trainings covering customer service, credit risk management & debt recovery strategy, understanding financial markets, asset and liability management amongst others over the course of her career. With over fifteen years of experience, she brings on board her skills in the areas of strategic planning and treasury management.'],
        image: Ofonama
    },
    'Perpetual Anagha': {
        id: 'Perpetual Anagha',
        name: 'Perpetual Anagha',
        text: ['Perpetual brings to the GDL team her extensive experience in the consulting industry where she provided audit and advisory services to various international and indigenous clients, including companies quoted on the Nigerian Stock Exchange and affiliates of US SEC companies, while working for KPMG Nigeria. She and her team proffered relevant recommendations which significantly improved clients’ processes and enhanced their performance results. She is an Associate of the Institute of Chartered Accountants of Nigeria (ICAN) and has been trained both locally and internationally.'],
        image: Perpetual
    },
    'Oluyemi Adekoya': {
        id: 'Oluyemi Adekoya',
        name: 'Oluyemi Adekoya',
        text: ['Yemi is an Information Systems Architect with tertiary degrees in Chemical Engineering, Computing and Information Systems. His working experience spans across Manufacturing, Telecoms, Oil & Gas and Finance sectors of the Nigerian Economy. He currently is the Head, Strategy and Information Systems in EDAM Nigeria. Apart from possessing several vendor specific certifications which include Microsoft & Cisco, he is also a member of ISACA (Information Security Audit and Control Association) as a Certified Information Systems Auditor (CISA). He is certified by the Balanced Scorecard Institute USA as a Balanced Scorecard Professional (BSP).'],
        image: Oluyemi
    },
    'Josephine Ernest-Ikechukwu': {
        id: 'Josephine Ernest-Ikechukwu',
        name: 'Josephine Ernest-Ikechukwu',
        text:['Josephine joined GDL with over 10 years experience from Ecobank Development Securities EDC, where she served in various department from Client service to Retail marketing and Institutional marketing from 2006 to 2018 November. Josephine is a graduate of Nnamdi Azikwe University from the French department and speaks fluently, she joins GDL with vast knowledge both in Money Market and Capital market dynamics and client winning strategies. Josephine is a student member of the Chartered Institute of Stockbrokers where she has concluded her 1st level to become a Chartered Stockbroker. She has attended various trainings both within the country and outside Nigeria, from Lagos Business School(LBS) and Euromoney Consultant.'],
        image: Ofonama
    },

}


const navText = Object.keys(managementTeamData)



const ManagementTeamInfo = (props) => {


    const { state, dispatch } = React.useContext(Store)
    React.useEffect(() => dispatch({ type: t.ASSET_MANAGEMENT, payload: assetManagementCards.map(e => e.id) }), [dispatch])

    const cardImageHandler = (e) => {
        dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })
        state.whatWeDoModalPosition === 0 ? dispatch({ type: t.ASSET_MANAGEMENT, payload: assetManagementCards.map(e => e.id) }) : console.log();
            // console.log('Bug Found');
    }

    useEffect(() =>
        dispatch({ type: t.MANAGEMENT_TEAM, nav: navText.map((e) => e), active: navText[0] })
        , [dispatch])


    return (
        <section >
            <div class="container">
                <div class="row mx-auto text-center">
                    <div className="col-12 text-center">
                        <div className=' row justify-content-center align-content-center'>
                            {assetManagementCards.map((e) =>
                                <div key={e.id} className='col-4' id={e.id} >
                                     <ImageCircle image={e.icon}  onClick={() => cardImageHandler(e.id)}>
                                    </ImageCircle>
                                    <UnderlayText  onClick={() => cardImageHandler(e.id)}>
                                        {e.text}
                                    </UnderlayText>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManagementTeamInfo
