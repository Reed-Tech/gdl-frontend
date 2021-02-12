import React from "react";

function BlogPost({ data }) {
  return (
    <div className="blog">
      <h1 className="blogs__title">{data.title}</h1>
     
    </div>
  );
}

export default BlogPost;
