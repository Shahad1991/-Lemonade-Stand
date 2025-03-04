import { createSlice } from '@reduxjs/toolkit';

const profitSlice = createSlice({
  name: 'profit',
  initialState: 0,
  reducers: {
    sell: (state) => state + 5,
    buy: (state) => state - 2,
  },
});

export const { sell, buy } = profitSlice.actions;
export default profitSlice.reducer;