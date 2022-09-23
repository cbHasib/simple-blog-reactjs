import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BlogsDisplay from "../BlogsDisplay/BlogsDisplay";

const BlogData = ({setShowPost, setShowAllPost, setPostDetails}) => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=keyword&apiKey=f0c9598aa75947c5af53695cd06767ef"
    )
      .then((res) => res.json())
      .then((data) => setBlogData(data.articles));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-4xl text-center font-bold">Get the Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-20 w-[90%] mx-auto py-10">
        {blogData.map((blog) => (
          <BlogsDisplay blog={blog} key={blog.url} setShowPost={setShowPost} setShowAllPost={setShowAllPost} setPostDetails={setPostDetails}/>
        ))}
      </div>
    </div>
  );
};

export default BlogData;
