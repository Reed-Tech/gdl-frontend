import React from 'react';
// import ReactDOM from "react-dom";
import Accordion from "../components/Accordion";
import HeaderSlider from '../components/HeaderSlider'
import HeaderSocialLinks from '../components/HeaderSocialLinks'
import Navbar from '../components/Navbar'
import StockInfo from '../components/StockInfo'
import FaqBG from '../assets/images/Contact-1.jpg'
import FooterNav from '../components/FooterNav'


const slideData = [
    {
        image: FaqBG,
        id: 1,
        h3: 'GDL FAQ    ',
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
            {/* accor */}
         
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <Accordion
                            title="What is your return policy?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Which languages does you support?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="What is your return policy?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Can I use a custom domain?"
                            content="
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Which languages does you support?"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className="col-md-6">
                        <Accordion
                            title="Can I use a custom domain?"
                            content="
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                        />
                    </div>
                </div>
            </div>
          
        
        <FooterNav />

    </section>
    )
}


export default  FAQ