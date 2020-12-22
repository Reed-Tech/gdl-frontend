import React from 'react'
import Gallery from 'react-grid-gallery'
import GridImg1 from '../assets/images/event (1).png'
import GridImg2 from '../assets/images/event (2).png'
import GridImg3 from '../assets/images/event (3).png'
import GridImg4 from '../assets/images/event (4).png'
import GridImg5 from '../assets/images/event (5).png'
import GridImg6 from '../assets/images/event (6).png'


const IMAGES = [
    {
        src: GridImg1,
        thumbnail: GridImg1,
        thumbnailWidth: 450,
        thumbnailHeight: 454,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: GridImg2,
        thumbnail: GridImg2,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: GridImg3,
        thumbnail: GridImg3,
        thumbnailWidth: 320,
        thumbnailHeight: 474,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: GridImg4,
        thumbnail: GridImg4,
        thumbnailWidth: 320,
        thumbnailHeight: 374,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: GridImg5,
        thumbnail: GridImg5,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
        src: GridImg6,
        thumbnail: GridImg6,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
    },
]

const Events = () => {
    return (
        <section className='events d-flex flex-wrap'>
            <dvi className="col-lg-3 col-12 events_eventList">
                <h1>Events</h1>
                <ul>
                    <li>20 years anniversary</li>
                    <li>Investment Conference</li>
                    <li>Our Time in London</li>
                    <li>20 years anniversary</li>
                    <li>20 years anniversary</li>
                </ul>
            </dvi>
            <div className="col-lg-9 col-12 mt-5 mt-lg-0">
                <Gallery images={IMAGES} />
            </div>

        </section>
    )
}

export default Events
