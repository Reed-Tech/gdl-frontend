import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { Store, type as t } from '../context/store'
import Dr from '../assets/images/8fa87559155b21ac0abb674e3697ea3e.png'
import Avatar from '../assets/images/Avatar.png'
import Kolade from '../assets/images/9b253ad50b9eb887c6011a0a17b0444e.png'
import Christiana from '../assets/images/de784d755551f57dfc92a03d54efad0e.png'
import Farouk from '../assets/images/add55e6563af7e1d76c4e8bb7ebc3ed6.png'
import Lanre from '../assets/images/548de7423306da262d7f182c28c511d6.png'
import Oyekemi from '../assets/images/cf635ca96661303335c62f862c1611f4.png'

const error = {
    about: 'Please complete the About section in the form.',
    image: Avatar
}

const boardOfDirectorsData = {
    'Dr Nadu Denloye': {
        id: 'Dr Nadu Denloye',
        name: 'Dr Nadu Denloye',
        text: [
            '  Dr Denloye retired in December 2006 as the Group Managing Director of Telnet Nigeria Limited, a leading ICT company that she co-founded in 1986.',
            'She holds a PhD in Electronic Engineering from the University of Hull, UK. She is a registered Engineer (Council for the Regulation of Engineering in Nigeria), a Fellow of the Nigerian Society of Engineers, and a Fellow of the Nigerian Academy of Engineering.',
            'Though her professional career has been in ICT, her competence and experience founding and running a successful business provided her with broad expertise in strategy formulation, policy making and conformance and executive supervision, enabling her to add value across other industry sectors. This has led to appointments to serve on the Corporate and Advisory boards of both profit and not-for profit organisations. These include Ecobank Nigeria, Enterprises Development Centre (Pan Atlantic University) and the Lagos Business School Alumni Association. Current Board membership include GDL Asset Management Ltd on which she serves as Chairperson, Leap Africa, CDNet Ltd and most recently, the IE Fund.',
            'Dr Denloye is an alumna of the Lagos Business School, the Cranfield School of Management (Business Leaders Programme) and also of the Haggai Institute and RCCG’s International Bible Institute and Leadership Training School.'
        ],
        image: Dr
    },
    'Kolawole Ayeye': {
        id: 'Kolawole Ayeye',
        name: 'Kolawole Ayeye',
        image: Kolade,
        text: ['Kola is a seasoned professional with over thirty years’ experience in Banking, Financial Services, Audit and Advisory Services. Before returning to the Board of GDL, he served as Executive Director of Asset Management Corporation of Nigeria (AMCON) with responsibility for recoveries and resolutions, a role central to the Corporation’s mandate of recovering bad loans acquired from banks. In addition to significantly improving recoveries through various initiatives, his team made significant contributions to the restructure and deployment of major assets and entities in the aviation and oil service sectors. Prior to that, he was appointed by the banking regulators to the Board of Mainstreet Bank. Mainstreet Bank was one of three banks acquired by regulators in 2011 consequent to solvency and liquidity problems. The Board and Management succeeded in its mandate to turn the bank around and sell to new owner. Much earlier, he was a key member of the team that recapitalized and turned around National Bank of Nigeria, hitherto deemed terminally and irredeemably distressed. He joined the bank as General Manager after its recapitalization in 2000, and became Chief Executive in 2003. He resigned in the course of the merger of the bank with two other banks as part of the consolidation of the Nigerian banking industry. In 2014, Mr. Ayeye arranged the recapitalisation of Express Discount Asset Management (EDAM) and led the recommencement of business with a new strategic direction before his appointment to the Board of AMCON by the President of the Federal Republic of Nigeria in 2015. He returned in February 2018 to serve as Group Managing Director/Chief Executive of GDL (formerly EDAM) to champion delivery of our intent to strengthen and expand the middle class. Kola is a chartered accountant with a first degree in Accountancy and a Masters degree in Finance, and is an alumnus of Lagos Business School, Institute of Management Development Lausanne Switzerland, and Harvard Business School. He is committed to the highest ethical standards and brings a network of skills, contacts and resources to GDL.']
    },
    'Christiana Bamidele': {
        id: 'Christiana Bamidele',
        image:Christiana,
        name: 'Christiana Bamidele George',
        text: ['Christiana Bamidele George graduated from Ahmadu Bello University, Zaria, where she graduated with a Bachelor of Science degree (B.Sc.) in Accountancy. She worked in First Bank Nigeria Plc in 1985 and later established the Strong Tower Mission, a Christian charity organization aimed at caring for the underprivileged in the society. Further to this, she established the Little Saints Orphanage which is a sister outreach of the Strong Tower Mission. The strong Tower Mission has since been a formidable tool in assisting the poor, indigent and disadvantaged in the society. Strong Tower Centre is perhaps the foremost charity organization in Nigeria.']
    },
    'Senator Farouk Bello': {
        id: 'Senator Farouk Bello',
        image: Farouk,
        name: 'Senator Farouk Bello Bunza',
        text: ['Farouk holds a MSC degree in Economics with specialization in monetary policy from the University of Lagos and a BSC degree from the University of Sokoto. He has also attended several development program at Harvard Business school and Euro Money London among others. He is a Banker with remarkable achievements in financial and banking operations with over 20 years in the banking industry. More Specifically, he served on the Board of Guaranty Trust Bank (GTB) where he played a significant role in formulating GTBs policies, vision, and strategy for growth, monitoring and delivering beyond set targets. He was a key member of the Management Credit Committee with responsibility for initiating and embedding an enterprise-wide risk management framework culture in all GTBs business operations, services, product offerings, and decisions making, with the ultimate aim of maximizing profitability. His experience and leadership roles span across the public and private sector business including regulatory bodies and private businesses. Farouk was a senator of the Federal Republic of Nigeria, representing Kebbi North constituency from the year 2003 -2007. While in the National Assembly as a Senator, Farouk was a prominent member of committees on Finance, Privatisation, Banking, Capital Markets, and Oil & Gas. He has a track record in successfully shaping and delivering business process and financial solutions in various business sectors. In the industry, he has acquired an enviable reputation built on a solid foundation of integrity, professionalism, value adding service delivery and excellent leadership skills. Farouk is currently the Managing Director/ Chief Executive Officer of Hampton Apartments & Residential.']
    },
    'Lanre Olaoluwa': {
        id: 'Lanre Olaoluwa',
        name: 'Lanre Olaoluwa',
        image: Lanre,
        text: ['Lanre is the Managing Partner of Matrix-Solicitors LLP whose thorough-thinking habit and ability to cut through complexities to produce legal solutions has characterized his nearly three decades of legal practice - in the Court room and the Board room. He graduated in Law with Honours from the University of Ife, Ile-Ife, Nigeria and was called to the Nigerian Bar in 1987. He thereafter completed a course in Management at the Lagos School of Business of the Pan African University. Lanre taught Law at the Lagos State University - and with his penchant for practical pedagogy, at the Nigerian Institute of Advance Legal Studies as a yearly resource person on Commercial Law and Practice, with a focus on Information Technology Law. He was resource person on Nigerian Law and Practice at the 2004 International Bar Association (IBA) Conference in New Zealand and to the official Nigerian delegation - NNPC at the 2004 Offshore Technology Conference in Houston, USA. Aside from providing expert advice in a wide array of sectors in Business, Technology, Finance, Power, Government Regulatory policies, transaction structuring, documentation and taxation, Lanre?s civil and criminal litigation practice in Nigeria has led the Firm (Matrix-Solicitors) in milestone cases and transactions for a clientele base ranging from multinationals to local start-ups, for whom he has successfully handled intricate deals and cases before State and Federal Courts, Administrative Tribunals and has arbitrated domestic and international matters under the ICC, LCIA, GAFTA and ad hoc Rules. Among other professional bodies, Lanre is a member of the Nigerian Bar Association and the International Bar Association']
    },
    'Oyekemi Ayeye': {
        id: 'Oyekemi Ayeye',
        name: 'Oyekemi Ayeye',
        image: Oyekemi,
        text: ['Oyekemi holds an MBA from the prestigious Lagos Business School (Pan African University) and B.Pharm from the University of Ife. She is also a trained Oracle Certified Application Developer. Her experience spans twenty years in various fields including Pharmacy, Software Development and Business Management. She is a well experienced and an astitute business administrator. She brings on board her skills in the areas of strategic planning, operations and project management.']
    },

}

const navText = Object.keys(boardOfDirectorsData)


const BoardOfDirectors = () => {

    const { state, dispatch } = useContext(Store)
    useEffect(() =>
        dispatch({ type: t.BOARD_OF_DIRECTORS, nav: navText.map((e) => e), active: navText[0] })
        , [dispatch], null)

    let NavItems = state.boardOfDirectorsNav.map((e) => <li className={`${e === state.boardOfDirectorsActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.BOARD_OF_DIRECTORS, nav: navText.map((e) => e), active: e })} key={e}>{e}</li>)




    return (
        <section className='boardOfDirectors'>
            <h1>BOARD OF DIRECTORS</h1>
            <div className='d-lg-flex justify-content-between ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
                <div className='row d-flex boardOfDirectors_container'>
                    <Card className='col-lg-6 boardOfDirectors_card'>
                        {state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].text ? boardOfDirectorsData[state.boardOfDirectorsActive].text.map((e) => <p key={e}>{e}</p>) : error.about}
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
                    <div className='col-lg-4 boardOfDirectors_image' style={{ backgroundImage: `url(${state.boardOfDirectorsActive && boardOfDirectorsData[state.boardOfDirectorsActive].image ? boardOfDirectorsData[state.boardOfDirectorsActive].image : error.image})` }}>
                        {/* <img src={Dr} alt="Dr"/> */}
                    </div>
                    <div className='col-lg-2'>
                        <ul>
                            {NavItems}
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default BoardOfDirectors
