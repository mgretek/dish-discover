import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Settings } from "./Settings";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Wish Dish Discover
      </Link>
      <ul>
        <CustomLink to={"/recipe"}>Recipe</CustomLink>
        <CustomLink to={"/wishlist"}>Wishlist</CustomLink>
        <CustomLink to={"/shoppinglist"}>Shoppinglist</CustomLink>
        <Link>
          <Settings />
        </Link>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
