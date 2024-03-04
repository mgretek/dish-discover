import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Settings } from "./Settings";

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-neutral-50 via-pink-200 to-violet-200 p-4 flex flex-wrap md:flex-nowrap justify-between gap-y-3 md:gap-6">
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent"
      >
        Wish Dish Discover
      </Link>
      <ul className="flex gap-2 md:gap-6 items-center">
        <CustomLink
          to={"/recipes"}
          className="text-md text-gray-700 hover:text-violet-500"
        >
          Recipes
        </CustomLink>
        <CustomLink
          to={"/wishlists"}
          className="text-md text-gray-700 hover:text-violet-500"
        >
          Wishlist
        </CustomLink>
        <CustomLink
          to={"/shoppinglist"}
          className="text-md text-gray-700 hover:text-violet-500"
        >
          Shopping List
        </CustomLink>
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
