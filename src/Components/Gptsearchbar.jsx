import OpenAI from "openai";
import { useState } from "react";

const GptSearchBar = () => {
    const [message, setMessage] = useState("");
    const [reply, setReply] = useState([]);
    if (message.trim() == null) return;
    const query = "Return The List of Top Movies Related To" + message + "Only The name of The Movies... Or dont write something else ";


    const handleOpenai = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query: query })
            })

            const data = await response.json();
            const movies=data?.reply.split("\n");
            setReply(movies);


        } catch (error) {
            console.log("error is", error.message)

        }


    }
    return (
        <div className="">
            <div className="pt-[8%] flex justify-center">
                <form onSubmit={(e) => e.preventDefault()} className="bg-transparent rounded-b-lg w-1/2 grid grid-cols-12">
                    <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="p-4 m-4 rounded-md text-white bg-gray-900 border-gray-300 col-span-9 font-mono font-bold" placeholder="What would you like to watch today?"></input>
                    <button type="button" onClick={handleOpenai} className="p-2 bg-red-700 text-white col-span-3 m-4 rounded-md font-mono ">Search</button>
                </form>
            </div>
            {
                reply.length!==0 &&(
                    <div className="bg-gray-900 flex-row justify-center w-170 ml-92 rounded-md mt-5 pt-2 pb-2">
                {
                    reply.map((moviename,index)=>(
                        <ul key={index}>
                            <li className="text-white pl-3 font-mono font-bold p-1">{moviename}</li>
                        </ul>
                    ))
                }
            </div>
                )
            }

           

        </div>


    )
}
export default GptSearchBar