import React from 'react'
import AdVideo from '../assets/videos/Advert.mp4'
import AdThumbnail from '../assets/videos/Advert.png'

const Advert = (props) => {
    return (
        <section className='advert d-lg-flex' style={{backgroundImage:`url('${AdThumbnail}')`}}>
            <div className='advert_video col-sm-12 col-lg-6 '>
                <video src={AdVideo} poster={AdThumbnail}  controls>
                    Your browser does not support html videos
                </video>
            </div>
            <div className='advert_text col-sm-12 col-lg-5 pl-sm-3 pr-sm-3 pb-5'>
                <h1>Advert</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                <button>Action</button>
            </div>
        </section>
    )
}

export default Advert
