import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import selecterSlice from "./selecterSlice";
import sorterSlice from "./sorterSlice";
import loginSlice from "./loginSlice";

export const store = configureStore({
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
    sorter: sorterSlice,
    selecter: selecterSlice,
    filter: filterSlice,
    login: loginSlice,
  },
});
// selector dung o component se lam thay dong lenh nay: store.getState().sorter.value --> useSelector((state) => state.sorter.value)
//selector se lay dc current state dang luu o store --> tac dung nhu state o hook
//dispatch se lam thay cong viec cua setState bang cach day gia tri ve reducer de thay vao state cu duoi dang action.payload
//key cua store se dung o selector
