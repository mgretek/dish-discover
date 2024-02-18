import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipes";
import { Shoppinglist } from "./pages/Shoppinglist";
import { Wishlist } from "./pages/Wishlist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shoppinglist" element={<Shoppinglist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
