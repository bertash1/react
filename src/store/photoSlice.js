import { createSlice } from "@reduxjs/toolkit";
import { getPhoto, getSearchedPhoto } from "./extraReducers";

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    photo: [],
    searchedPhoto: [],
    page: "1",
    searchQuery: "",
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.searchQuery = action.payload;
      state.page = "1";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
    });
    builder.addCase(getSearchedPhoto.fulfilled, (state, action) => {
      state.searchedPhoto = action.payload;
    });
  },
});

export default photoSlice.reducer;
export const { setPage, setQuery } = photoSlice.actions;
