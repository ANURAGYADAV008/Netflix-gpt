import BackgroundVideo from "./Backgroundvideos"
import VideoTitle from "./videotitle"
import { useSelector } from "react-redux"

const Maincontainer =()=>{
    const movies=useSelector((store)=>store.movies?.addNowPlayingMovies?.results)

    if (!movies || movies.length === 0) {
    return null;
  }
    const {title,overview,vote_average,id}=movies[2];
    
    return(
        <div>
        <BackgroundVideo id={id}/>
        <VideoTitle title={title} overview={overview} vote_average={vote_average}/>

        </div>
    )
}
export default Maincontainer