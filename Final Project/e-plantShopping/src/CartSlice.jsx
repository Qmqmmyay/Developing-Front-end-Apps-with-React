/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Merge by name: if exists, increase quantity; else add with quantity = 1
      const existing = state.items.find(i => i.name === newItem.name);
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        // Luôn bắt đầu với quantity = 1 khi thêm item mới
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemName = action.payload;  // Lấy string trực tiếp, không phải .name
      state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
      // Use name for lookup to be consistent with removeItem and current payloads
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        if (quantity <= 0) {
          // Remove item when quantity set to 0 or less
          state.items = state.items.filter(i => i.name !== name);
        } else {
          item.quantity = quantity;
        }
      } else {
        console.warn(`Item with name ${name} not found in cart.`);
      }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
