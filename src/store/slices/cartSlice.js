import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    billDiscount: 0,
    billPaid: false,
  },
  reducers: {
    addToCart(state, action) {
      state.items = action.payload;
    },
    manageCartPrice(state, action) {
      state.billDiscount = action.payload.billDiscount;
      state.total = action.payload.total;
    },
    managePaid(state, action) {
      state.billPaid = action.payload;
    },
  },
});

export const { addToCart, manageCartPrice, managePaid } = cartSlice.actions;

export default cartSlice.reducer;
