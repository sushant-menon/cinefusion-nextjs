import AppSlice from "./features/appslice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
