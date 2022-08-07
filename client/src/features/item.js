import { createSlice } from "@reduxjs/toolkit";
import { itemData } from "../data/data";

const initialState = {
  value: itemData,
};
export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value(action.payload);
    },
  },
});

const { actions, reducer } = itemSlice;

export const { addItem } = actions;
export default reducer;
