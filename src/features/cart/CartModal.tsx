/* eslint-disable @typescript-eslint/no-unused-vars */
import Modal from "../../components/Modal";

type CartModalProps = {
  handleCloseModalCart: () => void;
};

const CartModal = ({ handleCloseModalCart }: CartModalProps) => {
  return (
    <>
      <Modal>Cart Modal</Modal>;
    </>
  );
};

export default CartModal;
