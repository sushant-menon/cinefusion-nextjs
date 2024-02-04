import appSlice from "./slice/appSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
