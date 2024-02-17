import { createSlice } from "@reduxjs/toolkit";
// User login and sign in

const initialState = {
  names: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      return action.payload;
    },
    removeUsers: (state, action) => {
      return null;
    },
    addNames: (state, action) => {
      //   state.names.push(action.payload);
      names = [...state.names, action.payload];
    },
  },
});

export const { addUsers, removeUsers, addNames } = userSlice.actions;

export default userSlice.reducer;
