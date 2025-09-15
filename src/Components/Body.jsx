import Login from "./Login"
import Homepage from "./Homepage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../Utils/Firebase";
import Browse from "./Browse";
const Body = () => {
    const dispatch = useDispatch();
    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Homepage/>
        },
        {
            path: "/login",
            element:<Login/>
        },
        {
        path:"/browse",
        element:<Browse/>
        }
    ]);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayname } = user;
                dispatch(addUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                }));

                console.log("Email ye hai->", email);
            }
            else {
                dispatch(removeUser())

            }

        })


    }, [])

    return (
        <div>
            <RouterProvider router={approuter} />

        </div>
    )
}
export default Body