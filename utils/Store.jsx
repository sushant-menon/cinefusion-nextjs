const { configureStore } = require("@reduxjs/toolkit");
const { default: AppSlice } = require("./AppSlice");

const store = configureStore({
  reducer: {
    app: AppSlice,
  },
});

export default store;
