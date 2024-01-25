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

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem } = itemsToTheCheckoutSlicer.actions;

export default itemsToTheCheckoutSlicer.reducer;
