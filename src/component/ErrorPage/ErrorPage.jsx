import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>This is Wrong Page!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>page not found</h3>
          <p>pleas go back</p>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
