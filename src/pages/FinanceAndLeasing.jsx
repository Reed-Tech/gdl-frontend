import React, { useContext } from 'react'
import Card from '../components/Card'
import CardImage from '../components/CardImage'
import iconHighNote from '../assets/images/iconHighNote.png'
import iconTeasuryBills from '../assets/images/iconTeasuryBills.png'
import iconDollarNote from '../assets/images/iconDollarNote.png'
import iconLongTerm from '../assets/images/iconLongTerm.png'
import iconGdlFinance from '../assets/images/iconGdlFinance.png'
import { Store, type as t } from '../context/store'


const financeAndLeasingCards = [
    { id: 'High Yield Note', text: <h3>HIGH YIELD<br />NOTE</h3>, icon: iconHighNote },
    { id: 'Treasury Bills', text: <h3>TREASURY<br />BILLS</h3>, icon: iconTeasuryBills },
    { id: 'Long Term Note', text: <h3>LONG TERM <br />NOTE</h3>, icon: iconLongTerm },
    { id: 'Dollar Note', text: <h3>DOLLAR NOTE</h3>, icon: iconDollarNote },
    { id: 'GDL Finance', text: <h3>GDL <br />FINANCE</h3>, icon: iconGdlFinance },
]


export const FinanceAndLeasingMobile = () => {
    const { dispatch } = useContext(Store)

    const handleMobileModal = (e) => {
        console.log('asset management modal')
        dispatch({ type: t.WWD_MOBILE_MODAL, payload: 'opened' })
        dispatch({ type: t.WWD_MOBILE_MODAL_NAV, payload: e })

    }
    return (
        <div>
            <Card >
                <p>There currently exist a gap in the Nigerian financial markets as the existing banks and other financial institutions have not been able to adequately cater for the financial needs of the emerging local corporate as well as the small and medium scale enterprises. </p>
                <p>We envision these inherent gaps as an opportunity to carve a niche for ourselves by focusing on how to develop, nurture, grow and deepen financial inclusion amongst these categories of clients by providing them with the following financial services.</p>
                <h3 className='text-center mb-3'>PRODUCTS</h3>
                <div className=' row d-flex justify-content-center align-content-center' >
                    {financeAndLeasingCards.map((e) =>
                        <CardImage key={e.id} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => handleMobileModal(e.id.toLocaleUpperCase())}>
                            <div className="d-block  text-center mx-auto">
                                <img src={e.icon} className=" text-center mx-auto" alt="icons" />
                                {e.text}
                            </div>
                        </CardImage>
                    )}
                </div>
            </Card>
        </div>

    )
}

const FinanceAndLeasing = (props) => {

    const { state, dispatch } = useContext(Store)
    React.useEffect(() => dispatch({ type: t.FINANCE_AND_LEASING, payload: financeAndLeasingCards.map(e => e.id) }), [dispatch])

    const cardImageHandler = (e) => {
        dispatch({ type: t.ASSET_MANAGEMENT_ACTIVE, payload: e })
        state.whatWeDoModalPosition === 1 ? dispatch({ type: t.ASSET_MANAGEMENT, payload: financeAndLeasingCards.map(e => e.id) }) : console.log();
        // console.log('Bug Found');
    }

    return (
        <section className='financeAndLeasing'>
            <div className="financeAndLeasing_web">
                <h1>FINANCE AND LEASING</h1>
                <div className='ml-lg-5 mr-lg-5 mr-md-0 ml-md-0'>
                    <Card className='col-12 mr-2'>
                        <p>There currently exist a gap in the Nigerian financial markets as the existing banks and other financial institutions have not been able to adequately cater for the financial needs of the emerging local corporate as well as the small and medium scale enterprises. </p>
                        <p>We envision these inherent gaps as an opportunity to carve a niche for ourselves by focusing on how to develop, nurture, grow and deepen financial inclusion amongst these categories of clients by providing them with the following financial services.</p>
                        <h3 className='text-center mb-3'>PRODUCTS</h3>
                        <div className=' row d-flex justify-content-center align-content-center' >

                            {financeAndLeasingCards.map((e) =>
                                <CardImage key={e.id} image={e.image} className='col-4 assetManagement_cardImage' id={e.id} onClick={() => cardImageHandler(e.id)}>
                                    <div className="d-block  text-center mx-auto">
                                        <img src={e.icon} className=" text-center mx-auto" alt="icons" />
                                        {e.text}
                                    </div>
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
