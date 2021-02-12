import React from 'react'
import { Button } from 'react-bootstrap'
import AdVideo from '../assets/videos/Ads2.mp4'
import AdThumbnail from '../assets/videos/Advert_nail.JPG'

const Advert = (props) => {
    return (
        <section className='advert' style={{ backgroundImage: `url('${AdThumbnail}')` }}>
            <div className='advert_container'>
                <div className='advert_video col-md-12 col-lg-6 '>
                    <video src={AdVideo} poster={AdThumbnail} controls>
                        videos
                </video>
                </div>
                <div className='advert_text d-none d-lg-block col-sm-12 col-lg-5 pl-sm-3 pr-sm-3 pb-5'>
                    {/* <h1>Advert</h1> */}
                    <p>At GDL, we believe that the children are the future and there's no better way to invest in them and their future than the GDL Smart Investment Account which gives you access to loans for all educational expenses.</p>
                    <Button href='/media' variant='primary' > View Media</Button>
                </div>
            </div>
        </section>
    )
}

export default Advert
