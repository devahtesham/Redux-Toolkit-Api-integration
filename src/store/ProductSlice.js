import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import STATUSES from "./Statuses";

// we create a slice like this when we are working asynchronously
const productsSlice = createSlice({
  name: "products",
  initialState: {
    // we take an object instead of array bcz we have more than 1 state
    data: [],
    status: STATUSES,
  },
  // when we are working async, we use extraReducers instead of reducers
  extraReducers: (builder) => {
    // jysy core redux men switch case use krty thy wese hi yahan pr hoga
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS; // ye hamne object k andr status wali key ki value ko update kia hy jysy ham normally objects mmen krty hen
      state.data.push(...action.payload); // bcz we have a nested array
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});
// as we know createSlice return two things actions and reducer, so we need reducer to put in store
const { reducer } = productsSlice;

// when we are calling API, this will our action
// for calling api in redux we use createAsyncThunk("name",callback_function)
const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const data = await axios.get("https://fakestoreapi.com/products");
  const response = data.data;
  //   console.log("response", response);
  return response;
});
export { fetchProducts, reducer as ProductsSliceReducer };
