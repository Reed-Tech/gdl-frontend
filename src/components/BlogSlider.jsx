import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { Store, type as t } from '../context/store'

// import BlogCard from './BlogCard';



const BlogSlider = (props) => {
    const { dispatch } = React.useContext(Store)
    const [data, setdata] = useState()

    useEffect(() => {
        axios
            .get('https://gdlnigeria.herokuapp.com/api/v1/blog/post')
            .then(res => {
                console.log(res);
                setdata(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    function textToLink(text) {
        return text.split(' ').join('-')
    }


    function handleBlogCard(data) {
        dispatch({type: t.SINGLE_BLOG_PAGE, data})
        props.history.push({
            key: data.id,
            pathname: `/blog/${textToLink(data.title)}`,
        })
    }


    return (
      
        <section className="blogSlider py-5">
            <div className="container text-center">
                <div className="row text-center">
                    <div className="blogSlider_sss">
                        {data
                            ? data.data.posts.map((datas) => (
                                <div onClick={() => handleBlogCard(datas)} className='blogCard' key={datas.id}>
                                    {/* <Link to={`/blog`} className="blogSlider-link"> */}
                                    <div className='blogCard_image ' style={{ backgroundImage: `url(${datas.thumbnail_image})` }} />
                                        <div className='blogCard_body'>
                                            {/* <h6>{datas.created_at}</h6> */}
                                            <h1>{datas.title}</h1>
                                            <p>{datas.description} </p>
                                        </div>
                                    {/* </Link> */}
                                </div>
                            ))
                            : "Loading GDL Blog..."
                        }

                    </div>

                </div>

            </div>
        </section>

    )
}

export default BlogSlider
