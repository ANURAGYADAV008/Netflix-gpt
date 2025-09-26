import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingmovies = useSelector(
    (store) => store.movies?.addNowPlayingMovies?.results
  );

  const popularMovies=useSelector(
    (store)=>store.movies?.addPopularMovies?.results
  );
  const topratedMovies=useSelector(
    (store)=>store.movies?.addTopRatedMovies?.results
  );
  const upComingMovies=useSelector(
    (store)=>store.movies?.addUpcomingMovies?.results
  )
  console.log("Upcoming Movies",upComingMovies)

  return (
    <div className="bg-black -mt-10">
      {/* MovieList - Popular */}
      <MovieList title="Now Playing" list={nowPlayingmovies || []} />
      <MovieList title="Popular Movies" list={popularMovies || []} />
      <MovieList title="Top Rated Movies" list={topratedMovies || []} />
      <MovieList title="UpComing Movies" list={upComingMovies || []} />
    </div>
  );
};

export default SecondaryContainer;
