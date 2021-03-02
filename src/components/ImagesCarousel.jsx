import React from 'react'
import { Carousel } from 'react-bootstrap'
import ImageBG1 from '../assets/images/mediaAd1.jpg'
import ImageBG2 from '../assets/images/mediaAd2.jpg'


const ImagesList = [
    { background:ImageBG1},
    { background:ImageBG2},
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
                        <div className='imagesCarousel_body' style={{ backgroundImage: `url(${e.background})`,  Height:"60vh" }}>
                        </div>
                    </Carousel.Item>
                )}


            </Carousel>
        </div>
    )
}

export default ImagesCarousel
