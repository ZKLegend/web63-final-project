import { createSlice } from "@reduxjs/toolkit";

export const hotelDataSlice = createSlice({
  name: "hotelData",
  initialState: [],
  reducers: {
    setHotelData: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { setHotelData } = hotelDataSlice.actions;

export default hotelDataSlice.reducer;
