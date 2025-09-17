import { useState } from "react";
import ValidationData from "../Utils/validation";
import { auth } from "../Utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { useNavigate } from "react-router-dom";

const USER_AVATAR = "https://avatars.githubusercontent.com/u/150878739?v=4";


const useHandleAuth = (email, password, name) => {
  const navigate=useNavigate()
  const [errormessage, setErrormessage] = useState(null);
  const dispatch = useDispatch();

  const handleAuth = (isSignInForm) => {
    const message = ValidationData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrormessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          });

          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate('/browse')

        })
        .catch((error) => {
          setErrormessage(error.code + " - " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse")
        })
        .catch((error) => {
          setErrormessage(error.code + " - " + error.message);
        });
    }
  };

  return { errormessage, handleAuth };
};

export default useHandleAuth;


