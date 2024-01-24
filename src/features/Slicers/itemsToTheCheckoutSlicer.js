import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

export const itemsToTheCheckoutSlicer = createSlice({
  name: "itemsSlicer",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addItem } = itemsToTheCheckoutSlicer.actions;

export default itemsToTheCheckoutSlicer.reducer;
