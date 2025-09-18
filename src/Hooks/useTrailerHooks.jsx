import { useEffect, useState } from "react";
import { API_KEY, API_OPTIONS } from "../Utils/Constants";
import ReactPlayer from "react-player";
const useTrailerby_id= ( id ) => {
const [trailer_id,setTrailer_id]=useState(null);
    useEffect(() => {
        const getVideosby_id = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
                    API_OPTIONS
                )
                const video = await response.json();
                const Filter_video=video.results.filter((results)=>results.type==="Trailer")
                const trailer = Filter_video.length?Filter_video[0]:video?.results[0];
                setTrailer_id(trailer.key);
            }
            catch (error) {

            }


        }

    getVideosby_id();

}, [id] );
return {trailer_id};

}
export default useTrailerby_id;