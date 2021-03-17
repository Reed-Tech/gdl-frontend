import React from 'react'
import Card from '../components/Card'
import BackgroundImage from '../assets/images/crwealth.JPEG'
import Slider from 'react-slick'
import { Store } from '../context/store'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'


const CreatingWealth = (props) => {
    const { state } = React.useContext(Store)

    const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    const stockInfoDataChunk = (chunk(state.StockInfoData, 10));



    const parentSliderSettings = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    }

    const renderSliderData = stockInfoDataChunk?.map((e, i) => (
        <section key={i}>
            <h3 className='mb-4'>STOCK INFO</h3>
            {e.map((f, i) => (
                <p key={i}>{f.Symbol}: {f.Open} </p>
            ))}

        </section>
    ))



    return (
        <section>
            <div className='creatingWealth justify-content-lg-between' style={{ backgroundImage: `url('${BackgroundImage}')` }}>
                <h1 className='d-sm-block mb-4 mt-4 d-lg-none'>CREATING WEALTH AND TRANSFORMING SOCIETY</h1>
                <OverlayScrollbarsComponent className="d-block d-lg-none" style={{ height: 'calc(100vh - 20em)' }}>
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
                <div className="d-none d-lg-block">
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
                </div>
            </div>
        </section>

    )
}

export default CreatingWealth
