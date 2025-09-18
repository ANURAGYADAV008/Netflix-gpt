import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:'Movies',
    initialState:{
        addNowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        removeMovies: (state, action) => {
            state.addNowPlayingMovies = null;
        }
    }

})

export default MovieSlice.reducer
export const {addNowPlayingMovies,removeMovies}=MovieSlice.actions;