import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";
const initialState = emptyMeme;

const meme = createSlice({
  name: "meme",
  initialState,
  reducers: {
    clearMeme: (state) => {
      state = initialState;
    },
    changeMeme: (state, action) => {
        Object.assign(state ,action.payload );
    },
  },
});

export const { changeMeme, clearMeme } = meme.actions;

export default meme.reducer;
