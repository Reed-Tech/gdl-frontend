import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Store, type as t } from '../context/store'




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
                                    <div className='blogCard_image ' style={{ backgroundImage: `url(${datas.thumbnail_image})` }} />
                                        <div className='blogCard_body'>
                                            <h1><strong>{datas.title}</strong></h1>
                                            <p>{datas.description} </p>
                                        </div>
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
