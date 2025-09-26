import BrowseHeader from "./BrowseHeader";
import Maincontainer from "../Movies/Maincontainer"
import SecondaryContainer from "../Movies/SecondaryContainer"
import useNowPlayingMovies from "../Hooks/useNowPlaying";
import {useSelector } from "react-redux";
import GptSearch from "./gptSeacrch";
const Browse=()=>{
    const isserch=useSelector((store)=>store.gpt?.showGptSearch)

    useNowPlayingMovies()
return(
        (
            isserch?<div>
                <BrowseHeader/>
                <GptSearch/>
            </div>:<div>
                <BrowseHeader/>
               <Maincontainer/>
               <SecondaryContainer/>
            </div>
        )
        
)
}
export default Browse;