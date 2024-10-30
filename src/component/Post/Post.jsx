import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handelMe = () => {
    navigate(-1);
  };

  return (
    <div>
      <h4 className="text-red-600">Id:{id}</h4>
      <p>Title: {title}</p>
      <Link to={`/post/${id}`}>Click me</Link>
      <button className="bg-purple-600" onClick={handelMe}>
        Go Back
      </button>
    </div>
  );
};

export default Post;
