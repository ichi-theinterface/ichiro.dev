import "./PostCard.css";
import React from "react";
import { Link } from "react-router-dom";
import blogs from "../blogs.json";

function PostCard() {
  return (
    <div className="PostCardFrame">
      {blogs.map((blog) => (
        <div className="blog-post-cards" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div>
              <img
                className="blog-post-image"
                src={`https://ichiro-dev-portfolio-blog-md.s3.amazonaws.com/${blog.id}.png`}
                alt={blog.title}
              />
              <p className="blog-post-title">{blog.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
