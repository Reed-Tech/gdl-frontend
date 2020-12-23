import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import VideoClip from '../assets/videos/Advert.mp4'
import {  Carousel, Modal } from 'react-bootstrap'
import TestBG from '../assets/images/ContactUsBG.png'
import VideoBg from '../assets/images/VidBG.png'
import { MdPlayCircleOutline } from 'react-icons/md';

const videoList = [
    { text: 'Financial Aspects of Investment ', video: VideoClip, background: VideoBg },
    { text: 'Lorem Ipsum Here ', video: VideoClip, background: TestBG },
]

const Videos = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='videos'>
            <h1>VIDEOS</h1>
            <div className='videos_nav'>
                <Link to='#'>Latest Uploads</Link>
            </div>
            <div className='videos_player'>
                <Carousel slide={false} nextIcon={null} prevIcon={null} >
                    {videoList.map((e) =>
                        <Carousel.Item>
                            <div className='videos_player-slide' style={{ backgroundImage: `url(${e.background})` }}>
                                <Modal centered show={show} onHide={handleClose}>
                                    <video autoPlay controls src={VideoClip}></video>
                                </Modal>
                                <div>
                                    <button onClick={handleShow}><MdPlayCircleOutline size='5em' color='white' /></button>
                                    <h1>{e.text} </h1>
                                </div>
                            </div>
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>

        </div>
    )
}

export default Videos