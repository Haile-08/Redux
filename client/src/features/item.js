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
      state.value.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = itemSlice;

export const { addItem, deleteItem } = actions;
export default reducer;
