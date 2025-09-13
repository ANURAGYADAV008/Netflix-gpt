import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";
import ValidationData from "../Utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormessage,setErrormessage]=useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name=useRef(null);

  const handleButtonClick = () => {
    const message = ValidationData(
      email.current?.value,
      password.current?.value,
      name.current?.value
    );

    setErrormessage(message);
    console.log(message); // you can replace with your UI logic
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="relative h-screen w-screen bg-black text-white">
        {/* Header */}
        <Header />

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Login Form */}
        <div className="absolute inset-0 flex items-center justify-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="backdrop bg-black/50 p-12 rounded-lg shadow-lg w-96 flex flex-col space-y-4"
          >
            <h1 className="text-3xl font-bold mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <input
                type="text"
                ref={name}
                placeholder="User Name"
                className="p-3 rounded-md bg-gray-800/70 text-white focus:outline-none"
              />
            )}

            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="p-3 rounded-md bg-gray-800/70 text-white focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="p-3 rounded-md bg-gray-800/70 text-white focus:outline-none"
            />

            <button
              type="submit"
              onClick={handleButtonClick}
              className="bg-red-600 hover:bg-red-700 transition-colors duration-300 p-3 rounded-md font-semibold"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-sm text-red-700 font-bold">{errormessage}</p>

            <p className="text-sm text-gray-300">
              {isSignInForm ? "New to Netflix ?" : "Already a user ? "}
              <span
                className="text-white cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm ? "Sign Up" : "Sign In"}
              </span>.
            </p>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
