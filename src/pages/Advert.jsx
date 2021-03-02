import React from 'react'
import { Button } from 'react-bootstrap'
import AdVideo from '../assets/videos/GDL.mp4'
import AdThumbnail from '../assets/videos/20210226_163331.jpg'

const Advert = (props) => {
    return (
        <section className='advert' style={{ backgroundImage: `url('${AdThumbnail}')` }}>
            <div className='advert_container ml-lg-5'>
                <div className='advert_video col-md-12 col-lg-6 '>
                    <video src={AdVideo} poster={AdThumbnail} controls>
                        videos
                    </video>
                </div>
                <div className='advert_text  col-sm-12 col-lg-6'>
                    <p>We are a data driven firm with a priority to increase the purchasing power of the Nigerian middle class</p>
                    <Button href='/media' variant='primary' >Explore GDL</Button>
                </div>
            </div>
        </section>
    )
}

export default Advert
