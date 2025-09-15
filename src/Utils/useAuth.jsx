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

const useHandleAuth = (email, password, name) => {
  const [errormessage, setErrormessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = (isSignInForm) => {
    const message = ValidationData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrormessage(message);

    if (message) return;

    if (!isSignInForm) {
      // ✅ Signup
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/150878739?v=4",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              navigate("/browse");
            })
            .catch((error) => setErrormessage(error.message));
        })
        .catch(() => setErrormessage("Invalid Credentials"));
    } else {
      // ✅ Sign In
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then(() => navigate("/browse"))
        .catch(() => setErrormessage("Invalid Credentials"));
    }
  };

  return { errormessage, handleAuth };
};

export default useHandleAuth;
