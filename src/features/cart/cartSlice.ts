/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/cart";

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      console.log("State", state);
      console.log("Action", action.payload);
    },
    removeItemFromCart: () => {
      console.log("remove item to cart");
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export const { removeItemFromCart } = cartSlice.actions;

export default cartSlice;
