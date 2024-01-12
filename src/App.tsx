/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productList/ProductList";
import CartModal from "./features/cart/CartModal";

const App = () => {
  const [isOpenModalCart, setIsOpenModalCart] = useState(false);

  const handleOpenModalCart = () => {
    setIsOpenModalCart(true);
  };

  const handleCloseModalCart = () => {
    setIsOpenModalCart(false);
  };
  return (
    <>
      {isOpenModalCart ? (
        <CartModal handleCloseModalCart={handleCloseModalCart} />
      ) : null}
      <Header handleOpenModalCart={handleOpenModalCart} />
      <main className="max-w-7xl mx-auto mt-32 lg: px-4">
        <ProductList />
      </main>
    </>
  );
};

export default App;
