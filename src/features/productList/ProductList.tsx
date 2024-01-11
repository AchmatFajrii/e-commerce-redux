/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../types/Products";
import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

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

  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleClickBuy = (product: Product) => {
    dispatch(addItemToCart(product));
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
          <div className="w-full h-full grid grid-cols-2 gap-4 py-4 lg:grid-cols-3">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border shadow p-4 w-full cursor-pointer group"
                >
                  <div className="w-[80%] h-[100px] md:h-[250px] overflow-hidden mx-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-6 mt-8">
                    <button
                      onClick={() => handleClickBuy(product)}
                      type="button"
                      className="bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-sm py-1 md:py-3 px-8"
                    >
                      Buy now
                    </button>
                    <h3 className="font-bold text-sm md:text-normal">
                      {truncateString(product.title, 40)}
                    </h3>
                    <h3 className="text-sm md:text-normal">{product.price}</h3>
                  </div>
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
