import React, { useContext } from "react"
import { Store, type as t } from '../context/store'
import Card from '../components/Card'

import Slider from 'react-slick'

const WhatWeDoModal = (props) => {

    const { state, dispatch } = useContext(Store)
    const toggle = () => {
        dispatch({ type: t.MODAL_CLOSE })
    }

    function disableBodyScroll(condition) {
        const body = document.getElementsByTagName('BODY')[0]
        body.style.overflowY = `${condition ? 'hidden' : 'auto'}`
    }

    disableBodyScroll(state.showModal)

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
    

    // ------------------- WHAT WE DO MODAL SUB-PAGES  ----------------------------
    //  Asset Management id form state must equal constant name 

    const four04 = <h1>Page Not Found</h1>

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
                    <Card>
                        The GDL Money Market Fund is a special investment plan that allows you to invest with as low as N10,000 for a minimum investment period of 30 days.
                 </Card>
                    <Card>
                        It is a high-quality investment plan that provides a far higher yield than a regular bank account and is available to both Individuals and Organizations.
                 </Card>
                    <Card>
                        You can keep adding to your investment as much as you like and your money is available to you anytime, any day, anywhere.
                 </Card>
                    <Card>
                        All investments are managed by our excellent team of asset managers who invest in a wide range of short-term assets.
                 </Card>
                    <Card>
                        Register for the Money Market Fund today and Start Investing now
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Money Market Funds?</p>
                    <button>Click Here</button>
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
                    <Card>
                        The Smart Investment Account grants you access to collateral-free loans after six months of regular savings in the scheme.
                 </Card>
                    <Card>
                        For saving consistently for a year, we reward you with the opportunity to get an interest free loan for all your educational pursuits. Do not miss this opportunity for you and your kids.
                 </Card>
                    <Card>
                        We do not just keep your money safe; you are guaranteed a compounded interest rate of 4% every year.
                 </Card>
                    <Card>
                        With a Smart Investment Account, you will never have to worry about unexpected school expenses, we have got you covered. Invest for yourself, invest for your children, invest in the future.
                 </Card>
                    <Card>
                        You can open a Smart Investment Account with at least N25,000 and continue with a monthly contribution of not less than N5,000.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Start Investing Smartly.</p>
                    <button>Open an Account Here.</button>
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
                    <Card>
                        Due to our outstanding performance as a financial institution, we earned licenses from the Nigerian Stock Exchange (NSE) and the Securities and Exchange Commission (SEC) to carry out stockbroking in Nigeria.
                 </Card>
                    <Card>
                        With our strong research base and remarkable stockbrokers, we have mastered the art of analyzing, trading and advising on the stock market and other related ventures.
                 </Card>
                    <Card>
                        We have the power to make transactions on your behalf, looking out for favourable trades which will be beneficial to you.
                 </Card>
                    <Card>
                        We have created a process that makes these transactions totally seamless and timely. You do not have to worry about anything. Just say the word and we will execute.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in making money from shares?</p>
                    <button>Click Here</button>
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
                    <Card>
                        Making financial decisions without proper consultation is like hunting in the dark, the results are bound to be unpleasant. However, these misfortunes can be avoided if you can see clearly.
                 </Card>
                    <Card>
                        Let us be your light and help guide you in all your financial endeavors.
                 </Card>
                    <Card>
                        With us by your side, you are assured of success. Our world-class team of finance experts will assist you in making only informed decisions that will be beneficial to you and your business.
                 </Card>
                    <Card>
                        Our advisory services cater to a wide range of business dealings including the purchase and sale of commercial papers, mergers and acquisitions, scaling, business restructuring, takeovers and divestments, valuations and IPOs.
                 </Card>
                    <Card>
                        We also offer project advisory services in industries such as Power & Utilities, Oil and Gas, Telecommunications, Education, Real Estate and Construction.
                 </Card>
                    <Card>
                        Our services are unmatched as we have a vast knowledge of the financial space and we have spent years guiding our clients through different stages and decisions in their businesses.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Take our hand as we light up your way to prosperity.</p>
                    <button>Reach Out To US Now</button>
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
                    <Card>
                        Your business is thriving. Great! It has been running for years. Even Better.
                 </Card>
                    <Card>
                        But picture this. It is the year 2100, your grandkids are now running the business you started, and they have expanded it even better than you planned.
                 </Card>
                    <Card>
                        You would love that right? Who wouldn’t? So here’s the thing, building a transgenerational business is not an easy feat and you cannot do it alone. You need a solid advisory partner, just like any serious relationship.
                 </Card>
                    <Card>
                        We want to help you turn your booming business into a powerful organization that withstands the test of time.
                 </Card>
                    <Card>
                        When you join our Enterprise Transgenerational Program, you get unlimited access to our wealth of knowledge, extensive network and resources.
                 </Card>
                    <Card>
                        For a duration of 3 - 5 years, we would offer you financial and business advisory support services tailored specifically to your business. We will guide you throughout your journey to becoming an enterprise that would remain standing for future generations.
                 </Card>
                    <Card>
                        Your Children would thank you
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Safeguard your Legacy today. </p>
                    <button>Sign Up For ETP Here</button>
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
                    <Card>
                        Our research team gives powerful insights into all the important happenings in the world of business.
                 </Card>
                    <Card>
                        We focus on generating fundamentally- driven research and analysis of companies, sectors and economies.
                 </Card>
                    <Card>
                        Following companies quoted on the Nigerian Stock Exchange daily, with a spotlight on key companies which we have invested in.
                 </Card>
                    <Card>
                        We love keeping our clients informed on the trends in the stock market and providing up to date market intelligence on quoted companies.
                 </Card>
                    <Card>
                        We provide well-researched opinions on strategy, asset allocation, global/domestic trends and quantitative analysis.
                 </Card>
                    <Card>
                        As your trusted investment partner, we must provide you with objective and timely business and market intelligence from verified sources.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>For further inquiries or clarifications </p>
                    <button>Contact Us</button>
                </div>
            )
        },

        // -------------------FINANCE AND LEASING -------------------------------
        [state.financeAndLeasing[0] || 'High Yield Note']: {
            header: (
                <div>
                    <h1>HIGH YIELD NOTE</h1>
                    <h3>High Interest rate + Low risk = The Perfect Investment</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    <Card>
                        Why keep your money in the bank where it remains stagnant when you can invest in our high yield note and make much more?
                 </Card>
                    <Card>
                        Our interest rates are higher than that of any commercial bank, coupled with the total absence of maintenance fees and other hidden charges, investing in our high yield note is the best thing you can do to your money.
                 </Card>
                    <Card>
                        We have worked hard to make the plan so flexible that you can withdraw all your funds even before the agreed maturity date in case of emergencies. After all, it is still your money.
                 </Card>
                    <Card>
                        Our special team of wealth managers work round the clock to ensure all our investors earn the rewards of their investments and even more.  Interest can be paid monthly or at once depending on your preferences.
                 </Card>
                    <Card>
                        More importantly, we are regulated and approved by the Securities and Exchanges Commission to invest funds on behalf of its clients. You can sleep with both eyes closed; all your funds are safe with us.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Money Market Fund? </p>
                    <button>Click Here</button>
                </div>
            )
        },
        [state.financeAndLeasing[1] || 'Treasury Bill']: {
            header: (
                <div>
                    <h1>TREASURY BILL</h1>
                    <h3>The closest you will ever come to a risk-free investment.</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={2}>
                    <Card>
                        Treasury Bills are assets that offered to the public by the capital bank. The investment is short term and is issued with no additional charges.
                 </Card>
                    <Card>
                        The chances of you losing your money are almost nonexistent as the government is obligated to pay no matter what. Also, the interest accrued from treasury bills is not taxable. You get to keep all your profits to yourself.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested? Contact our team of seasoned experts to get started </p>
                    <button>Contact Us</button>
                </div>
            )
        },
        [state.financeAndLeasing[2] || 'Long Term Note']: {
            header: (
                <div>
                    <h1>LONG TERM NOTE</h1>
                    <h3>Play the long game, invest for the future</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={3}>
                    <Card>
                        Our long-term note offers investors a higher interest rate than commercial banks. If you intend to save funds for a long period with a fixed rate of return higher than the conventional fixed deposit.
                 </Card>
                    <Card>
                        Your money will be held and invested by us for Two Years in which you can liquidate by giving us a  month’s notice and paying a small fee
                 </Card>
                    <Card>
                        The minimum amount for this superb investment plan is N2,500,000 with a sky-high gross interest rate of 11% per annum which is paid twice within the year.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Ready to invest for the Future?</p>
                    <button>Fill Form</button>
                </div>
            )
        },
        [state.financeAndLeasing[3] || 'Dollar Note']: {
            header: (
                <div>
                    <h1>DOLLAR NOTE</h1>
                    <h3> What’s better than making money? Making it in dollars!</h3>
                </div>
            ),
            body: (
                <Slider {...settings} slidesToShow={2}>
                    <Card>
                        Invest in our dollar note and earn all your dividends in dollars. We invest your funds for a fixed amount of time and pay dividends when due.
                 </Card>
                    <Card>
                        The dollar note is open to everyone irrespective of age and location.
                 </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Fill Form Now to invest in the GDL dollar note now. </p>
                    <button>Fill Form</button>
                </div>
            )
        },
        [state.financeAndLeasing[4] || 'GDL Finance']: {
            header: (
                <div>
                    <h1>GDL FINANCE</h1>
                    <h3> Don’t do it alone, Get a loan.</h3>
                </div>
            ),
            body: (
                <Slider {...settings}>
                    <Card>
                        The biggest problem of most businesses is capital. Lack of access to money has been the downfall of many commercial organizations.
                 </Card>
                    <Card>
                        Even banks and other financial institutions which offer loan facilities cannot adequately cater to the financial needs of all the small and medium scale enterprises as well as large organizations.
                 </Card>
                    <Card>
                        Due to these hurdles and our dedication to developing the middle class, we provide loans to established businesses and finance new businesses.
                 </Card>
                    <Card>
                        It’s our way of giving back to society.
                 </Card>
                    <Card>
                        We also offer special credit facilities such as: <br />
                        Consumer Loans (Fund Management, Project Finance, Asset Finance)
                            Finance Lease as in the case of Hire Purchase, Trade Finance
                            Local and International Trade: LPO Finance, Invoice Discounting Contract Finance
                            Import and Export Finance
                    </Card>
                </Slider>
            ),

            footer: (
                <div className="whatWeDoModal_footer">
                    <p>Interested in Money Market Fund? </p>
                    <button>Click Here</button>
                </div>
            )
        },
    }

    // {state.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)}
    let NavItems = state.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    if (state.whatWeDoModalPosition === 0) {
        NavItems = state.assetManagement.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    }
    else if (state.whatWeDoModalPosition === 1) {
        NavItems = state.financeAndLeasing.map((e) => <li className={`${e === state.assetManagementActive ? 'active' : ''}`} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })} key={e}>{e}</li>)
    }




    return (
        <div
            className={`whatWeDoModal ${state.showModal ? "whatWeDoModal_open" : "whatWeDoModal_close"}`} >
            <div className="whatWeDoModal_header">
                <a href='#whatWeDo' onClick={toggle}>Back</a>
                {/* ----Place Header Here */}
                {whatWeDoSubpages[state.assetManagementActive] ? whatWeDoSubpages[state.assetManagementActive].header : four04}
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
