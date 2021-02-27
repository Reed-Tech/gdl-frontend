import React from 'react'
import { Button } from 'react-bootstrap'
import Card from '../components/Card'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'



export const WhyUsMobile = (
    <div className="whyUs_mobile">
        <Card>
            <p>We believe that the traditional models of solving societal problems in Nigeria has failed due to the lack of concern towards improving the living conditions of Nigerians. Resources do not reach those they are meant for because our public service models only serve as a means to enrich a meagre few. NGOs have made some progress but are constrained by a lack of funds and the struggle to attract these funds. We believe that commercial entities can play a significant role in improving the life of the average Nigerian.</p>
            <br />
            <p>It is our position that commercial enterprises which are typically driven by a profit maximization strategy can go beyond the boundaries and incentives of Corporate Social Responsibility (CSR) to doing some significant societal good. These two need not be mutually exclusive. Is GDL a Charity, the answer is NO. We are simply motivated by the passion to transform Nigeria to a country where financial capital is harnessed and channelled towards delivering improved critical social infrastructure while at the same time giving exceptional returns to our stakeholders. The strategic initiatives and activities GDL will embark upon shall have transformative impact on the Nigerian middle class in terms of savings, investment, financial access, infrastructure, housing, employment amongst others. In this case, our stakeholders are not just limited to our shareholders, but the middle class of Nigeria, who despite current economic conditions, still possess the key to unlocking the destiny of Nigeria as the true Giant of Africa. These are not just words for us. They are our reason for being.</p>
        </Card>
        <br/>

        <Card className='text-center' >
            <p>For further inquiries or clarifications </p>
            <Button href="/contact-us" variant='light'>Contact Us</Button>
        </Card>
    </div>
)


const WhyUs = () => {

    return (
        <section className='whyUs ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
            <div className='whyUs_web mx-5'>
                <h1>WHY US/VALUE PROPOSITION</h1>
                <OverlayScrollbarsComponent style={{height: 'calc(100%)'}}>
                    <div style={{ height: 'calc(100vh - 20em)' }}>
                        <Card height='45vh' className='text-center'>
                            <p>We believe that the traditional models of solving societal problems in Nigeria has failed due to the lack of concern towards improving the living conditions of Nigerians. Resources do not reach those they are meant for because our public service models only serve as a means to enrich a meagre few. NGOs have made some progress but are constrained by a lack of funds and the struggle to attract these funds. We believe that commercial entities can play a significant role in improving the life of the average Nigerian.</p>
                            <br />
                            <p>It is our position that commercial enterprises which are typically driven by a profit maximization strategy can go beyond the boundaries and incentives of Corporate Social Responsibility (CSR) to doing some significant societal good. These two need not be mutually exclusive. Is GDL a Charity, the answer is NO. We are simply motivated by the passion to transform Nigeria to a country where financial capital is harnessed and channelled towards delivering improved critical social infrastructure while at the same time giving exceptional returns to our stakeholders. The strategic initiatives and activities GDL will embark upon shall have transformative impact on the Nigerian middle class in terms of savings, investment, financial access, infrastructure, housing, employment amongst others. In this case, our stakeholders are not just limited to our shareholders, but the middle class of Nigeria, who despite current economic conditions, still possess the key to unlocking the destiny of Nigeria as the true Giant of Africa. These are not just words for us. They are our reason for being.</p>
                        </Card>

                        <Card className='text-center align-self-center mt-3' >
                            <p>For further inquiries or clarifications </p>
                            <Button href="/contact-us" variant='light'>Contact Us</Button>
                        </Card>
                    </div>
                </OverlayScrollbarsComponent>
               
            </div>
        </section>
    )
}

export default WhyUs
