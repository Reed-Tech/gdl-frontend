import React from 'react'
import { RWebShare } from "react-web-share";
import { FaShareAlt } from 'react-icons/fa/index.esm'


function ShareBlog() {
    var locationPath = window.location.href
    var locationPathName = window.location.pathname
    console.log(window.location.pathname); 

    return (
        <RWebShare
            data={{
                text: locationPathName,
                url: locationPath,
                title: "Share this blog",
            }}
        >
            <FaShareAlt title="Share this blog" className="faShare" size='24' />
        </RWebShare>
    )
}

export default ShareBlog
