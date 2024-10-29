import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username } = user;

  const navigate = useNavigate();

  const handelGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>UserName: {username}</h4>
      {/* <h4>Email: {email}</h4> */}
      <Link to={`/user${id}`}>Click me</Link>
      <button onClick={handelGoBack}>Go Back</button>
    </div>
  );
};

export default User;
