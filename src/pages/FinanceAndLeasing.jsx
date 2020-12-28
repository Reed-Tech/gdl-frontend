import React, { useContext } from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import ProductBackground1 from '../assets/images/assetManagement1.png'
import ProductBackground2 from '../assets/images/assetManagement2.png'
import { Store, type as t } from '../context/store'


const financeAndLeasingCards = [
    { id: 'High Yield Note', text: <h3>HIGH YIELD<br />NOTE</h3>, image: ProductBackground1 },
    { id: 'Treasury Bill', text: <h3>TREASURY<br />BILL</h3>, image: ProductBackground1 },
    { id: 'Long Term Note', text: <h3>LONG TERM <br />NOTE</h3>, image: ProductBackground1 },
    { id: 'Dollar Note', text: <h3>DOLLAR NOTE</h3>, image: ProductBackground2 },
    { id: 'GDL Finance', text: <h3>GDL <br />FINANCE</h3>, image: ProductBackground2 },
]


export const FinanceAndLeasingMobile = () => {
    const { dispatch } = useContext(Store)
    return (
        <div>
            <Card >
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
            <br />
            <Card>
                <h3 className='text-center mb-3'>PRODUCTS</h3>
                <div className=' row d-flex justify-content-center align-content-center' >
                    {financeAndLeasingCards.map((e) =>
                        <CardImage key={e.id} image={e.image} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e.id })}>
                            {e.text}
                        </CardImage>
                    )}
                </div>
            </Card>

        </div>

    )
}

const FinanceAndLeasing = (props) => {

    const { dispatch } = useContext(Store)

    return (
        <section className='financeAndLeasing'>
            <div className="financeAndLeasing_web">
                <h1>FINANCE AND LEASING</h1>
                <div className=' d-lg-flex justify-content-between ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
                    <Card className='col-lg-6 mr-2'>
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

                >
                    <Card scrollable col='col-6' className=' mt-sm-3 mt-lg-0 ml-2'>
                        <h3 className='text-center mb-3'>PRODUCTS</h3>
                        <div className=' row d-flex justify-content-center align-content-center' >


                            {financeAndLeasingCards.map((e) =>
                                <CardImage key={e.id} image={e.image} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e.id })}>
                                    {e.text}
                                </CardImage>
                            )}
                        </div>
                    </Card>
                </div>
            </div>

        </section>
    )
}

export default FinanceAndLeasing
