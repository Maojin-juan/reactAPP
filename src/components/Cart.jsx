import { useContext } from "react";
import { CartContext } from "../store";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div className="bg-gray-100 p-3">
      <table className="w-full text-left text-sm rtl:text-right">
        <tbody>
          {state.cartList.map((item) => {
            return (
              <tr className="border-b dark:border-gray-700" key={item.id}>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="px-2.5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_CART_ITEM",
                        payload: { ...item },
                      });
                    }}
                  >
                    X
                  </button>
                </td>
                <td>
                  <img
                    className="size-[75px] object-cover"
                    src={item.img}
                    alt=""
                  />
                </td>
                <td className="px-6 py-4">
                  {item.title}
                  <br />
                  <small className="text-gray-600">NT$ {item.price}</small>
                </td>
                <td className="px-6 py-4">
                  <select
                    id="countries"
                    className="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      const quantity = parseInt(e.target.value);
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: { ...item, quantity },
                      });
                    }}
                  >
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="px-6 py-4 text-end">
                  NT$ {item.price * item.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="border-b dark:border-gray-700">
            <td colSpan={5} className="px-6 py-4 text-end">
              總金額 NT$ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
