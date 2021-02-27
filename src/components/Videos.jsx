import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import VideoClip from '../assets/videos/GDL.mp4'
import {  Carousel, Modal } from 'react-bootstrap'
// import TestBG from '../assets/images/ContactUsBG.png'
import VideoBg from '../assets/videos/20210226_163331.jpg'
import { MdPlayCircleOutline } from 'react-icons/md';
import MediaCards from '../components/MediaCards'


const videoList = [
    { text: 'GDL Christmas Video', video: VideoClip, background: VideoBg },
    // { text: 'Lorem Ipsum Here ', video: VideoClip, background: TestBG },
]

const Videos = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='videos'>
            <h1>VIDEOS</h1>
            <div className='videos_nav'>
                {/* <Link to='#'>Latest Uploads</Link> */}
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
            <MediaCards />

        </div>
    )
}

export default Videos
