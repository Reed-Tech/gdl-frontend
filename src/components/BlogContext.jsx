import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://gdlnigeria.herokuapp.com/api/v1/blog/post"
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);

  return (
    <BlogContext.Provider value={{ data }}>
      {props.children}
    </BlogContext.Provider>
  );
};
