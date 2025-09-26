import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    addNowPlayingMovies: null,
    addPopularMovies: null,
    addTopRatedMovies: null,
    addUpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.addNowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    removeMovies: (state) => {
      state.addNowPlayingMovies = null;
      state.addPopularMovies = null;
      state.addTopRatedMovies = null;
      state.addUpcomingMovies = null;
    },
  },
});

export default MovieSlice.reducer;

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  removeMovies,
} = MovieSlice.actions;
