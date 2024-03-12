import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { RecipeSearch } from "./pages/RecipeSearch";
import { Shoppinglist } from "./pages/Shoppinglist";
import { Wishlists } from "./pages/Wishlists";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="App grid min-h-dvh grid-cols-1 grid-rows-[1fr_auto]">
      <div>
        <Navbar />
        <div className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeSearch />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/wishlists" element={<Wishlists />} />
            <Route path="/shoppinglist" element={<Shoppinglist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
