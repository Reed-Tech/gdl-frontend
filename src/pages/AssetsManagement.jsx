import React from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import iconImage1 from '../assets/images/iconMmf.png'
import iconImage2 from '../assets/images/iconSia.png'
import iconImage3 from '../assets/images/iconStockbroking.png'
import iconImage4 from '../assets/images/iconResearch.png'
import iconImage5 from '../assets/images/iconAdvisory.png'
import iconImage6 from '../assets/images/iconsETP.png'
import { Store, type as t } from '../context/store'



const assetManagementCards = [
    // ID Text used for  Nav Links Text  .... i don't have strength please😐 
    { id: 'Money Market Fund', text: <h3>MONEY<br />MARKET<br />FUND</h3>, icon: iconImage1 },
    { id: 'Smart Investment Account', text: <h3>SMART<br />INVESTMENT<br />ACCOUNT</h3>,  icon: iconImage2 },
    { id: 'Stockbroking', text: <h3>STOCKBROKING</h3>,  icon: iconImage3 },
    { id: 'Research', text: <h3>RESEARCH</h3>,  icon: iconImage4 },
    { id: 'Financial Advisory', text: <h3>FINANCIAL ADVISORY</h3>,  icon: iconImage5 },
    { id: 'Enterprise Transgenerational Program', text: <h3>ETP</h3>,  icon: iconImage6 },
]



export const AssetManagementMobile = (props) => {
    const {  dispatch } = React.useContext(Store)



    const handleMobileModal = (e) => {
        // console.log('asset management modal')
        dispatch({ type: t.WWD_MOBILE_MODAL, payload: 'opened' })
        dispatch({ type: t.WWD_MOBILE_MODAL_NAV, payload: e })

    }




    return (
        <div>
            <Card  className='col-12' maxHeight='auto' maxWeight="100%">
                <p>
                    Money lasts longer when properly managed and knowing how to manage assets to yield maximum profit is an exceptional skill that only a few possess.
                    That is why we built a skillful team of WEALTH MANAGERS who provide discretionary and non-discretionary investment management to all our customers.
                        </p>
                <p>
                    Your money will be put in diverse assets which will in turn gather interest, all for your benefit.
                    </p>
                <p>
                    Our services are extra special and designed to meet all your investment needs. From Middle Class to High Net Worth Individuals, we offer a distinct type of asset management and advisory that is fully aligned to your personal goals.
                </p>
                <div className="products--display">
                    <h3 className='text-center mb-3 mt-3'>PRODUCTS</h3>
                    <div className=' row d-flex justify-content-center align-content-center'>
                        {assetManagementCards.map((e) =>
                            <CardImage key={e.id} className='col-4 assetManagement_cardImage' id={e.id} onClick={()=>handleMobileModal(e.id.toLocaleUpperCase())}>
                               <div className="d-block  text-center mx-auto">
                                   <img src={e.icon} className=" text-center mx-auto" alt="icons" />
                                    {e.text}
                               </div>
                             </CardImage>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    )
}


const AssetsManagement = (props) => {


    const { state, dispatch } = React.useContext(Store)
    React.useEffect(() => dispatch({ type: t.ASSET_MANAGEMENT, payload: assetManagementCards.map(e => e.id) }), [dispatch])

    const cardImageHandler = (e) => {
        dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })
        state.whatWeDoModalPosition === 0 ? dispatch({ type: t.ASSET_MANAGEMENT, payload: assetManagementCards.map(e => e.id) }) : console.log();
            // console.log('Bug Found');
    }

    return (
        <section >
            <div className='assetManagement'>
                <h1>ASSET MANAGEMENT</h1>
                <div className=' text-center ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
                    <Card className='col-12' maxHeight='auto' maxWeight="100%">
                        <p>
                            Money lasts longer when properly managed and knowing how to manage assets to yield maximum profit is an exceptional skill that only a few possess.
                            That is why we built a skillful team of WEALTH MANAGERS who provide discretionary and non-discretionary investment management to all our customers.
                        </p>
                        <p>
                            Your money will be put in diverse assets which will in turn gather interest, all for your benefit.
                        </p>
                        <p>
                            Our services are extra special and designed to meet all your investment needs. From Middle Class to High Net Worth Individuals, we offer a distinct type of asset management and advisory that is fully aligned to your personal goals.
                        </p>
                       <div className="products--display">
                            <h3 className='text-center mb-3 mt-3'>PRODUCTS</h3>
                            <div className=' row d-flex justify-content-center align-content-center'>
                                {assetManagementCards.map((e) =>
                                    <CardImage image={e.image} key={e.id} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => cardImageHandler(e.id)}>
                                       <div className="d-block text-center mx-auto">
                                            <img src={e.icon} className="text-center mx-auto" alt="icons" />
                                            {e.text}
                                        </div>
                                    </CardImage>
                                )}
                            </div>
                       </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default AssetsManagement
