import type { CartItemType } from "@/types/cart";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: CartItemType[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]") as CartItemType[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (isExist) {
        isExist.quantity += 1;
      } else {
        state.items.push({
          id: action.payload.id,
          description: action.payload.description,
          image: action.payload.image,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        });
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      state.items[idx].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload);
      if (state.items[idx].quantity != 1) {
        state.items[idx].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
