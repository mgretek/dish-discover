import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { RecipeSearch } from "./pages/RecipeSearch";
import { Shoppinglist } from "./pages/Shoppinglist";
import { Wishlists } from "./pages/Wishlists";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mx-auto px-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeSearch />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/shoppinglist" element={<Shoppinglist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
