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
      //state.cartItems = [...state.cartItems, action.payload]; contoh menggunakan spread operator
      const newItem = action.payload;
      const selectCartIndex = state.cartItems.findIndex(
        (product) => product.id === newItem.id
      );

      if (selectCartIndex !== -1) {
        state.cartItems[selectCartIndex].quantity += 1;

        const totalPrice =
          state.cartItems[selectCartIndex].quantity *
          state.cartItems[selectCartIndex].price;
        state.cartItems[selectCartIndex].totalPrice = totalPrice;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeQuantityItemFromCart: (state, action) => {
      const selectCartIndex = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (state.cartItems[selectCartIndex]?.quantity > 1) {
        state.cartItems[selectCartIndex].quantity -= 1;

        const totalPrice =
          state.cartItems[selectCartIndex].quantity *
          state.cartItems[selectCartIndex].price;
        state.cartItems[selectCartIndex].totalPrice = totalPrice;
      } else {
        state.cartItems = state.cartItems.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addItemToCart, removeQuantityItemFromCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice;
