import React, { useContext, useEffect } from 'react'

import Card from '../components/Card'
import { Store, type as t } from '../context/store'
import Avatar from '../assets/images/Avatar.png'
import Kolade from '../assets/images/9b253ad50b9eb887c6011a0a17b0444e.png'
import Oyekemi from '../assets/images/cf635ca96661303335c62f862c1611f4.png'
import Peter from '../assets/images/Peter.png'
import Tunde from '../assets/images/Tunde.png'
import Henry from '../assets/images/Henry.png'
import Ofonama from '../assets/images/Ofonama.png'
import Perpetual from '../assets/images/Perpetual.png'
import Oluyemi from '../assets/images/Oluyemi.png'

const error = {
    about: 'Please complete the About section in the form.',
    image: Avatar
}

const managementTeamData = {
    'Kolawole Ayeye': {
        id: 'Kolawole Ayeye',
        name: 'Kolawole Ayeye',
        text: ['Kola is a seasoned professional with over thirty years experience in Banking, Financial Services, Audit and Advisory Services. Before returning to the Board of GDL, he served as Executive Director of Asset Management Corporation of Nigeria (AMCON) with responsibility for recoveries and resolutions, a role central to the Corporation’s mandate of recovering bad loans acquired from banks. In addition to significantly improving recoveries through various initiatives, his team made significant contributions to the restructure and deployment of major assets and entities in the aviation and oil service sectors. Prior to that, he was appointed by the banking regulators to the Board of Mainstreet Bank. Mainstreet Bank was one of three banks acquired by regulators in 2011 consequent to solvency and liquidity problems. The Board and Management succeeded in its mandate to turn the bank around and sell to new owner. Much earlier, he was a key member of the team that recapitalized and turned around National Bank of Nigeria, hitherto deemed terminally and irredeemably distressed. He joined the bank as General Manager after its recapitalization in 2000, and became Chief Executive in 2003. He resigned in the course of the merger of the bank with two other banks as part of the consolidation of the Nigerian banking industry. In 2014, Mr. Ayeye arranged the recapitalisation of Express Discount Asset Management (EDAM) and led the recommencement of business with a new strategic direction before his appointment to the Board of AMCON by the President of the Federal Republic of Nigeria in 2015. He returned in February 2018 to serve as Group Managing Director/Chief Executive of GDL (formerly EDAM) to champion delivery of our intent to strengthen and expand the middle class. Kola is a chartered accountant with a first degree in Accountancy and a Masters degree in Finance, and is an alumnus of Lagos Business School, Institute of Management Development Lausanne Switzerland, and Harvard Business School. He is committed to the highest ethical standards and brings a network of skills, contacts and resources to GDL.'],
        image: Kolade
    },
    'Oyekemi Ayeye': {
        id: 'Oyekemi Ayeye',
        name: 'Oyekemi Ayeye',
        text: ['Oyekemi holds an MBA from the prestigious Lagos Business School (Pan African University) and B.Pharm from the University of Ife. She is also a trained Oracle Certified Application Developer. Her experience spans twenty years in various fields including Pharmacy, Software Development and Business Management. She is a well experienced and an astitute business administrator. She brings on board her skills in the areas of strategic planning, operations and project management.'],
        image: Oyekemi,
    },
    'Peter Shodipo': {
        id: 'Peter Shodipo',
        name: 'Peter Shodipo',
        text: ['Prior to joining GDL, Peter worked with Stanbic IBTC and Chartered Bank Plc. He has banking and investment advisory experience spanning over a period of fifteen years. He is Fellow (FCA) member of The Institute of Chartered Accountants of Nigeria (ICAN) and an Associate member of Chartered Institute of Taxation of Nigeria (CITN). He is also a certified Forensic Accountant (CFA) and a member of the Chartered Institute of Bankers of Nigeria (CIBN). He holds an MBA degree from Obafemi Awolowo University, Ile-Ife. He is also certified by the Balanced Scorecard Institute USA as a Balanced Scorecard Professional (BSP) and holds ACCA in International Financial Reporting Standards (IFRS). He is currently the president of Committee of Chief Compliance Association of Capital Market Operators in Nigeria (CCCOCIN).'],
        image: Peter
    },
    'Tunde Thomas': {
        id: 'Tunde Thomas',
        name: 'Tunde Thomas',
        text: ['Tunde is an experienced investment banker with a bachelor’s degree in economics and MBA both from Obafemi Awolowo University, Ile-Ife. He has over 15 years industry experience in banking and has attended various courses both locally and internationally including the prestigious Stanford Graduate Business School. He joined GDL in March from Weiji Capital LLC, where he was the Director of Deal Originations for West Africa.'],
        image: Tunde,
    },
    'Henry Ogbuaku': {
        id: 'Henry Ogbuaku',
        name: 'Henry Ogbuaku',
        text: ['Henry joined GDL from Fidelity Union Securities Limited (FUSL) (a subsidiary of Fidelity Bank Plc) where he was Head of Research. Prior to joining GDL, he lectured at the department of Economics, University of Lagos. Henry holds a B.Sc in Economics from the University of Benin and a Masters? Degree in Economics from the University of Ibadan. He has also attended various professional trainings and conferences in advanced financial analysis and investment management. Henry is also a student member of the Chartered Institute of Stockbrokers.'],
        image: Henry
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

}

const navText = Object.keys(managementTeamData)

const ManagementTeam = (props) => {

    const { state, dispatch } = useContext(Store)
    useEffect(() =>
        dispatch({ type: t.MANAGEMENT_TEAM, nav: navText.map((e) => e), active: navText[0] })
        , [dispatch])

    let NavItems = state.managementTeamNav.map((e) => <li className={`${e === state.managementTeamActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.MANAGEMENT_TEAM, nav: navText.map((e) => e), active: e })} key={e}>{e}</li>)


    return (
        <section className='managementTeam'>
            <h1>MANAGEMENT TEAM</h1>
            <div className='d-lg-flex justify-content-between ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
                <div className='row d-flex managementTeam_container'>
                    <Card maxHeight='calc(100vh - 20em)' className='col-lg-6 managementTeam_card'>
                        {state.managementTeamActive && managementTeamData[state.managementTeamActive].text ? managementTeamData[state.managementTeamActive].text.map((e) => <p key={e}>{e}</p>) : error.about}
                        {/* <p>
                            Dr Denloye retired in December 2006 as the Group Managing Director of Telnet Nigeria Limited, a leading ICT company that she co-founded in 1986.
                        </p>
                        <p>
                            She holds a PhD in Electronic Engineering from the University of Hull, UK. She is a registered Engineer (Council for the Regulation of Engineering in Nigeria), a Fellow of the Nigerian Society of Engineers, and a Fellow of the Nigerian Academy of Engineering.
                        </p>
                        <p>
                            Though her professional career has been in ICT, her competence and experience founding and running a successful business provided her with broad expertise in strategy formulation, policy making and conformance and executive supervision, enabling her to add value across other industry sectors. This has led to appointments to serve on the Corporate and Advisory boards of both profit and not-for profit organisations. These include Ecobank Nigeria, Enterprises Development Centre (Pan Atlantic University) and the Lagos Business School Alumni Association. Current Board membership include GDL Asset Management Ltd on which she serves as Chairperson, Leap Africa, CDNet Ltd and most recently, the IE Fund.
                        </p>
                        <p>
                            Dr Denloye is an alumna of the Lagos Business School, the Cranfield School of Management (Business Leaders Programme) and also of the Haggai Institute and RCCG’s International Bible Institute and Leadership Training School.
                        </p> */}
                    </Card>
                    <div className='col-lg-4 managementTeam_image' style={{ backgroundImage: `url(${state.managementTeamActive && managementTeamData[state.managementTeamActive].image ? managementTeamData[state.managementTeamActive].image : error.image})` }}>
                        {/* <img src={Dr} alt="Dr"/> */}
                    </div>
                    <div className='col-lg-2'>
                        <ul>
                            {NavItems}
                        </ul>
                    </div>
                </div>

            </div>



        </section >
    )
}

export default ManagementTeam

