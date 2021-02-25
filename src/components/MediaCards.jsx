import React from 'react'
import AdVideo from '../assets/videos/Ads2.mp4'
import AdThumbnail from '../assets/videos/Advert_nail.JPG'

function MediaCards() {
    return (

        <div className="container py-3">
            <div className="row">
                <div className="col-md-4">
                    <div className='blogCard' >
                        <div className='advert_video'>
                            <video src={AdVideo} poster={AdThumbnail} controls>
                                videos
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default MediaCards
