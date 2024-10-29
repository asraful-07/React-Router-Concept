import { useLoaderData, useNavigate } from "react-router-dom";

const PostsDetails = () => {
  const post = useLoaderData();
  const { userId, body } = post;
  const GoBack = useNavigate();

  const handelGo = () => {
    GoBack(-1);
  };
  return (
    <div>
      <h4>userId:{userId}</h4>
      <p>Body: {body}</p>
      <button onClick={handelGo}>Go oo</button>
    </div>
  );
};

export default PostsDetails;
