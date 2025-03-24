import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    billDiscount: 0,
    billPaid: false,
    deliveryAddress:"",
    orderPhone:"",
    paymentMethod:"",
    user:""
  },

  reducers: {
    addToCart(state, action) {
      if (!Array.isArray(state.items)) {
        state.items = []; // Ensure items is always an array
      }
      state.items.push(action.payload);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.foodId !== action.payload.foodId);
    },
    manageCartPrice(state, action) {
      state.billDiscount = action.payload.billDiscount;
      state.total = action.payload.total;
    },
    managePaid(state, action) {
      state.billPaid = action.payload;
    },
    manageOrderDetails(state,action){
      state.deliveryAddress = action.payload.deliveryAddress;
      state.orderPhone = action.payload.orderPhone;
      state.paymentMethod = action.payload.paymentMethod;
      state.user = action.payload.user;
    }
  },
});

export const { addToCart,removeFromCart ,manageCartPrice, managePaid,manageOrderDetails } = cartSlice.actions;

export default cartSlice.reducer;
