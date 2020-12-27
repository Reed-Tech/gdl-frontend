import React from 'react'
import { Button } from 'react-bootstrap'
import Card from '../components/Card'
import { Scrollbars } from 'react-custom-scrollbars'

const WhyUs = () => {
    const scrollThumbY = () => <div className='customScroll_thumb' ></div>
    const scrollTrackY = () => <div className='customScroll_track'></div>

    return (
        <section className='whyUs ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
            <div className='whyUs_web'>
                <h1>WHY US/VALUE PROPOSITION</h1>
                <div style={{ height: 'calc(100vh - 20em)' }}>
                    <Card height='45vh' className='text-center'>
                        <p>We believe that the traditional models of solving societal problems in a developing country like Nigeria has failed with not enough resources channelled towards improving the living conditions of Nigerians. We have observed that even where these resources are deployed, they are fraught with myriads of challenges, principally because our public service models are not strategically designed as service oriented agencies but as a means of distributing the revenue of a nation amongst a meagre few. Non-Governmental Organizations (NGOs) have done a bit in this regard but even they, are limited by the funds available to them from Donor Agencies and the struggle to attract these funds in the first place. We believe that commercial entities can play a significant role here.</p>
                        <br />
                        <p>It is our position that commercial enterprises which are typically driven by a profit maximization strategy can go beyond the boundaries and incentives of Corporate Social Responsibility (CSR) to doing some significant societal good. These two need not be mutually exclusive. Is GDL a Charity, the answer is NO. We are simply motivated by the passion to transform Nigeria to a country where financial capital is harnessed and channelled towards delivering improved critical social infrastructure while at the same time giving exceptional returns to our stakeholders. The strategic initiatives and activities GDL will embark upon shall have transformative impact on the Nigerian middle class in terms of savings, investment, financial access, infrastructure, housing, employment amongst others. In this case, our stakeholders are not just limited to our shareholders, but the middle class of Nigeria, who despite current economic conditions, still possess the key to unlocking the destiny of Nigeria as the true Giant of Africa. These are not just words for us. They are our reason for being.</p>
                    </Card>

                    <Card className='text-center align-self-center mt-3' >
                        <p>For further inquiries or clarifications </p>
                        <Button variant='light'>Contact Us</Button>
                    </Card>
                </div>
            </div>
            {/* Because i have to write for mobile view too... FML 😌 */}
            <div className="whyUs_mobile">
                <h1>Why us</h1>
            </div>
        </section>
    )
}

export default WhyUs
