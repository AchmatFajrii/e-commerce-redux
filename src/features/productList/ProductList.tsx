/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types/Products";
import Loader from "../../components/Loader";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-red-400 rounded-lg border shadow p-4"
                >
                  <h3>{product.title}</h3>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
