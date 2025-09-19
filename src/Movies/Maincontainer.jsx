import BackgroundVideo from "./Backgroundvideos"
import VideoTitle from "./videotitle"
import { useSelector } from "react-redux"

const Maincontainer =()=>{
    const movies=useSelector((store)=>store.movies?.addNowPlayingMovies?.results)

    if (!movies || movies.length === 0) {
    return null;
  }
    const {title,overview,vote_average,id}=movies[10];
    
    return(
        <div className="absolute top-0 left-0 w-screen h-screen bg-gradient-to-r from-black via-transparent to-transparent z-0">

        <VideoTitle title={title} overview={overview} vote_average={vote_average}/>
        <BackgroundVideo id={id}/>

        </div>
    )
}
export default Maincontainer