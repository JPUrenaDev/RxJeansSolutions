import { configureStore } from "@reduxjs/toolkit";
import itemsToTheCheckoutSlicer from "../features/Slicers/itemsToTheCheckoutSlicer";

export const store = configureStore({
  reducer: {
    addItems: itemsToTheCheckoutSlicer,
  },
});
