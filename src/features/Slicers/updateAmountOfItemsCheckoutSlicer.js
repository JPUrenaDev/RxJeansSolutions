import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  individualItems: [{ id: 1, amountItem: 1 }],
};
export const updateAmountOfItemsCheckoutSlicer = createSlice({
  name: "itemsUpdate",
  initialState,
  reducers: {
    onIncrementAmountXitems: (state, action) => {
      const excluirItem = state.individualItems.filter(
        (items) => items.id !== action.payload.id
      );

      state.individualItems = [...excluirItem, action.payload];
    },
  },
});
export const { onIncrementAmountXitems } =
  updateAmountOfItemsCheckoutSlicer.actions;
export default updateAmountOfItemsCheckoutSlicer.reducer;
