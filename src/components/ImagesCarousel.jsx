import React from 'react'
import { Carousel } from 'react-bootstrap'
import ImageBG from '../assets/images/VidBG.png'


const ImagesList = [
    { background:ImageBG},
    { background:ImageBG},
]

const ImagesCarousel = () => {
    return (
        <div className='imagesCarousel'>
            <h1>IMAGES</h1>
            <div className="imagesCarousel_nav">
                {/* <Link to='#'>Latest Uploads</Link> */}
            </div>
            <Carousel slide={true} fade nextIcon={null} prevIcon={null}>
                {ImagesList.map((e) =>
                    <Carousel.Item key={e.h1}>
                        <div className='imagesCarousel_body' style={{ backgroundImage: `url(${e.background})` }}>
                        </div>
                    </Carousel.Item>
                )}


            </Carousel>
        </div>
    )
}

export default ImagesCarousel
