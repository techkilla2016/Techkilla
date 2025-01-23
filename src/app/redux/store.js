const { configureStore } = require("@reduxjs/toolkit");

import reducer from "@/app/redux/slice";

export const store = configureStore({
  reducer: reducer,
});
