import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul className="flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </ul>
    </div>
  );
};

export default Header;
