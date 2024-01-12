/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../components/Modal";
import { addItemToCart, removeQuantityItemFromCart } from "./cartSlice";

type CartModalProps = {
  handleCloseModalCart: () => void;
};

const CartModal = ({ handleCloseModalCart }: CartModalProps) => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const totalItems = useSelector((state: any) =>
    state.cart.cartItems.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    )
  );
  const totalPrices = useSelector((state: any) =>
    state.cart.cartItems.reduce(
      (total: number, item: any) => total + item.totalPrice,
      0
    )
  );

  const handleCheckouToWhatsapp = () => {
    if (totalItems === 0) return;
    const phoneNumber = "6282330382594";
    const message = encodeURIComponent(
      `Halo, Saya ingin membeli ${totalItems} barang dengan total harga ${totalPrices}.`
    );

    const URL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(URL, "_blank");
  };

  const handleAddItemToCart = (product: any) => {
    dispatch(addItemToCart(product));
  };

  const handleRemoveItemFromCart = (product: any) => {
    dispatch(removeQuantityItemFromCart(product));
  };

  return (
    <>
      <Modal>
        {cartItems.length === 0 ? (
          <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
            <h1 className="text-2xl text-red-600 font-bold">
              Keranjang kamu kosong
            </h1>
            <p className="text-lg">
              Silakan tambahkan beberapa produk ke keranjang Anda
            </p>
            <button
              onClick={handleCloseModalCart}
              type="button"
              className="bg-slate-600 text-white rounded-xl hover:bg-slate-800 text-sm py-3 px-8"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
            <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
              {cartItems.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="w-full border-b-4 border-blue-200 pb-2"
                  >
                    <div className="flex items-center w-full">
                      <div className="w-[120px] h-auto overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="ml-10 w-[75%]">
                        <h3 className="capitalize mt-3 text-lg">
                          {product.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm">{product.price}</h4>
                          <h3 className="text-lg font-bold">
                            {product.totalPrice}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 mt-4 ml-auto">
                          <button
                            onClick={() => handleRemoveItemFromCart(product)}
                            type="button"
                            className="rounded-full bg-blue-600 h-10 w-10 text-xl font-bold text-white flex justify-center items-center"
                          >
                            -
                          </button>
                          <h3 className="mx-2">{product.quantity}</h3>
                          <button
                            onClick={() => handleAddItemToCart(product)}
                            type="button"
                            className="rounded-full bg-blue-600 h-10 w-10 text-xl font-bold text-white flex justify-center items-center"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="text-lg font-bold">Total Item: {totalItems}</h3>
              <h3 className="text-md font-bold">Total Price: {totalPrices}</h3>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleCloseModalCart}
                type="button"
                className="bg-slate-600 text-white rounded-xl hover:bg-slate-800 text-sm py-3 px-8"
              >
                Close
              </button>
              <button
                onClick={handleCheckouToWhatsapp}
                type="button"
                className="bg-green-600 text-white rounded-xl hover:bg-green-800 font-bold text-sm py-3 px-8"
              >
                Checkout (Whatsappp)
              </button>
            </div>
          </div>
        )}
      </Modal>
      ;
    </>
  );
};

export default CartModal;
