import AppSlice from "./features/Appslice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
