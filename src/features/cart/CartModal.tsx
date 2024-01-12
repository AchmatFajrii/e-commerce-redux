/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import Modal from "../../components/Modal";

type CartModalProps = {
  handleCloseModalCart: () => void;
};

const CartModal = ({ handleCloseModalCart }: CartModalProps) => {
  const { cartItems } = useSelector((state: any) => state.cart);

  return (
    <>
      <Modal>
        <div className="flex flex-col gap-6 p-1 sm:p-2 w-full lg:w-[900px]">
          <div className="flex flex-col gap-6 max-h-[500px] overflow-auto">
            <button onClick={handleCloseModalCart}>x</button>
            {cartItems.map((product: any) => {
              return (
                <div
                  key={product.id}
                  className="w-full border-b-4 border-blue-200 pb-2"
                >
                  <div className="w-[120px] h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-10 w-[75%]">
                    <h3 className="capitalize mt-3 text-lg">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">{product.price}</h4>
                      <h3 className="text-lg font-bold">
                        {product.totalPrice}
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="rounded-full bg-blue-400 h-5 w-5 text-white flex justify-center items-center text-xs"
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
      ;
    </>
  );
};

export default CartModal;
