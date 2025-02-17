import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    loginAction(state, action) {
      console.log(action.payload)
      state.user = action.payload;
    },
  },
});

export const { loginAction } = authSlice.actions;
export default authSlice.reducer;
