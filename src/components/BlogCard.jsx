import React from 'react'
import BlogImage from '../assets/images/BlogImage.png'

const BlogCard = () => {
    return (
        <div className='blogCard'>
            <div className='blogCard_image' style={{ backgroundImage: `url(${BlogImage})` }} />
            <div className='blogCard_body'> 
                <h6>TRAVEL</h6>
                <h1>Surfing in Maldives</h1>
                <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
            </div>
        </div>
    )
}

export default BlogCard
