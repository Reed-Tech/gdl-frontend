import React from 'react'
import Card from '../components/Card'
import BackgroundImage from '../assets/images/crwealth.JPEG'
import Slider from 'react-slick'
import FooterNav from '../components/FooterNav'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'

const sliderData = [
    {
        date: 'July 03, 2020',
        data: [
            { company: 'Apricot', price: 0.65, rate: 0 },
            { company: 'Bozon2', price: 0.615, rate: 0 },
            { company: 'Cezeto3', price: 0.615, rate: 0 },
            { company: 'DodoPizza', price: 0.615, rate: 0 },
            { company: 'Elephant', price: 0.615, rate: 0 },
            { company: 'Apricot6', price: 0.615, rate: 0 },
            { company: 'Apricot7', price: 0.615, rate: 0 },
            { company: 'Apricot8', price: 0.615, rate: 0 },
            { company: 'Apricot9', price: 0.615, rate: 0 },
            { company: 'Apricot10', price: 0.615, rate: 0 },
        ]
    },
    {
        date: 'July 04, 2020',
        data: [
            { company: 'Apricot', price: 0.65, rate: 0 },
            { company: 'Bozon2', price: 0.615, rate: 0 },
            { company: 'Cezeto3', price: 0.615, rate: 0 },
            { company: 'DodoPizza', price: 0.615, rate: 0 },
            { company: 'Elephant', price: 0.615, rate: 0 },
            { company: 'Apricot6', price: 0.615, rate: 0 },
            { company: 'Apricot7', price: 0.615, rate: 0 },
            { company: 'Apricot8', price: 0.615, rate: 0 },
            { company: 'Apricot9', price: 0.615, rate: 0 },
            { company: 'Apricot10', price: 0.615, rate: 0 },
        ]
    }
]

const CreatingWealth = (props) => {
    const parentSliderSettings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    }

    const renderSliderData = sliderData.map((e) => (
        <section key={e.date}>
            <h3 className='mb-4'>PRICE ({e.date})</h3>
            {e.data.map((f) => (
                <p key={f.company}>{f.company}: {f.price} ({f.rate}%) </p>
            ))}

        </section>
    ))

    return (
        <section>
            <div className='creatingWealth justify-content-lg-between' style={{ backgroundImage: `url('${BackgroundImage}')` }}>
                <h1 className='d-sm-block mb-4 mt-4 d-lg-none'>CREATING WEALTH AND TRANSFORMING SOCIETY</h1>
                <OverlayScrollbarsComponent style={{height: 'calc(100vh - 20em)'}}>
                    <div className='creatingWealth_web d-block d-lg-flex justify-content-lg-between'>
                        <div className='col-lg-6 col-sm-12 creatingWealth_text'>
                            <h1 className='mb-5 d-none d-lg-block'>CREATING  WEALTH AND TRANSFORMING SOCIETY</h1>
                            <Card >
                                <p>At GDL we see the socio-economic challenges facing Nigeria as an opportunity to provide platforms for creating private sector led frameworks that will help to address some of the major concerns of the average Nigerian household in a sustainable way, using mainly, in-country resources.</p>
                                <p>We are passionate about Nigeria and her potentials. We see our business as a vehicle of delivering key social dividends to Nigerians while at the same time achieving significant economic returns for our stakeholders and investors.</p>
                            </Card>
                        </div>
                        <div className='col-lg-4 col-md-12 creatingWealth_slide'>
                            <Card maxHeight='calc(100vh)' className='creatingWealth_slide-card'>
                                <Slider {...parentSliderSettings}>
                                    {renderSliderData}
                                </Slider>
                            </Card>
                        </div>
                    </div>
                </OverlayScrollbarsComponent>
                {/* <FooterNav history={props.history} /> */}
            </div>
        </section>

    )
}

export default CreatingWealth
