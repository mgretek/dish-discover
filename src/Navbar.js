export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Wish Discover
      </a>
      <ul>
        <li className="active">
          <a href="/recipe">Recipe</a>
        </li>
        <li>
          <a href="/wishlist">wishlist</a>
        </li>
        <li>
          <a href="/shoppinglist">Shopping list</a>
        </li>
      </ul>
    </nav>
  );
};
