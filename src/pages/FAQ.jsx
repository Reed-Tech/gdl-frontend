import React from 'react';
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import FaqBG from '../assets/images/Contact-1.jpg'
import FooterNav from '../components/FooterNav'
import { Form } from 'semantic-ui-react'
import Close from 'mdi-react/CloseIcon'
import Search from 'mdi-react/SearchIcon'





const slideData = [
    {
        image: FaqBG,
        id: 1,
        h3: 'GDL FAQ    ',
    },
]




const FAQ = () => {

    const FAQCard = (props) => {
        const openState = {
            icon: <h2 style={{ color: '#fff', margin: '0', fontSize: '18px' }}>Ans</h2>,
            display: 'block',
            closeBtn: {
                transform: 'rotate(90deg) scale(0.8) translateX(-12px)'
            },
        }

        const iconStyle = {
            color: 'green',
            width: '80px',
            display: 'flex',
            height: '72px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }
        return (
            <div className="faqCard">
                <div className="faqCard__icon">
                    <div style={iconStyle}>
                        {openState.icon ? openState.icon : <Search size={30} color='#fff' />}
                    </div>
                </div>
                <div className="faqCard__body">
                    <div className="faqCard__body--header">
                        <h2>Refund Policy</h2>
                        <Close />
                    </div>
                    <div className="faqCard__body--content" style={{ display: openState.display }}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo quae nihil officia at soluta iste minima fuga eos obcaecati!</p>
                    </div>
                </div>
            </div>
        )
    }

    const renderSlideData = (
        slideData.map((slides) => <section key={slides.h1}>
            <div className='career_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})`, backgroundPosition:'top right' }}>
                <div className='headerSlider_container-text headerSlider_container-h3'>
                    <h3>{slides.h3}</h3>
                </div>
            </div>
        </section>)
    )

    return (
        <section className='career'>
        <header>
            <Navbar />
            <HeaderSocialLinks />
            <HeaderSlider>
                {renderSlideData}
            </HeaderSlider>
            <StockInfo />
        </header>
        <div className="faqContent">
            <div className="faqContent__tab">
                <ul>
                    <li>Registration</li>
                    <li>Becoming a vendor</li>
                    <li className="faqContent__tab--active">Payment</li>
                    <li>Refunds</li>
                    <li>Local Delivery</li>
                    <li>International Delivery</li>
                </ul>
            </div>
            <div className="faqContent__cards">
                <FAQCard />
                <FAQCard />
                <FAQCard />
                <FAQCard />
                <FAQCard />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="faqContent__form">
                        <h2>Not satisfied yet? Feel free to contact us</h2>
                        <div className='container contactUs__form'>
                            {/* <h1>Form input here</h1> */}
                            <Form>
                                <Form.Input placeholder='Full Name' className="form-control" />
                                <Form.Input placeholder='Email' />
                                <Form.Input placeholder='Mobile Number' type='number' />
                                <Form.TextArea rows='5' placeholder='Message' type='text' />
                                <button>Send</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        
        <FooterNav />

    </section>
    )
}


export default  FAQ