import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import MovieReducer from "./Movieslice"
import gptReducer from "./Gptslice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:MovieReducer,
        gpt:gptReducer

    }
});
export default appStore;