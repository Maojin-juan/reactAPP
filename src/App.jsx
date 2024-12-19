import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext, cartReducer, cartInit } from "./store";

function App() {
  const reducer = useReducer(cartReducer, cartInit);

  return (
    <CartContext.Provider value={reducer}>
      <Navbar />
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7">
            <Products />
          </div>
          <div className="col-span-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
