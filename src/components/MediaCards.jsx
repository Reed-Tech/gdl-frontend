import React from 'react'
import AdVideo from '../assets/videos/Ads2.mp4'
import AdThumbnail from '../assets/videos/Advert_nail.JPG'

function MediaCards() {
    return (

        <div className="container mediaVideo py-3">
            <div className="row">
                <div className="col-md-12">
                    <div className='blogCard mediaVideo_card' >
                        <div className='advert_video'>
                            <video src={AdVideo} poster={AdThumbnail} controls>
                                videos
                            </video>
                        </div>
                        <h4 className='text-center'>GDL Christmas Video</h4>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default MediaCards
