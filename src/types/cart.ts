export type CartItem = {
  id: number;
  quantity: number;
  price: number;
  totalPrice: number;
};

export type CartState = {
  cartItems: CartItem[];
};
