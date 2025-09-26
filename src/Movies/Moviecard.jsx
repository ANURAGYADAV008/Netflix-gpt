import { CDN_IMG } from "../Utils/Constants";
const Moviecard=({posterPath})=>{
    console.log(posterPath)
    return(
        <div className="w-40 rounded-md">
        <img src={CDN_IMG+posterPath} alt="Poster" className="h-50 w-50 rounded-md"></img>
    
        </div>
    )
}
export default Moviecard