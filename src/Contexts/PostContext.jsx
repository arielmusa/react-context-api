import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = "http://localhost:3000";

const getPosts = createContext();

function PostsProvider({ children }) {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((res) => setPostsList(res.data));
  }, []);

  const postsData = { postsList };
  return <getPosts.Provider value={postsData}>{children}</getPosts.Provider>;
}

function usePosts() {
  return useContext(getPosts);
}

export { PostsProvider, usePosts };
