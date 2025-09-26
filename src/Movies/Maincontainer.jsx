import { useSelector } from "react-redux";
import BackgroundVideo from "./Backgroundvideos";
import VideoTitle from "./videotitle";
const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.addNowPlayingMovies?.results
  );

  if (!movies || movies.length === 0) return <p>Loading...</p>;

  const mainMovie = movies[5] || movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-full bg-black top-0">
        <BackgroundVideo id={id} />
        <VideoTitle title={original_title} overview={overview}/>
      </div>
    </div>
  );
};
export default MainContainer
