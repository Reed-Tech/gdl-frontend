// import React, { useState, useEffect } from 'react'
// import HeaderSlider from '../components/HeaderSlider'
// import HeaderSocialLinks from '../components/HeaderSocialLinks'
// import Navbar from '../components/Navbar'
// import StockInfo from '../components/StockInfo'
// import SingleBlogBG from '../assets/images/BlogImage.png'
// import NewsLetterSubscription from '../components/NewsLetterSubscription'
// import FooterNav from '../components/FooterNav'
// import SingleBlogContent from '../components/SingleBlogContent'
// import BannerSingleBlog from '../components/BannerSingleBlog'
// import SbComment from '../components/SbComment'
// import bigData from "../components/BigData.json";

// // import axios from 'axios';



// const slideData = [
//     {
//         image: SingleBlogBG,
//         id: 1,
//         h3: 'Surfing In Maldives',
//     },

// ]
// // _______________________________________________________________________________________


// const SingleBlog = (props) => {
//     // console.log(props);

//     const [post, setPost] = useState({
//         id: "" ,
//         blogCategory: "" ,
//         blogTitle : "" ,
//         postedOn: "" ,
//         author: "" ,
//         blogImage: "" ,
//         blogText: ""
//     });
//     const [slug, setSlug] = useState('');


//     useEffect(() => {
//         const slug = props.match.params.slug;
//         console.log(slug)
//         const post = bigData.data.find(post => post.slug === slug);
//         setPost(post);
//         setSlug(slug)
//     }, [post, props.match.params.slug]);


//     // const [data, setdata] = useState()

//     // useEffect(() => {
//     //     axios
//     //     .get('https://gdlnigeria.herokuapp.com/api/v1/blog/post')
//     //     .then(res => {
//     //         console.log(res.data);
//     //         const singleBlogId = props.match.params.singleBlogId;
//     //         const datas = res.data.data.posts.find(post => post.id===singleBlogId);
//     //         setdata(datas)
//     //         console.log(setdata(datas))
//     //     })
//     //     .catch(err => {
//     //         console.log(err)
//     //     })
//     // }, [props.match.params.singleBlogId])



//     const renderSlideData = (
//         slideData.map((slides) => <section key={slides.h1}>
//             <div className='research_headerSlider headerSlider_container' style={{ backgroundImage: `url(${slides.image})` }}>
//                 <div className='headerSlider_container-text singleBlogSlider_container-h3'>
//                     <h3>{slides.h3}</h3>

//                     <p>
//                         <a href="/blog">BACK TO BLOGS</a>
//                     </p>
//                 </div>
//             </div>
//         </section>))
//     return (
//         <section className='research'>
//             <header style={{ height: '100vh' }}>
//                 <Navbar />
//                 <HeaderSocialLinks />
//                 <HeaderSlider>
//                     {renderSlideData}
//                 </HeaderSlider>
//                 <StockInfo />
//             </header>
//             <h2>{post.blogCategory}</h2>
//             < SingleBlogContent />
//             < SbComment />
//             < BannerSingleBlog />

//             <NewsLetterSubscription />
//             <FooterNav />
//         </section>
//     )
// }

// export default SingleBlog














import React from 'react'
import { Store } from '../context/store'



const SingleBlog = (props) => {
    const { state, } = React.useContext(Store)
    const blogData = state.singleBlogPage
    console.log(blogData)

    return (
        <div>
            <h2>single blog data here </h2>
            <p>title: {blogData.title}</p>
            <img src={blogData.thumbnail_image} alt="blog img" srcset=""/>
            <p>description : {blogData.description}</p>
        </div>
    )
}

export default SingleBlog
