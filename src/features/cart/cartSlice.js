import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    // Add item starts ------
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === product.cartId);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state); // Accessing the reducer from same slice
      toast.success(`Item added to cart`);
    },
    // Clear cart starts ------
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    // Remove item starts ------
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === cartId);
      state.cartItems = state.cartItems.filter((i) => i.cartId != cartId);
      state.numItemsInCart -= item.amount;
      state.cartTotal -= item.price * item.amount;
      cartSlice.caseReducers.calculateTotals(state); // Accessing the reducer from same slice
      toast.success(`Item removed from cart`);
    },
    // Edit item starts ------
    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === cartId);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state); // Accessing the reducer from same slice
      toast.success(`Cart updated`);
    },
    // Calculate total starts ------
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
