import React from "react";

const BlogsDisplay = ({ blog, setShowPost, setShowAllPost, setPostDetails}) => {
  // console.log(blog);

// const [postDetails, setPostDetails] = useState(null);

  const noImage =
    "https://cdn.head-fi.org/assets/classifieds/hf-classifieds_no-image-available_2.jpg";
  const { urlToImage, title, description } = blog;
  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={urlToImage ? urlToImage : noImage}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 60)}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => {
                setShowAllPost(false);
                setShowPost(true);
                setPostDetails(blog);
              }}
              className="btn btn-primary"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default BlogsDisplay;
