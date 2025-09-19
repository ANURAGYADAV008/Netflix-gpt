import Buttons from "./button";
const VideoTitle=({title,overview,vote_average})=>{
    return(
        <div className="absolute pt-36 px-6 text-white">
            <h1 className="text-3xl font-bold w-1/2">{title}</h1>
            <p className="pt-5 text-lg w-1/3 font-medium px-0.5">{overview}</p>
            <div className="pt-5">
            <Buttons/>
            </div>

        </div>
    )
}
export default VideoTitle;