import React from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap/'
import BGFull from '../assets/images/NewsletterLG.png'
import Image1 from '../assets/images/NewsletterSM1.png'
import Image2 from '../assets/images/NewsletterSM2.png'
import Image3 from '../assets/images/NewsletterSM3.png'
import { FaPaperPlane } from 'react-icons/fa';


const NewsLetterSubscription = () => {
    return (
        <div className='newsLetterSubscription d-flex flex-wrap'>
            <div className="col-lg-6 d-flex flex-wrap newsLetterSubscription_outdoor">
                <div className='col-5 newsLetterSubscription_outdoor-image' style={{ backgroundImage: `url(${BGFull})` }}>
                </div>
                <div className='col-7'>
                    {/* <Button className='d-flex ml-auto rounded-pill'>Leisure</Button> */}
                    <h3>Everything you need to know about finance and investing in Nigeria</h3>
                    <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
                    <div className='d-flex flex-wrap newsLetterSubscription_outdoor-images'>
                        <div className="col-4 newsLetterSubscription_outdoor-imagesGrid " style={{ backgroundImage: `url(${Image1})` }}></div>
                        <div className="col-4 newsLetterSubscription_outdoor-imagesGrid" style={{ backgroundImage: `url(${Image2})` }}></div>
                        <div className="col-4 newsLetterSubscription_outdoor-imagesGrid" style={{ backgroundImage: `url(${Image3})` }}></div>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 col-sm-12 mt-5 mt-lg-0 d-flex flex-wrap newsLetterSubscription_subscription">
                <div className='col-6 d-none d-md-block mt-5 mt-lg-0'>
                    <div className='newsLetterSubscription_subscription-illustration'></div>
                </div>
                <div className='col-md-6 col-sm-12 mt-sm-5'>
                    <div>
                        <h3>Subscribe</h3>
                        <p>Subscribe to our newsletter and be the first to receive updates on our new investment opportunities and promo</p>
                    </div>
                    <div>
                        <InputGroup className="col-12 p-0">
                            <FormControl
                                placeholder="email"
                                type='email'
                                required
                            />
                            <InputGroup.Append>
                                <Button variant="primary"><FaPaperPlane /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterSubscription
