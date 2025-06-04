import { usePosts } from "../Contexts/PostContext";
import PostCard from "./PostCard";

export default function PostList() {
  const { postsList } = usePosts();

  return postsList.map((post) => (
    <PostCard key={post.id} title={post.title} imgUrl={post.image} link="#" />
  ));
}
