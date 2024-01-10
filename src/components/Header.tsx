import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <header className="border-b shadow-md py-2 fixed top-0 left-0 right-0 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between gap-4 h-20">
            <h1 className="font-extrabold text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Simple E-Commerce <br /> Redux Toolkit
            </h1>
            <button
              type="button"
              className="relative rounded-full bg-blue-800 p-2 text-gray-100"
            >
              <FaCartShopping />
              <span className=" w-5 h-5 flex justify-center items-center bg-red-600 rounded-full text-white absolute -top-1 -right-3">
                4
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
