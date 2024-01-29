import "./Blogs.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function BlogPage() {
  const { id } = useParams();
  const [markdown, setMarkdown] = useState("");

  if (typeof id !== "string") {
    id = String(id); // Convert to string if it's not already a string
  }

  let s3URL =
    "https://ichiro-dev-portfolio-blog-md.s3.amazonaws.com/" + id + ".md";

  useEffect(() => {
    fetch(s3URL)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="canvas">
      <div className="blog-post-frame">
        <div className="markdown">
          <ReactMarkdown children={markdown} />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
