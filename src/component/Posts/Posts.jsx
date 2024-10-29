import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>posts:{posts.length}</h1>
      {posts.map((post, idx) => (
        <Post key={idx} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
