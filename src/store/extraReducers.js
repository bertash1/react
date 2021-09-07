import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhoto = createAsyncThunk("photo", async (page) => {
  try {
    const photo = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&orientation=horizontal&page=${page}`
    );
    return photo.json();
  } catch (err) {
    console.log(err);
  }
});

export const getSearchedPhoto = createAsyncThunk(
  "searchedPhoto",
  async (args) => {
    try {
      const { currentPage, query } = args;

      const photo = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&orientation=horizontal&page=${currentPage}`
      );
      return photo.json();
    } catch (err) {
      console.log(err);
    }
  }
);
