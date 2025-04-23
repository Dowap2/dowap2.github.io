import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false
};

const pageStateSlice = createSlice({
  name: "pageState",
  initialState,
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkMode = action.payload;
    }
  }
});

export const { changeDarkMode } = pageStateSlice.actions;
export default pageStateSlice.reducer;
