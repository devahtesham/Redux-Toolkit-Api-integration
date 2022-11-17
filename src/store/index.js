import { configureStore } from "@reduxjs/toolkit";
import { CartSliceReducer } from "./CartSlice";
import { ProductsSliceReducer } from "./ProductSlice";

const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    products: ProductsSliceReducer,
  },
});
export default store;
