import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   meme:[],
   images:[]
}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
    addImages: (state, action) => {
        state.images.splice(0)
        state.images.push(...action.payload);
    },
    addMeme: (state, action) => {
        state.meme.push(...action.payload);
    }
  }
});

export const {addImages,addMeme} = ressources.actions

export default ressources.reducer