import AppSlice from "./slice/appSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
