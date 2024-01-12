/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalOverlayProps = {
  children?: ReactNode;
};

type ModalProps = {
  children?: ReactNode;
};

const BackdropOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black opacity-75"></div>
  );
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30">
      <div className="bg-white rounded-lg p-4 shadow-lg text-gray-900 mx-2">
        {children}
      </div>
    </div>
  );
};

const portalElement = document.getElementById("modal") as HTMLElement;

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<BackdropOverlay />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
