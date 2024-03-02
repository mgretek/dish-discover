import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { RecipeSearch } from "./pages/RecipeSearch";
import { Shoppinglist } from "./pages/Shoppinglist";
import { Wishlists } from "./pages/Wishlists";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mx-auto h-svh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipeSearch />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/shoppinglist" element={<Shoppinglist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div className="flex">
        <Footer />
      </div>
    </div>
  );
}

export default App;
