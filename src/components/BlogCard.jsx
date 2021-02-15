import React from 'react'
// import { Button } from 'react-bootstrap'
// import BlogImage from '../assets/images/BlogImage.png'

const BlogCard = (props) => {
    return (
        <div className='blogCard'>
            <div className='blogCard_image' style={{ backgroundImage: `url(${props.image})` }} />
            <div className='blogCard_body'> 
                <h6>{props.name}</h6>
                <p>{props.description}</p>
            </div>
            {/* <Button onClick={() => props.history.push({ pathname: `/career/${props.link}` })} variant='outline-light' className='rounded-pill'>LEARN MORE</Button> */}

        </div>
    )
}

export default BlogCard
