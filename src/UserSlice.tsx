import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogedIn: false,
    serchText:"",
  },
  reducers: {
   checkUser(state, action) {
    state.isLogedIn = action.payload;
   },

   serch(state, action){
    state.serchText = action.payload;
   }
  },
});

export const { checkUser,serch } = userSlice.actions;
export default userSlice.reducer;