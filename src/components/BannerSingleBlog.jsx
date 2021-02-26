import React from 'react';
import { Button } from 'react-bootstrap'


function BannerSingleBlog() {
    return (
        <section className="py-5">
            <div className="bannerSR">
                <div className='bannerSR-overlay'>
                    <div className="bannerSR-txt">
                        <h1>Why You Should Invest with Us</h1>
                        <div className="row text-center mt-md-3">
                            <div className="col-md-6">
                                <p>We invest in a spectrum of assets which ensure your risk and returns are appropriate to your profile and objectives. We provide an array of options including treasury bills and other gilts, top-performing stocks, bonds and well-managed portfolios</p>
                            </div>
                            <div className="col-md-6">
                            <p>We are licensed by the Securities & Exchange Commission (SEC) to manage financial and non-financial assets (infrastructure). In essence, we are duly recognized and regulated as a leading financial institution. </p>
                            </div>
                            <div className="col-md-12 mt-3 mb-3">
                                <Button href='https://mystifying-goodall-2b93ae.netlify.app/' className="btn-SR_invest"> Invest Now </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

       
    )
}

export default BannerSingleBlog
