import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogSlider = (props) => {
    console.log(props);
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


    return (
      
        <section className="blogSlider py-5">
            <div className="container text-center">
                <div className="row text-center">
                    <div className="blogSlider_sss">
                    {data
                            ? data.data.posts.map((datas, index) => (
                            <div className='blogCard' key={datas.id}>
                                <Link to={`/singleArticle/${index + 1}`} className="blogSlider-link">
                                    <div className='blogCard_image ' style={{ backgroundImage: `url(${datas.thumbnail_image})` }} />
                                    <div className='blogCard_body'> 
                                        {/* <h6>{datas.created_at}</h6> */}
                                        <h1>{datas.title}</h1>
                                        <p>{datas.description} </p>
                                    </div>
                                </Link>
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
