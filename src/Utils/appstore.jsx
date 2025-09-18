import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import MovieReducer from "./Movieslice"
const appStore=configureStore({
    reducer:{
        user:useReducer,
        movies:MovieReducer
    }
});
export default appStore;