import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    isSignUpFormOpen: false,
  },

  reducers: {
    toggleSidebar: state => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: state => {
      state.isSidebarOpen = false;
    },
    toggleSignUpForm: state => {
      state.isSignUpFormOpen = !state.isSignUpFormOpen;
    },
  },
});

export const { toggleSidebar, closeSidebar, toggleSignUpForm } =
  appSlice.actions;
export default appSlice.reducer;
