import useTrailerby_id from "../Hooks/useTrailerHooks";
const BackgroundVideo =({id})=>{
   const {trailer_id} =useTrailerby_id(id)

    return(
    <div className="w-full h-screen bg-black flex items-center justify-center z-40 aspect-video">
       <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${trailer_id}?autoplay=1&mute=1&controls=0&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

)
}
export default BackgroundVideo;