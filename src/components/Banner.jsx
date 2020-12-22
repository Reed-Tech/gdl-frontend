import React from 'react'
import BackgroundImage from '../assets/images/BannerBG.png'

const Banner = (props) => {
    return (
        <div className='banner' style={{ backgroundImage: `url(${props.background ?? BackgroundImage})` }}>
            <h3>SECURITY</h3>
            <p>We use the highest levels of security, providing total safety for our customers and all their investments.</p>
        </div>
    )
}

export default Banner
