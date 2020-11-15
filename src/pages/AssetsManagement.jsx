import React from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import ProductBackground1 from '../assets/images/assetManagement1.png'
import ProductBackground2 from '../assets/images/assetManagement2.png'

const AssetsManagement = () => {
    return (
        <section className='assetManagement'>
            <h1>ASSET MANAGEMENT</h1>
            <div className=' d-lg-flex justify-content-between ml-lg-5 mr-lg-5 mr-md-0 ml-md-0' style={{ gap: '1em' }}>
                <Card className='col-lg-6'>
                    <p>
                        Money lasts longer when properly managed and knowing how to manage assets to yield maximum profit is an exceptional skill that only a few possess.
                        That is why we built a skillful team of wealth managers who provide discretionary and non-discretionary investment management to all our customers.
                        </p>
                    <p>
                        Your money will be put in diverse assets which will in turn gather interest, all for your benefit.
                    </p>
                    <p>
                        Our services are extra special and designed to meet all your investment needs. From middle class to high net worth individuals, we offer a distinct type of asset management and advisory that is fully aligned to your personal goals.
                    </p>
                </Card>
                <Card className='col-lg-6 mt-sm-3 mt-lg-0 '>
                    <h3 className='text-center mb-3'>PRODUCTS</h3>
                    <div className=' row d-flex justify-content-center align-content-center' style={{gap:'16px 12px'}} >
                        <CardImage image={ProductBackground1} className='col-4 assetManagement_cardImage'>
                            <h3>MONEY<br />MARKET<br />FUND</h3>
                        </CardImage>
                        <CardImage image={ProductBackground1} className='col-4 assetManagement_cardImage'>
                            <h3>SMART<br />INVESTMENT<br />ACCOUNT</h3>
                        </CardImage>
                        <CardImage image={ProductBackground1} className='col-4 assetManagement_cardImage'>
                            <h3>STOCKBROKING</h3>
                        </CardImage>
                        <CardImage image={ProductBackground2} className='col-4 assetManagement_cardImage'>
                            <h3>FINANCIAL<br />ADVISORY</h3>
                        </CardImage>
                        <CardImage image={ProductBackground2} className='col-4 assetManagement_cardImage'>
                            <h3>ETR</h3>
                        </CardImage>
                        <CardImage image={ProductBackground2} className='col-4 assetManagement_cardImage'>
                            <h3>RESEARCH</h3>
                        </CardImage>
                       
                    </div>
                </Card>
            </div>

        </section>
    )
}

export default AssetsManagement
