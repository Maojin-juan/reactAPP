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
                  <a href="#">X</a>
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
                  >
                    <option>Choose a country</option>
                    <option defaultValue="US">United States</option>
                    <option defaultValue="CA">Canada</option>
                    <option defaultValue="FR">France</option>
                    <option defaultValue="DE">Germany</option>
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
              總金額 NT$ 440
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
