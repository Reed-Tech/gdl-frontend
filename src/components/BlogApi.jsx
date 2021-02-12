import React, { useContext } from "react";
import { BlogContext } from "../components/BlogContext";
// import BlogPost from "../components/BlogPost";

function BlogApi() {
  const { data } = useContext(BlogContext);
  console.log(data);

  return (
    <div>
      {/* <h1 className="head__text"></h1> */}
      <div className="all__post">
        {/* {data
          ? "HIiii"
          : "Loading"}
          {data ? console.log(data.title) : "Loading Blog"} */}
            {/* {data
          ? data.posts.map((post) => (
            <BlogPost data={post} key={post.id} />
          ))
          : "Loading"} */}
      </div>
    </div>
  );
}

export default BlogApi;
