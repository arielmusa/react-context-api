import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";

export default function PostsPage() {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <PostList />
          {/* <ul>
            {postsList.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}
