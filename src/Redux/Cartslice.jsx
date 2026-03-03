import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);

      if (existing) {
        existing.quantity += 1; 
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },

     remove: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    }
  }
});
export const { addToCart, increment, decrement, remove } = cartSlice.actions;
export default cartSlice.reducer;
