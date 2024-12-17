function App() {
  return (
    <div className="App">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" flex items-center space-x-3 rtl:space-x-reverse self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            甜點蛋糕店
          </span>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="relative inline-flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            購物車
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              20
            </div>
          </button>
          <div className="hidden w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-7 grid grid-cols-3 gap-3">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 justify-between flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  全蔬食健康餐
                  <span>NT$ 220</span>
                </h5>
                <button
                  type="button"
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 justify-between flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  全蔬食健康餐
                  <span>NT$ 220</span>
                </h5>
                <button
                  type="button"
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 justify-between flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  全蔬食健康餐
                  <span>NT$ 220</span>
                </h5>
                <button
                  type="button"
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 justify-between flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  全蔬食健康餐
                  <span>NT$ 220</span>
                </h5>
                <button
                  type="button"
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg"
                src="https://images.unsplash.com/photo-1721332155567-55d1b12aa271?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 justify-between flex text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  全蔬食健康餐
                  <span>NT$ 220</span>
                </h5>
                <button
                  type="button"
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="bg-gray-100 p-3">
              <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                  <tr className="border-b dark:border-gray-700">
                    <td className="px-6 py-4">
                      <a href="#">X</a>
                    </td>
                    <td className="px-6 py-4">
                      <img src="" alt="" />
                    </td>
                    <td className="px-6 py-4">
                      全蔬食健康餐
                      <br />
                      <small className="text-gray-600">NT$ 220</small>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option>Choose a country</option>
                        <option defaultValue="US">United States</option>
                        <option defaultValue="CA">Canada</option>
                        <option defaultValue="FR">France</option>
                        <option defaultValue="DE">Germany</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-end">NT$ 440</td>
                  </tr>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
