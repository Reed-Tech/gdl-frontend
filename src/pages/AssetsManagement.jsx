import React from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import ProductBackground1 from '../assets/images/assetManagement1.png'
import ProductBackground2 from '../assets/images/assetManagement2.png'
import { Store, type as t } from '../context/store'

const assetManagementCards = [
    // ID Text used for  Nav Links Text  .... i don't have strength please😐 
    { id: 'Money Market Fund', text: <h3>MONEY<br />MARKET<br />FUND</h3>, image: ProductBackground1 },
    { id: 'Smart Investment Account', text: <h3>SMART<br />INVESTMENT<br />ACCOUNT</h3>, image: ProductBackground1 },
    { id: 'Stockbroking', text: <h3>STOCKBROKING</h3>, image: ProductBackground1 },
    { id: 'Financial Advisory', text: <h3>Financial Advisory</h3>, image: ProductBackground2 },
    { id: 'Enterprise Transgenerational Program', text: <h3>ETR</h3>, image: ProductBackground2 },
    { id: 'Research', text: <h3>Research</h3>, image: ProductBackground2 },
]


const AssetsManagement = (props) => {

    const { state, dispatch } = React.useContext(Store)
    React.useEffect(() => dispatch({ type: t.ASSET_MANAGEMENT, payload: assetManagementCards.map(e => e.id) }), [dispatch])
    console.log(state)
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
                    <div className=' row d-flex justify-content-center align-content-center' style={{ gap: '16px 12px' }} >
                        {assetManagementCards.map((e) =>
                            <CardImage image={e.image} key={e.id} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e.id })                            }>
                                {e.text}
                            </CardImage>
                        )}
                    </div>
                </Card>
            </div>

        </section>
    )
}

export default AssetsManagement
