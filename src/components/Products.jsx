import { useContext } from "react";
import productsData from "../assets/productsData";
import { CartContext } from "../store";

export default function Products() {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div className="grid grid-cols-3 gap-3">
      {productsData.map((product) => {
        return (
          <div
            className="max-w-sm border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
            key={product.id}
          >
            <img
              className="h-52 w-full object-cover"
              src={product.img}
              alt=""
            />
            <div className="p-5">
              <h6 className="mb-2 flex justify-between text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
                <span>NT$ {product.price}</span>
              </h6>
              <button
                type="button"
                className="mb-2 me-2 w-full border border-[#309186] px-5 py-2.5 text-center text-sm font-medium text-[#309186] hover:bg-[#566b68] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { ...product, quantity: 1 },
                  });
                }}
              >
                加入購物車
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
