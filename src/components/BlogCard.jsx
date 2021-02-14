import React from 'react'
// import BlogImage from '../assets/images/BlogImage.png'

const BlogCard = (props) => {
    return (
        <div className='blogCard'>
            <div className='blogCard_image' style={{ backgroundImage: `url(${props.image})` }} />
            <div className='blogCard_body'> 
                <h6  onClick={() => props.history.push({ pathname: `/career/${props.link}` })} >{props.name}</h6>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BlogCard
