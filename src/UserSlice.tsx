import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogedIn: false,
  },
  reducers: {
   checkUser(state, action) {
    state.isLogedIn = action.payload;
   }
  },
});

export const { checkUser } = userSlice.actions;
export default userSlice.reducer;