import { configureStore } from "@reduxjs/toolkit";
import paramsReducer from "./paramsSlice";
import isLoadingReducer from "./isLoadingSlice";
import hotelDataSlice from "./hotelDataSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    params: paramsReducer,
    isLoading: isLoadingReducer,
    hotelData: hotelDataSlice,
    login: loginSlice,
  },
});

export default store;
