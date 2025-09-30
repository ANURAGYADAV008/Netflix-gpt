import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../Utils/Constants";
import { AVTAR } from "../Utils/Constants";
import { toggleGptSearchView } from "../Utils/Gptslice";


const BrowseHeader = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      dispatch(removeUser());
      navigate("/");

    })
    .catch((error)=>{
    });
  }
  const handleGpt =()=>{
    dispatch(toggleGptSearchView())

  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />
        <div className="flex p-2 justify-between pl-0">
          <button  onClick={handleGpt} className="font-bold text-white bg-purple-800 h-12 w-27 rounded-md mr-5 text-center">
            Gpt Search
    
          </button>
          <img
            className="hidden md:block w-12 h-12 mr-5 rounded-2xl"
            alt="usericon"
            src={AVTAR}
          />
          <button onClick={handleSignOut} className="font-bold text-white bg-red-700 h-12 w-27 rounded-md">
            Sign Out
          </button>
        </div>
    </div>
  );
};

export default BrowseHeader;

