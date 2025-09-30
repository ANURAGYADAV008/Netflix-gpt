const GptSearchBar=()=>{
    return(
        <div className="pt-[8%] flex justify-center">
            <form  className="bg-transparent rounded-b-lg w-1/2 grid grid-cols-12">
                <input type="text" className ="p-4 m-4 rounded-md text-black bg-white col-span-9 font-mono font-bold" placeholder="What would you like to watch today?"></input>
                <button type="button" className="p-2 bg-red-700 text-white col-span-3 m-4 rounded-md font-mono ">Search</button>
            </form>
        </div>
    )
}
export default GptSearchBar