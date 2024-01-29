import "./Blogs.css";
import PostCard from "../components/PostCard";

function Blogs() {
  return (
    <div className="canvas">
      <div className="BlogList-Header-Frame">
        <h1 className="BlogList-Header">My Engineering Blog</h1>
      </div>
      <div className="blog-post-frame">
        <PostCard />
      </div>
    </div>
  );
}

export default Blogs;
