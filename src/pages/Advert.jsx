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
                    <p>At GDL, we believe that the children are the future and there's no better way to invest in them and their future than the GDL Smart Investment Account which gives you access to loans for all educational expenses.</p>
                    <Button href='/media' variant='primary' > View Media</Button>
                </div>
            </div>
        </section>
    )
}

export default Advert
