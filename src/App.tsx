import "./App.css";
import Header from "./components/Header";
import ProductList from "./features/productList/ProductList";

const App = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto mt-32 lg: px-4">
        <ProductList />
      </main>
    </>
  );
};

export default App;
