import { useSelector } from "react-redux";
import BackgroundVideo from "./Backgroundvideos";
import VideoTitle from "./videotitle";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.addNowPlayingMovies?.results);
  console.log("Movie hai",movies)

  if (!movies) return;

  const mainMovie = movies[1];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview}/>
      <BackgroundVideo id={id}/>
     
    </div>
  );
};
export default MainContainer;