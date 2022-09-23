import React from 'react';

const BlogSingle = ({blog}) => {
    const {urlToImage:img, title, content, author, publishedAt, url} = blog;
    document.title = title;
    // console.log(blog);

    const noImage = "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";

    return (
        <div className='w-[90%] lg:w-[70%] mx-auto py-10'>
            <img className='w-full rounded-xl h-96 object-cover' src={img? img : noImage} alt={title} />
            <h1 className='my-3 text-3xl font-bold'>{title}</h1>
            <p className='my-1 flex gap-5'> <span>Posted by: {author}</span> | <span>Posted on: {publishedAt}</span> </p>
            <p>{content}</p>

            <p className='mt-7 font-bold text-md'>Get Full News From Here: <a href={url} className='text-red-500 underline'>Source Link</a></p>
            
        </div>
    );
};

export default BlogSingle;