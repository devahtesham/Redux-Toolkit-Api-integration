import { createSlice } from "@reduxjs/toolkit";

// we create our slice in this way when we are working with synchronously
const cartSlice = createSlice({
  name: "cart", // here we define name of our slice
  initialState: [], // our all global states of this slice
  reducers: {
    // here we define our all actions
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      console.log("i am remove function", action);
    },
  },
});
const { actions, reducer } = cartSlice;
const { add, remove } = actions;
export { add, remove, reducer as CartSliceReducer };
