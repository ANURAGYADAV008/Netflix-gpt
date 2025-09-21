import BrowseHeader from "./BrowseHeader";
import { Link } from "react-router-dom";
import Maincontainer from "../Movies/Maincontainer"
import useNowPlayingMovies from "../Hooks/useNowPlaying";
const Browse=()=>{
    useNowPlayingMovies()

    return (
        <div>
         
            <BrowseHeader/>
               <Maincontainer/>
        </div>
        
    )
}
export default Browse;