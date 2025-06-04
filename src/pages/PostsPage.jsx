import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "http://localhost:3000";

export default function PostsPage() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((res) => setPostsList(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <ul></ul>
          {postsList.map((post) => (
            <li>{post.title}</li>
          ))}
        </div>
      </div>
    </>
  );
}
