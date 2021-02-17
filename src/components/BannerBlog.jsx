import React from 'react'
import { Button } from 'react-bootstrap'

const BannerBlog = () => {
    return (
        <div className='bannerBlog d-flex'>
            <div className="bannerBlog-overlay">
                <div className="col-lg-7 offset-lg-5 col-sm-12 bannerBlog_text">
                    <h1>INVEST WITH EASE</h1>
                    <p>When you invest with us, all you need to do is sit back, relax and let us make your money work for you</p>
                    <Button bsPrefix='btn px-5 btn-light font-weight-bold' href='https://mystifying-goodall-2b93ae.netlify.app/' variant='light' className='rounded-pill'>INVEST NOW</Button>
                </div>
                <div className="bannerBlog_image col-lg-5  d-none d-lg-block">
                    <div></div>
                </div>
            </div>
            

        </div>
    )
}

export default BannerBlog
