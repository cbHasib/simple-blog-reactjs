import { useState } from "react";
import "./App.css";
import BlogData from "./components/BlogData/BlogData";
import BlogSingle from "./components/BlogSingle/BlogSingle";
import Header from "./components/Header/Header";

function App() {
  const [showPost, setShowPost] = useState(false);
  const [showAllPost, setShowAllPost] = useState(true);
  const [postDetails, setPostDetails] = useState(null);

  return (
    <div className="App">
      <Header showPost={showPost} showAllPost={showAllPost}  setShowPost={setShowPost} setShowAllPost={setShowAllPost}  />
      {showAllPost && (
        <BlogData
          setShowPost={setShowPost}
          setShowAllPost={setShowAllPost}
          setPostDetails={setPostDetails}
        />
      )}

      {showPost && <BlogSingle blog={postDetails} />}
    </div>
  );
}

export default App;
