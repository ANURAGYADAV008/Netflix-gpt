import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser,addUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { LOGO ,AVTAR} from "../Utils/Constants";

const BrowseHeader = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleLogout=()=>{
    signOut(auth).then(()=>{
      dispatch(removeUser());
      navigate("/");

    })
    .catch((error)=>{
    });
  }
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-4 bg-black/80 z-50">
      {/* Left side: Logo + Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <img
          className="w-32 cursor-pointer"
          src={LOGO}
          alt="Logo"
        />

        {/* Navigation */}
        <div className="flex items-center space-x-6 text-white text-sm font-medium">
          <span className="hover:text-gray-300 cursor-pointer">Home</span>
          <span className="hover:text-gray-300 cursor-pointer">TV Shows</span>
          <span className="hover:text-gray-300 cursor-pointer">Movies</span>
          <span className="hover:text-gray-300 cursor-pointer">New & Popular</span>
          <span className="hover:text-gray-300 cursor-pointer">My List</span>
          <span className="hover:text-gray-300 cursor-pointer">Browse by Language</span>
        </div>
      </div>

      {/* Right side: Logout */}
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-2xl"
          src={AVTAR}
          alt="profile avatar"
        />
          <button className="text-white bg-red-600 px-4 py-1 rounded-md font-semibold hover:bg-red-700 transition" onClick={handleLogout}>
            Sign Out
          </button>
      </div>

    </div>
  )
};

      export default BrowseHeader;
