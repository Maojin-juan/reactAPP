import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartContext } from "./store";

function App() {
  const cartReducer = useReducer(
    (state, action) => {
      const cartList = [...state.cartList];
      console.log(action);
      switch (action.type) {
        case "ADD_TO_CART":
          cartList.push(action.payload);
          return {
            ...state,
            cartList,
          };
        default:
          return state;
      }
    },
    {
      cartList: [],
    },
  );

  return (
    <CartContext.Provider value={cartReducer}>
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
