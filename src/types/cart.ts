export type CartItem = {
  id: number;
  quantity: number;
};

export type CartState = {
  cartItems: CartItem[];
};
