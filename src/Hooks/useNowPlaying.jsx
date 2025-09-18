import { API_OPTIONS,API_KEY } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/Movieslice";
import { useEffect } from "react";
const useNowPlayingMovies =()=>{
    const dispatch=useDispatch();
 useEffect(()=>{
    const getNowPlayingMovies= async()=>{
        try{
             const response=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
                API_OPTIONS);
             const data=await response.json();
             console.log("data is",data);
             dispatch(addNowPlayingMovies(data));



        }catch(error){
            console.log("error is->",error)
        }

    }
    getNowPlayingMovies();

    },[])

}
export default useNowPlayingMovies;