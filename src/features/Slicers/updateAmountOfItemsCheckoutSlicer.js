import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  individualItems: [],
};
export const updateAmountOfItemsCheckoutSlicer = createSlice({
  name: "itemsUpdate",
  initialState,
  reducers: {
    onIncrementAmountXitems: (state, action) => {
      const excluirItem = state.individualItems.filter(
        (items) => items.id !== action.payload.id
      );

      console.log(excluirItem);
      state.individualItems = [...excluirItem, action.payload];
      console.log(action.payload);
    },
  },
});
export const { onIncrementAmountXitems } =
  updateAmountOfItemsCheckoutSlicer.actions;
export default updateAmountOfItemsCheckoutSlicer.reducer;
