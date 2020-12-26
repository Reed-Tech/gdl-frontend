import React from 'react'
import Card from '../components/Card'
import { Scrollbars } from 'react-custom-scrollbars';



const CorporateInformation = (props) => {
    const scrollThumbY = () => <div className='customScroll_thumb' ></div>
    const scrollTrackY = () => <div className='customScroll_track'></div>
    return (
        <section >
            <div className='corporateInformation mx-5'>
                <h1>CORPORATE INFORMATION</h1>
                <div className='d-flex justify-content-between mx-5 '>
                    <Scrollbars
                        renderThumbVertical={scrollThumbY}
                        renderTrackVertical={scrollTrackY}
                        style={{ height: 'calc(100vh - 20em)' }}
                        autoHide
                        className='col-3'
                    >
                        <Card align='left'>
                            <h3>Vision</h3>
                            <p>A leading diversified financial institution creating wealth and transforming society</p>
                            <br />
                            <p>Providing unique financial solutions to strengthen and expand the middle class</p>
                            <br />
                            <h5>CORE VALUES <span style={{ display: 'inline-block' }}>(I-ARISE):</span></h5>
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
                    </Scrollbars>

                    <Scrollbars
                        renderThumbVertical={scrollThumbY}
                        renderTrackVertical={scrollTrackY}
                        style={{ height: 'calc(100vh - 20em)' }}
                        className='col-5'
                    autoHide
                    >
                        <Card className='text-center customCard_text-spacing' >
                            <p> We are a leading diversified financial institution creating wealth and transforming society. We are driven by our mission of strengthening and expanding the middle class and guided by our values of audacity, integrity, result-orientation and strong social conscience.</p>
                            <br />
                            <p>  We are one team, open and transparent and we walk our talk. We embrace excellence and professionalism in all we do and build careers not jobs. We relate with all internal and external stakeholders with mutual respect based on open communication and engagement.</p>
                            <br />
                            <p> We have a strong sense of ownership and accountability, and are creative, self-driven and highly motivated. We are committed to continuous learning, working within a fair, pleasant and engaging work environment in which rewards are based on merit and performance.</p>
                        </Card>
                    </Scrollbars>
                    <Scrollbars
                        renderThumbVertical={scrollThumbY}
                        renderTrackVertical={scrollTrackY}
                        style={{ height: 'calc(100vh - 20em)' }}
                        className='col-3'
                        autoHide
                    >
                        <Card className='text-center' maxHeight='calc(100vh - 20em)'>
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
                    </Scrollbars>
                </div>
            </div>


            {/* Because i have to write for mobile view too... FML 😌 */}
            <div className="corporateInformation_mobile">
                <h1>WHO WE ARE</h1>
                <div className='corporateInformation_mobile-container'>
                </div>
            </div>
        </section>
    )
}

export default CorporateInformation

