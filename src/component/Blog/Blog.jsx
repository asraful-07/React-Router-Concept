import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Blog = () => {
  const blog = useLoaderData();
  console.log(blog);
  return (
    <div>
      <h1>blog: {blog.length}</h1>
      <h4>hi i am blog</h4>
      {blog.map((user, idx) => (
        <User key={idx} user={user}></User>
      ))}
    </div>
  );
};

export default Blog;
