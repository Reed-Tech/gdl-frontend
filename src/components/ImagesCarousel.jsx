import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ImageBG from '../assets/images/VidBG.png'
import {FaChevronRight} from 'react-icons/fa'


const ImagesList = [
    { h1: 'Financial Aspects of Investments', h3: 'An introduction to investment', background:ImageBG , link: '/#' },
    { h1: 'Financial Aspects of Investment', h3: 'An introduction to investment', background:ImageBG , link: '/#' },
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
                            <div>
                                <h1>{e.h1} </h1>
                                <h3>{e.h3} </h3>
                            </div>
                            <Link to={e.link}>View Article <FaChevronRight/> </Link>
                        </div>
                    </Carousel.Item>
                )}


            </Carousel>
        </div>
    )
}

export default ImagesCarousel
