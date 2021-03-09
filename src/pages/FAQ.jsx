import React from 'react';
import Accordion from "../components/Accordion";
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import FaqBG from '../assets/images/Contact-1.jpg'
import FooterNav from '../components/FooterNav'
import { Button } from 'react-bootstrap'
import MMFFAQ from "../assets/images/FAQs for GDL MMF.pdf";
import SIAFAQ from "../assets/images/SIA Frequently Asked Questions.pdf";

const slideData = [
    {
        image: FaqBG,
        id: 1,
        h3: "GDL FAQ's",
    },
]




const FAQ = () => {


    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='faq_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})`, backgroundPosition:'top right' }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                </div>
            </div>
        </section>)
    )

    return (
        <section className='faq'>
            <header>
                <Navbar />
                <HeaderSocialLinks />
                <HeaderSlider>
                    {renderSlideData}
                </HeaderSlider>
                <StockInfo />
            </header>
            {/* accorodians */}
         
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <Accordion
                            title="What is the Full meaning of GDL
                            ?"
                            content="Growth and Development Asset Management Limited.
                            "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Who is GDL
                            ?"
                            content="Growth and Development Asset Management Limited (GDL) is a non-bank financial institution licensed
                            by the Securities and Exchange Commission (SEC) and Nigerian Stock Exchange (NSE) to serve as
                            Broker/Dealer (Stockbroking Services) , Portfolio and Fund Managers."
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="How can I be sure my funds are safe with GDL
                            ?"
                            content="
                            <p>GDL is regulated by SEC and fully registered under the regulation of the financial institution. We have
                            professionals managing funds under our management in strict compliance with laid down policies and
                            procedures. </p>
                            <p>We are a conservative institution; we don’t take excessive risk; we carry out proper research before we
                            invest in investment instruments. </p>
                            "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Can I have some additional cover or assurance on the safety of my funds
                            ?"
                            content="
                            <p>We can assure you that your funds are safe, we have grown significantly over the last 5 years and the total
                            funds under our management is over 5 Billion, we also have good corporate governance and risk
                            management framework, with a stable, experienced Board and Management.</p>
                            <p>You can also invest in our Money Market which is as safe as funds in the Bank. All the assets of the Fund
                            are held by the Custodian, UBA Plc (Global Custodian Services). UBA is a large systemically significant
                            Tier 1 Bank. The custody arrangement completely precludes the Fund Manager and all other parties
                            from access to the assets of the Fund. the fund also has an BBB investment rating from Augusto & Co.
                            and a Trustees that ensures we do not break the rule that governs the Fund.</p>
                            <p>For huge funds, our correspondent banks can issue you a comfort letter pledging to hold your funds till
                            maturity but interest rates for pledged funds will differ from the usual GDL rates.</p>"
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Are NBFI ( Non-Bank Financial Institution) allowed to receive and place funds for investors?"
                            content="
                            <p>We are a licensed and regulated Asset /Fund management Company so by law we can receive
                            funds on behalf of our client and invest same on behalf of our client in very safe and profitable
                            investment vehicles. </p>
                            "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Why should I come to GDL rather than take my funds to the Bank?"
                            content="
                            <p>With GDL you enjoy a one-on-one personalized treatment, our customers receive immediate
                            resolution and attention to their enquiries, queries and concerns. Top of the notch service delivery.
                            Our interest rates are also higher than commercial banks rates.</p>
                            "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="How come your rates are higher than the regular banks
                            ?"
                            content="
                            <p>Our rates are higher than the Banks, because in GDL we have less operating cost and are not
                            mandated to have a CRR position of 30% like the regular banks.</p>
                           "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="How do I calculate interest earned at maturity of my investment 
                            ?"
                            content="
                            <p>Principal * rate * tenure divided by 365days.</p>
                           "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="What instruments do you invest your funds into
                            ?"
                            content="
                            <p>Our funds are invested in safe money market instruments through our correspondent Banks. We also
                            invest in safe and well-structured commercial papers. We finance selected businesses who meet
                            our stringent risk acceptance criteria. </p>
                           "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Are you a regulated company
                            ?"
                            content="
                            <p>We are regulated by SEC, NSE and CBN.</p>
                           "
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="How much should I have before I can invest with GDL High yield Note
                            ?"
                            content="
                            <p>With a minimum of &#x20A6 100,000 you can invest with us.</p>
                           "
                        />
                    </div>
                    {/* Buttons for downloadable files */}
                    <div className="col-12 text-center my-5">
                        <Button href={MMFFAQ} className="mr-md-4 mb-3" variant='primary'>Frequently Asked Questions for GDL MMF </Button>
                        <Button href={SIAFAQ} className="mr-md-4 mb-3" variant='primary'>Frequently Asked Questions for GDL SIA</Button>
                    </div>
                </div>
            </div>
          
        
        <FooterNav />

    </section>
    )
}


export default  FAQ