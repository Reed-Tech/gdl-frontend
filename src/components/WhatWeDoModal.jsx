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
    slidesToShow: 4,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
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
    'MONEY MARKET FUND': [
        'The GDL Money Market Fund is a special investment plan that allows you to invest with as low as N10,000  for a minimum investment period of 30 days.',
        'It is a high-quality investment plan that provides a far higher yield than a regular bank account and is available to both Individuals and Organizations.',
        'You can keep adding to your investment as much as you like and your money is available to you anytime, any day, anywhere.',
        'All investments are managed by our excellent team of asset managers who invest in a wide range of short-term assets.',
        'Register for the Money Market Fund today and Start Investing now',
    ],
    'SMART INVESTMENT ACCOUNT': [
        'The Smart Investment Account grants you access to collateral-free loans after six months of regular savings in the scheme.',
        'For saving consistently for a year, we reward you with the opportunity to get an interest free loan for all your educational pursuits. Do not miss this opportunity for you and your kids.',
        'We do not just keep your money safe; you are guaranteed a compounded interest rate of 4% every year.',
        'With a Smart Investment Account, you will never have to worry about unexpected school expenses, we have got you covered. Invest for yourself, invest for your children, invest in the future.',
        'You can open a Smart Investment Account with at least N25,000 and continue with a monthly contribution of not less than N5,000.',
    ],
    'STOCKBROKING': [
        'Buy shares of profitable Nigerian companies earn great dividends as they increase in value. ',
        'We can buy and sell shares on your behalf, looking out for favourable trades which will be beneficial to you.',
        'With our strong research base and remarkable stockbrokers, we have mastered the art of analyzing, trading and advising on the stock market and other related ventures.',
        'Our personalized process makes these transactions totally seamless and timely. You do not have to worry about anything. Just say the word and we will execute.',
    ],
    'FINANCIAL ADVISORY': [
        'Making financial decisions without proper consultation is like hunting in the dark, the results are bound to be unpleasant. However, these misfortunes can be avoided if you can see clearly.',
        'Let us be your light and help guide you in all your financial endeavors.',
        'With us by your side, you are assured of success. Our world-class team of finance experts will assist you in making only informed decisions that will be beneficial to you and your business.',
        'Our advisory services cater to a wide range of business dealings including the purchase and sale of commercial papers, mergers and acquisitions, scaling, business restructuring, takeovers and divestments, valuations and IPOs.',
        'We also offer project advisory services in industries such as Power & Utilities, Oil and Gas, Telecommunications, Education, Real Estate and Construction.',
        'Our services are unmatched as we have a vast knowledge of the financial space and we have spent years guiding our clients through different stages and decisions in their businesses.',
    ],
    'ENTERPRISE TRANSGENERATIONAL PROGRAM': [
        'We want to help you turn your booming business into a powerful organization that withstands the test of time.',
        'For a duration of 3 - 5 years, we would offer you financial and business advisory support services tailored specifically to your business. We will guide you throughout your journey to becoming an enterprise that would remain standing for future generations.',
        'Building a transgenerational business is not an easy feat and you cannot do it alone. You need a solid advisory partner.',
        'When you join our Enterprise Transgenerational Program, you get unlimited access to our wealth of knowledge, extensive network, resources and everything your business needs to succeed.',
    ],
    'RESEARCH': [
        'Our research team gives powerful insights into all the important happenings in the world of business.',
        'We focus on generating fundamentally- driven research and analysis of companies, sectors and economies.',
        'Following companies quoted on the Nigerian Stock Exchange daily, with a spotlight on key companies which we have invested in.',
        'We love keeping our clients informed on the trends in the stock market and providing up to date market intelligence on quoted companies.',
        'We provide well-researched opinions on strategy, asset allocation, global/domestic trends and quantitative analysis.',
        'As your trusted investment partner, we must provide you with objective and timely business and market intelligence from verified sources.',
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



const WhatWeDoModal = (props) => {
    const { state, dispatch } = useContext(Store)

    const toggle = () => {
        dispatch({ type: t.MODAL_CLOSE })
    }

    const whatWeDoSubpages = {
        'Money Market Fund': {
            header: (
                <div>
                    <h1>MONEY MARKET FUND</h1>
                    <h3>Cruise your way into financial freedom with as little as <strong>N10,000</strong></h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts["MONEY MARKET FUND"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Money Market Funds?</p>
                    <Button onClick={()=>console.log(props.history)} href="https://mystifying-goodall-2b93ae.netlify.app/" variant='light'>Open an account</Button>
                </div>
            )
        },
        'Smart Investment Account': {
            header: (
                <div>
                    <h1>SMART INVESTMENT ACCOUNT</h1>
                    <h3>Get access to more money when you join the GDL Smart Investors Club</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts["SMART INVESTMENT ACCOUNT"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Start Investing Smartly.</p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Stockbroking': {
            header: (
                <div>
                    <h1>STOCKBROKING</h1>
                    <h3>Get access to more money when you join the GDL Smart Investors Club</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts.STOCKBROKING.map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in making money from shares?</p>
                    <Button variant='light' href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Financial Advisory': {
            header: (
                <div>
                    <h1>FINANCIAL ADVISORY</h1>
                    <h3>Get Good Advice, Invest Better.</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts["FINANCIAL ADVISORY"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Take our hand as we light up your way to prosperity.</p>
                    <Button variant='light' href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Enterprise Transgenerational Program': {
            header: (
                <div>
                    <h1>Enterprise Transgenerational Program</h1>
                    <h3>Let Us Help You Build Wealth for Generations</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts["ENTERPRISE TRANSGENERATIONAL PROGRAM"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
    
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Safeguard your Legacy today. </p>
                    <Button variant='light'  href="https://mystifying-goodall-2b93ae.netlify.app/">Open an account</Button>
                </div>
            )
        },
        'Research': {
            header: (
                <div>
                    <h1>RESEARCH</h1>
                    <h3>Stay Informed, Beat the odds</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    {whatWeDoCardTexts.RESEARCH.map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>For further inquiries or clarifications </p>
                    <Button href="/contact-us" onClick={()=>console.log(props.history)} variant='light'>Contact Us</Button>
                </div>
            )
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
                <Slider {...settings}>
                    {whatWeDoCardTexts["HIGH YIELD NOTE"].map(e =>
                        <Card key={e} minHeight='auto'>
                            {e}
                        </Card>
                    )}
                </Slider>
            ),
    
            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Money Market Fund? </p>
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
                    <p>Interested in Money Market Fund? </p>
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
                <a style={{ marginRight: '12px' }} href='#whatWeDo' onClick={toggle}><FaLongArrowAltLeft color='fff' size='24' className='mt-2' /> </a>
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

export default WhatWeDoModal;
