import React from 'react'
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

const Events = () => {
    return (
        <section className='events d-flex flex-wrap'>
            <div className="col-lg-3 col-12 events_eventList">
                <h1>Events</h1>
                <ul>
                    <li>20 years anniversary</li>
                    <li>Investment Conference</li>
                    <li>Our Time in London</li>
                    <li>20 years anniversary</li>
                    <li>20 years anniversary</li>
                    <li>20 years anniversary</li>
                </ul>
            </div>
            <div className="col-lg-9 col-12 mt-5 mt-lg-0">
                <Gallery images={IMAGES} />
            </div>

        </section>
    )
}

export default Events
