import Moviecard from "./Moviecard";
const MovieList = ({ title, list }) => {

    return (
        <div className="bg-black">
            <h1 className="text-2xl text-white mx-5">{title}</h1>
            <div className="flex overflow-x-scroll gap-4 ml-5 no-scrollbar">
                {
                      list.map((p_movies,index) => (
                    <div key={`${p_movies?.id}-${index}`} className="flex">
                        <Moviecard posterPath={p_movies?.poster_path}/>

                    </div>
                ))

                }
            </div>


        </div>
    )
}

export default MovieList;