import { configureStore } from "@reduxjs/toolkit";
import itemsToTheCheckoutSlicer from "../features/Slicers/itemsToTheCheckoutSlicer";
import updateAmountOfItemsCheckoutSlicer from "../features/Slicers/updateAmountOfItemsCheckoutSlicer";
export const store = configureStore({
  reducer: {
    addItems: itemsToTheCheckoutSlicer,
    updateAmount: updateAmountOfItemsCheckoutSlicer,
  },
});
