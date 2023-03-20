import { configureStore } from "@reduxjs/toolkit";
import paramsReducer from "./paramsSlice";
import isLoadingReducer from "./isLoadingSlice";
import hotelDataSlice from "./hotelDataSlice";
import loginSlice from "./loginSlice";
import filterSlice from "./filterSlice";
import selecterSlice from "./selecterSlice";
import sorterSlice from "./sorterSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        // ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.0", "payload.1"],
        // Ignore these paths in the state
        ignoredPaths: ["selecter.arrayDate.0", "selecter.arrayDate.1"],
      },
    }),
  reducer: {
    params: paramsReducer,
    isLoading: isLoadingReducer,
    hotelData: hotelDataSlice,
    login: loginSlice,
    sorter: sorterSlice,
    selecter: selecterSlice,
    filter: filterSlice,
  },
});

export default store;
