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
      console.log(action.payload);
    },

    incrementAmount: (state, action) => {
      console.log(action.payload);
      const individualItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      individualItem.amount = action.payload.amount;
    },
    decrementAmount: (state, action) => {
      const individualItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      individualItem.amount =
        individualItem.amount == 1 ? 1 : action.payload.amount;
    },
    deleteItem: (state, action) => {
      console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, deleteItem, incrementAmount, decrementAmount } =
  itemsToTheCheckoutSlicer.actions;

export default itemsToTheCheckoutSlicer.reducer;
