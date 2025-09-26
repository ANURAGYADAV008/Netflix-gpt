import { API_OPTIONS,API_KEY } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies } from "../Utils/Movieslice";
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
    const getPopularMovies=async()=>{
        try{
            const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
                API_OPTIONS
            )
            const data=await response.json();
            dispatch(addPopularMovies(data));


        }
        catch(error){

        }

    }

    const getTopratedMovies=async()=>{
        try{
            const response=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
                API_OPTIONS);
            const data=await response.json();
            dispatch(addTopRatedMovies(data));
            console.log("Top rated",data)


        }
        catch(error){

        }
    }

    const getUpComingMovies=async()=>{
        try{
            const response=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
                ,API_OPTIONS
            );
            const data=await response.json();
            dispatch(addUpcomingMovies(data));
            console.log("Upcoming Movies",data)


        }catch(error){

        }
    }


    getNowPlayingMovies();
    getPopularMovies();
    getTopratedMovies();
    getUpComingMovies();

    },[])

}
export default useNowPlayingMovies;