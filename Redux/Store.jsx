import AppSlice from "./features/AppSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
