import React, { useContext } from "react"
import { Store, type as t } from '../context/store'
import Card from '../components/Card'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import Slider from 'react-slick'
import { Button } from "react-bootstrap"


const settings = {
    dots: true,
    fade: false,
    dotsClass: "whatWeDoModal_dots",
    accessibility: true,
    speed: 900,
    slidesToScroll: 4,
    variableWidth: false,
    autoplay: false,
    cssEase: "ease-in-out",
    focusOnSelect: false,
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

}

export const whatWeDoCardTexts = {
    'Kolawole Ayeye': [
        'Kola is a seasoned professional with over thirty years experience in Banking, Financial Services, Audit and Advisory Services. Before returning to the Board of GDL, he served as Executive Director of Asset Management Corporation of Nigeria (AMCON) with responsibility for recoveries and resolutions, a role central to the Corporation’s mandate of recovering bad loans acquired from banks. In addition to significantly improving recoveries through various initiatives, his team made significant contributions to the restructure and deployment of major assets and entities in the aviation and oil service sectors. Prior to that, he was appointed by the banking regulators to the Board of Mainstreet Bank. Mainstreet Bank was one of three banks acquired by regulators in 2011 consequent to solvency and liquidity problems. The Board and Management succeeded in its mandate to turn the bank around and sell to new owner. Much earlier, he was a key member of the team that recapitalized and turned around National Bank of Nigeria, hitherto deemed terminally and irredeemably distressed. He joined the bank as General Manager after its recapitalization in 2000, and became Chief Executive in 2003. He resigned in the course of the merger of the bank with two other banks as part of the consolidation of the Nigerian banking industry. In 2014, Mr. Ayeye arranged the recapitalisation of Express Discount Asset Management (EDAM) and led the recommencement of business with a new strategic direction before his appointment to the Board of AMCON by the President of the Federal Republic of Nigeria in 2015. He returned in February 2018 to serve as Group Managing Director/Chief Executive of GDL (formerly EDAM) to champion delivery of our intent to strengthen and expand the middle class. Kola is a chartered accountant with a first degree in Accountancy and a Masters degree in Finance, and is an alumnus of Lagos Business School, Institute of Management Development Lausanne Switzerland, and Harvard Business School. He is committed to the highest ethical standards and brings a network of skills, contacts and resources to GDL.'
    ], 
    'Oyekemi Ayeye': [ 
        'Oyekemi holds an MBA from the prestigious Lagos Business School (Pan African University) and B.Pharm from the University of Ife. She is also a trained Oracle Certified Application Developer. Her experience spans twenty years in various fields including Pharmacy, Software Development and Business Management. She is a well experienced and an astitute business administrator. She brings on board her skills in the areas of strategic planning, operations and project management.'
    ],
    'Ofonama Joshua': [
        'Ofonama’s career in finance began in Accenture (formerly Anderson Consulting), before moving to National Bank of Nigeria, where she rose to Banking officer. She left National Bank to Fidelity Bank where she rose to be a deputy branch manager. She joined the GDL team from Keystone Bank Limited where she was the Branch Manager (Oregun Branch). Ofonama has a Masters in Business Administration (MBA) from the University of Calabar and has attended numerous trainings covering customer service, credit risk management & debt recovery strategy, understanding financial markets, asset and liability management amongst others over the course of her career. With over fifteen years of experience, she brings on board her skills in the areas of strategic planning and treasury management.'
    ],
    'Perpetual Anagha': [
        'Perpetual brings to the GDL team her extensive experience in the consulting industry where she provided audit and advisory services to various international and indigenous clients, including companies quoted on the Nigerian Stock Exchange and affiliates of US SEC companies, while working for KPMG Nigeria. She and her team proffered relevant recommendations which significantly improved clients’ processes and enhanced their performance results. She is an Associate of the Institute of Chartered Accountants of Nigeria (ICAN) and has been trained both locally and internationally.'
    ],
    'Oluyemi Adekoya': [
        'Yemi is an Information Systems Architect with tertiary degrees in Chemical Engineering, Computing and Information Systems. His working experience spans across Manufacturing, Telecoms, Oil & Gas and Finance sectors of the Nigerian Economy. He currently is the Head, Strategy and Information Systems in EDAM Nigeria. Apart from possessing several vendor specific certifications which include Microsoft & Cisco, he is also a member of ISACA (Information Security Audit and Control Association) as a Certified Information Systems Auditor (CISA). He is certified by the Balanced Scorecard Institute USA as a Balanced Scorecard Professional (BSP).'
    ],
    'Josephine Ernest-Ikechukwu':[
        'Josephine joined GDL with over 10 years experience from Ecobank Development Securities EDC, where she served in various department from Client service to Retail marketing and Institutional marketing from 2006 to 2018 November. Josephine is a graduate of Nnamdi Azikwe University from the French department and speaks fluently, she joins GDL with vast knowledge both in Money Market and Capital market dynamics and client winning strategies. Josephine is a student member of the Chartered Institute of Stockbrokers where she has concluded her 1st level to become a Chartered Stockbroker. She has attended various trainings both within the country and outside Nigeria, from Lagos Business School(LBS) and Euromoney Consultant.'
    ],

    'HIGH YIELD NOTE': [
        'Our high yield investment product offers competitive interest rates, no maintenance fees, no hidden charges and guaranteed safety. ',
        'The high yield plan is very flexible and you can withdraw all your funds even before the agreed maturity date in case of emergencies.  Interest can be paid monthly or at once depending on preference.',
        'You can sleep with both eyes closed; all your funds are safe with us.',
        'Our special team of wealth managers work round the clock to ensure all our investors earn the rewards of their investments and even more.',
        'We are regulated and approved by the Securities and Exchanges Commission to invest funds on behalf of our clients.',
    ],
    'TREASURY BILLS': [
        'Treasury Bills are assets that offered to the public by the central bank as a form of short-term loan to the government.',
        'An investment with no hidden transaction charges, untaxed interest and guaranteed safety',
    ],
    'LONG TERM NOTE': [
        'Our long-term note offers investors a higher interest rate than commercial banks. Invest funds for a long period with better rates than the conventional fixed deposit.',
        'The money will be held and invested by us for at least two years. After which you can liquidate with your capital and interest.',
    ],
    'DOLLAR NOTE': [
        'Invest in our dollar note and earn all your dividends in dollars. We invest your funds for a fixed amount of time and pay dividends when due.',
        'The dollar note is open to everyone irrespective of age and location.',
    ],
    'GDL FINANCE': [
        'The biggest problem of most businesses is capital.',
        'Even banks and other financial institutions which offer loan facilities cannot adequately cater to the financial needs of all the small and medium scale enterprises as well as large organizations.',
        'Due to these hurdles and our dedication to developing the middle class, we provide loans to established businesses and finance new businesses.',
        'We also offer special credit facilities such as: Fund Management, Project Finance, Asset Finance, Trade Finance, Local and International Trade: LPO Finance, Invoice Discounting, Contract Finance, Bank Guarantee.'
    ],

}



const XampleModal = (props) => {
    const { state, dispatch } = useContext(Store)

    const toggle = () => {
        dispatch({ type: t.MODAL_CLOSE })
    }

    const whatWeDoSubpages = {
        'Kolawole Ayeye': {
            header: (
                <div>
                    <h1>Kolawole Ayeye</h1>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["Kolawole Ayeye"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),

        },
        'Oyekemi Ayeye': {
            header: (
                <div>
                    <h1>Oyekemi Ayeye</h1>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["Oyekemi Ayeye"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
        },
        'Ofonama Joshua': {
            header: (
                <div>
                    <h1>Ofonama Joshua</h1>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["Ofonama Joshua"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
        },
        'Perpetual Anagha': {
            header: (
                <div>
                    <h1>Perpetual Anagha</h1>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["Perpetual Anagha"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
        },
        'Oluyemi Adekoya': {
            header: (
                <div>
                    <h1>Oluyemi Adekoya</h1>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["Oluyemi Adekoya"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
    
                </Slider>
            ),
        },
        'Josephine Ernest-Ikechukwu': {
            header: (
                <div>
                    <h1>Josephine Ernest-Ikechukwu</h1>
                </div>
            ),
            body: (
                <Slider {...settings}  slidesToShow={1}>
                    {whatWeDoCardTexts["Josephine Ernest-Ikechukwu"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
        },
    
        // -------------------FINANCE AND LEASING -------------------------------
        'High Yield Note': {
            header: (
                <div>
                    <h1>HIGH YIELD NOTE</h1>
                    <h3>High Interest rate + Low risk = The Perfect Investment</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={1}>
                    {whatWeDoCardTexts["HIGH YIELD NOTE"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Kolawole Ayeye? </p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Treasury Bills': {
            header: (
                <div>
                    <h1>TREASURY BILLS</h1>
                    <h3>The closest you will ever come to a risk-free investment.</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={2}>
                    {whatWeDoCardTexts["TREASURY BILLS"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested? </p>
                    <Button href="https://mystifying-goodall-2b93ae.netlify.app/" variant='light'>Open an account</Button>
                </div>
            )
        },
        'Long Term Note': {
            header: (
                <div>
                    <h1>LONG TERM NOTE</h1>
                    <h3>Play the long game, invest for the future</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={2}>
                    {whatWeDoCardTexts["LONG TERM NOTE"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Ready to invest for the Future?</p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Dollar Note': {
            header: (
                <div>
                    <h1>DOLLAR NOTE</h1>
                    <h3> What’s better than making money? Making it in dollars!</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={2}>
                    {whatWeDoCardTexts["DOLLAR NOTE"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Fill Form Now to invest in the GDL dollar note now. </p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'GDL Finance': {
            header: (
                <div>
                    <h1>GDL FINANCE</h1>
                    <h3> Don’t do it alone, Get a loan.</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    <Card minHeight='auto'>
                        The biggest problem of most businesses is capital.
                 </Card>
                    <Card minHeight='auto'>
                        Even banks and other financial institutions which offer loan facilities cannot adequately cater to the financial needs of all the small and medium scale enterprises as well as large organizations.
                 </Card>
                    <Card minHeight='auto'>
                        Due to these hurdles and our dedication to developing the middle class, we provide loans to established businesses and finance new businesses.
                 </Card>
                <Card minHeight='auto'>
                    We also offer special credit facilities such as: <br />
                    Fund Management, Project Finance, Asset Finance, Trade Finance,
                        Local and International Trade: LPO Finance, Invoice Discounting, Contract Finance, Bank Guarantee.
                </Card>
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Kolawole Ayeye? </p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
    }


    // ------------------- WHAT WE DO MODAL SUB-PAGES  ----------------------------
    //  Asset Management id form state must equal constant name 

    const four04 = <h1>Page Not Found</h1>



    // {state.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)}
    let NavItems = state?.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    if (state.whatWeDoModalPosition === 0) {
        NavItems = state?.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    }
    // else if (state.whatWeDoModalPosition === 1) {
    //     NavItems = state?.financeAndLeasing.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    // }




    return (
        <div
            className={`whatWeDoModal ${state.showModal ? "whatWeDoModal_open" : "whatWeDoModal_close"}`} >
            <div className="whatWeDoModal_header">
                <a style={{ marginRight: '12px' }} href='#managementTeam' onClick={toggle}><FaLongArrowAltLeft color='fff' size='24' className='mt-2' /> </a>
                {/* ----Place Header Here */}
                <div className="whatWeDoModal_header--text">
                    {whatWeDoSubpages[state.assetManagementActive] ? whatWeDoSubpages[state.assetManagementActive].header : four04}
                </div>
                <div className="whatWeDoModal_nav">
                    <ul>
                        {NavItems}
                    </ul>
                </div>
            </div>
            <div className="whatWeDoModal_body">
                {/* Get body from asssetManagementSubpages dynamically  */}
                {whatWeDoSubpages[state.assetManagementActive] ? whatWeDoSubpages[state.assetManagementActive].body : null}
            </div>
            {/* Get Footer from asssetManagementSubpages dynamically  */}
            {whatWeDoSubpages[state.assetManagementActive] ? whatWeDoSubpages[state.assetManagementActive].footer : null}



        </div>

    );
};

export default XampleModal;
