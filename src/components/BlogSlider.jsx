import React from 'react'
import BlogCard from './BlogCard'
import FlatList from 'flatlist-react';


const BlogSlider = () => {
    const renderProduct = (card, idx) => {
        return (
            <BlogCard />
        );
    }


    const products = [
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
        { name: 'Basic Slim Fit T-Shirt', price: '$11s9.99', image: '../../../images/images/mask35647.png' },
    ];





    return (
        <div className='blogSlider'>
            <FlatList
                list={products}
                renderItem={renderProduct}
                displayGrid
                minColumnWidth={'360px'}
            />
        </div>
    )
}

export default BlogSlider
