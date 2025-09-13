import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        itemsMap: {}, // Hash map để truy cập nhanh O(1)
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { id } = action.payload;
            if (id in state.itemsMap) {
                // Truy cập trực tiếp qua hash map - O(1)
                state.itemsMap[id].quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.items.push(newItem);
                state.itemsMap[id] = newItem; // Thêm vào hash map
            }
            state.totalAmount += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const item = state.itemsMap[id];
            if (item) {
                state.totalAmount -= item.price * item.quantity;
                state.items = state.items.filter(i => i.id !== id);
                delete state.itemsMap[id]; // Xóa khỏi hash map
            }
        },
        increase: (state, action) => {
            const { id } = action.payload;
            const item = state.itemsMap[id];
            if (item) {
                item.quantity += 1;
                state.totalAmount += item.price;
            }
        },
        decrease: (state, action) => {
            const { id } = action.payload;
            const item = state.itemsMap[id];
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    state.totalAmount -= item.price;
                } else {
                    state.totalAmount -= item.price;
                    state.items = state.items.filter(i => i.id !== id);
                    delete state.itemsMap[id]; // Xóa khỏi hash map khi quantity = 0
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
