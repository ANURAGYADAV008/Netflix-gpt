import BrowseHeader from "./BrowseHeader";
import useNowPlayingMovies from "../Hooks/useNowPlaying";
import Maincontainer from "../Movies/Maincontainer";
import SecondaryContainer from "../Movies/SecondaryContainer";
const Browse=()=>{
    //call hooks now
    useNowPlayingMovies();
    return (
        <div className="">
            <BrowseHeader/>
            <Maincontainer/>
            
        </div>
        
    )
}
export default Browse;