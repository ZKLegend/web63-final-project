import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "Hotels",
  pageIndex: 1,
  pageSize: 4,
  sortBy: "minPrice",
  minPriceFilter: 100,
  maxPriceFilter: 600,
};

export const paramsSlice = createSlice({
  name: "params",
  initialState,
  reducers: {
    setCountRoom: (state, action) => {
      state.countRoom = action.payload;
    },
    setCountGuest: (state, action) => {
      state.countGuest = action.payload;
    },
    setDate: (state, action) => {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { setCountRoom, setCountGuest, setDate, setDestination } =
  paramsSlice.actions;

export default paramsSlice.reducer;
