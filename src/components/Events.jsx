import React, {useContext,  useEffect} from 'react'
import { Store, type as t } from '../context/store'
import Gallery from 'react-grid-gallery'
import GridImg1 from '../assets/images/event_1.jpg'
import GridImg2 from '../assets/images/event_2.jpg'
import GridImg3 from '../assets/images/event_3.jpg'
import GridImg4 from '../assets/images/event_4.jpg'
import GridImg5 from '../assets/images/event_5.jpg'
import GridImg6 from '../assets/images/event_6.jpg'
import GridImg7 from '../assets/images/event_7.jpg'
import GridImg8 from '../assets/images/event_8.jpg'
import GridImg9 from '../assets/images/event_9.jpg'
import GridImg10 from '../assets/images/event_10.jpg'
import inde1 from '../assets/images/inde1.jpg'
import inde2 from '../assets/images/inde2.jpg'
import inde3 from '../assets/images/inde3.jpg'
import inde4 from '../assets/images/inde4.jpg'
import inde5 from '../assets/images/inde5.jpg'
import inde6 from '../assets/images/inde6.jpg'
import inde7 from '../assets/images/inde7.jpg'
import inde8 from '../assets/images/inde8.jpg'
import inde9 from '../assets/images/inde9.jpg'
import inde10 from '../assets/images/inde10.jpg'


const IMAGES = [
    {
        src: GridImg1,
        thumbnail: GridImg1,
        // thumbnailWidth: 450,
        // thumbnailHeight: 454,
        caption: "Generation G Event"
    },
    {
        src: GridImg2,
        thumbnail: GridImg2,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg3,
        thumbnail: GridImg3,
        // thumbnailWidth: 320,
        // thumbnailHeight: 474,
        caption: "Generation G Event"
    },
    {
        src: GridImg4,
        thumbnail: GridImg4,
        // thumbnailWidth: 320,
        // thumbnailHeight: 374,
        caption: "Generation G Event"
    },
    {
        src: GridImg5,
        thumbnail: GridImg5,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg6,
        thumbnail: GridImg6,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg7,
        thumbnail: GridImg7,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg7,
        thumbnail: GridImg7,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg8,
        thumbnail: GridImg8,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg9,
        thumbnail: GridImg9,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: GridImg10,
        thumbnail: GridImg10,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
]

const IMAGESTwo = [
    {
        src: inde1,
        thumbnail: inde1,
        // thumbnailWidth: 450,
        // thumbnailHeight: 454,
        caption: "Generation G Event"
    },
    {
        src: inde2,
        thumbnail: inde2,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde3,
        thumbnail: inde3,
        // thumbnailWidth: 320,
        // thumbnailHeight: 474,
        caption: "Generation G Event"
    },
    {
        src: inde4,
        thumbnail: inde4,
        // thumbnailWidth: 320,
        // thumbnailHeight: 374,
        caption: "Generation G Event"
    },
    {
        src: inde5,
        thumbnail: inde5,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde6,
        thumbnail: inde6,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde7,
        thumbnail: inde7,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde8,
        thumbnail: inde8,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde9,
        thumbnail: inde9,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
    {
        src: inde10,
        thumbnail: inde10,
        // thumbnailWidth: 320,
        // thumbnailHeight: 174,
        caption: "Generation G Event"
    },
]

export const Example = {
    'Generation G Event': {
        id: 'Generation G Event',
        caption: "Generation G Event",
        images: [ GridImg1 ],
    },
    'Indepence Day Celebration': {
        id: 'Indepence Day Celebration',
        caption: "Generation G Event",
        images: [ inde1, ],
    },
    

}


const navText = Object.keys(Example)

const Events = () => {
    const { state, dispatch } = useContext(Store)
    useEffect(() =>
    dispatch({ type: t.EVENTS, nav: navText.map((e) => e), active: navText[0] })
    , [dispatch], null)

    let NavItems = state.EventsNav.map((e) => <li className={`${e === state.EventsActive ? "bg-secondary" : ''}`} onClick={() => dispatch({ type: t.EVENTS, nav: navText.map((e) => e), active: e })} key={e}>{e}</li>)

    return (
        <section className='events d-flex flex-wrap'>
            <div className="col-lg-3 col-12 events_eventList">
                <h1>Events</h1>
                <ul>
                {NavItems}
                    {/* <li>Generation G Event</li>
                    <li>Investment Conference</li> */}
            
                </ul>
            </div>
            <div className="col-lg-9 col-12 mt-5 mt-lg-0">
                {/* <Gallery images={IMAGES} /> */}
                {state.EventsActive &&( Example[state.EventsActive].id === 'Generation G Event') ? Example[state.EventsActive].images.map((e) =>
                  <Gallery images={IMAGES} />) : <Gallery images={IMAGESTwo} />}
            </div>

        </section>
    )
}

export default Events
