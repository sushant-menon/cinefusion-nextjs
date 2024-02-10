import appSlice from "./slice/appSlice";
import userSlice from "./slice/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export default store;
