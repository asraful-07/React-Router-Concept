import { useLoaderData, useParams } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const params = useParams();
  const { id, email } = user;
  console.log(params);
  return (
    <div>
      <h2>userDetails to welcome{id}</h2>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default UserDetails;
