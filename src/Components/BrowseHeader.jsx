import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";

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
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
          src="https://avatars.githubusercontent.com/u/153277?v=4"
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
