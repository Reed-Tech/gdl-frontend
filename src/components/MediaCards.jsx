import React from 'react'
import AdVideo1 from '../assets/videos/Ads2.mp4'
import AdVideo2 from '../assets/videos/yt1s.com -GDL Christmas Vox Pop_480p.mp4'
import AdVideo3 from '../assets/videos/yt1s.com - GDL Stock Trader_480p.mp4'
import AdVideo4 from '../assets/videos/yt1s.com -GDL Stock Trader_480p.mp4'
import AdThumbnail1 from '../assets/videos/Advert_nail.JPG'
import AdThumbnail2 from '../assets/videos/20210226_170041.jpg'
import AdThumbnail3 from '../assets/videos/20210226_165607.jpg'

function MediaCards() {
    return (

        <div className="container mediaVideo py-3">
            <div className="row">
                <div className="col-md-4">
                    <div className='blogCard mediaVideo_card' >
                        <div className='advert_video'>
                            <video src={AdVideo1} poster={AdThumbnail1} controls>
                                videos
                            </video>
                        </div>
                        <h6 className='mediaVideo_card-text text-center'>GDL Christmas Video</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='blogCard mediaVideo_card' >
                        <div className='advert_video'>
                            <video src={AdVideo2} poster={AdThumbnail2} controls>
                                videos
                            </video>
                        </div>
                        <h6 className='mediaVideo_card-text text-center'>GDL Christmas Video</h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='blogCard mediaVideo_card' >
                        <div className='advert_video'>
                            <video src={AdVideo3} poster={AdThumbnail3} controls>
                                videos
                            </video>
                        </div>
                        <h6 className='mediaVideo_card-text text-center'>GDL Stock Trader(II) </h6>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='blogCard mediaVideo_card' >
                        <div className='advert_video'>
                            <video src={AdVideo4} poster={AdThumbnail3} controls>
                                videos
                            </video>
                        </div>
                        <h6 className='mediaVideo_card-text text-center'>GDL Stock Trader(I)</h6>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default MediaCards
