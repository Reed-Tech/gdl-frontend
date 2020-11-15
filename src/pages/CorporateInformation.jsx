import React from 'react'
import Card from '../components/Card'


const CorporateInformation = () => {


    return (
        <div className='corporateInformation'>
            <section>
                <h1>CORPORATE INFORMATION</h1>
                <div className='d-lg-flex justify-content-between ml-lg-5 mr-lg-5 mr-md-0 ml-md-0 '>
                    <Card align='left' className='col-lg-3 col-sm-12 mb-3'>
                        <h3>Vision</h3>
                        <p>A leading diversified financial institution creating wealth and transforming society</p>
                        <br />
                        <p>Providing unique financial solutions to strengthen and expand the middle class</p>
                        <br />
                        <h5>CORE VALUES (I-ARISE):</h5>
                        <h2>I – Integrity</h2>
                        <p>
                            A – Audacity
                            <br />
                            R – Result Orientation
                            <br />
                            I – Innovation
                            <br />
                            S – Strong Social Conscience
                            <br />
                            E – Entrepreneurial Spirit
                        </p>
                    </Card>
                    <Card className='col-lg-5 col-sm-12 text-center customCard_text-spacing mb-3' >
                        <p> We are a leading diversified financial institution creating wealth and transforming society. We are driven by our mission of strengthening and expanding the middle class and guided by our values of audacity, integrity, result-orientation and strong social conscience.</p>
                        <br />
                        <p>  We are one team, open and transparent and we walk our talk. We embrace excellence and professionalism in all we do and build careers not jobs. We relate with all internal and external stakeholders with mutual respect based on open communication and engagement.</p>
                        <br />
                        <p> We have a strong sense of ownership and accountability, and are creative, self-driven and highly motivated. We are committed to continuous learning, working within a fair, pleasant and engaging work environment in which rewards are based on merit and performance.</p>
                    </Card>
                    <Card className='text-center col-lg-3 clo-sm-12 mb-3 '>
                        <h3>NORMS</h3>
                        <ul className='p-0'>
                            <li>Ownership and Accountability</li>
                            <li>Mutual Respect</li>
                            <li>Fairness</li>
                            <li>Openness and Transparency</li>
                            <li>Self-Driven</li>
                            <li>Commitment</li>
                            <li>Professionalism</li>
                            <li>Teamwork</li>
                            <li>Continuous Learning</li>
                            <li>No Unethical Payments</li>
                            <li>Customer First</li>
                            <li>Excellence</li>
                        </ul>
                    </Card>
                </div>
            </section>

        </div>
    )
}

export default CorporateInformation

