import Header from "./Header";
import Footer from "./Footer";
import { useRef, useState } from "react";
import useHandleAuth from "../Utils/useHandleAuth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const { errormessage, handleAuth } = useHandleAuth(email, password, name);

  return (
    <div className="relative h-screen w-screen bg-black text-white">
      <Header />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/50 p-12 rounded-lg shadow-lg w-96 flex flex-col space-y-4"
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
            ref={email}
            placeholder="Email"
            className="p-3 rounded-md bg-gray-800/70 text-white focus:outline-none"
          />

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-3 rounded-md bg-gray-800/70 text-white focus:outline-none"
          />

          <button
            type="submit"
            onClick={() => handleAuth(isSignInForm)}
            className="bg-red-600 hover:bg-red-700 transition-colors duration-300 p-3 rounded-md font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-sm text-red-700 font-bold">{errormessage}</p>

          <p className="text-sm text-gray-300">
            {isSignInForm ? "New to MovieFlix ?" : "Already a user ? "}
            <span
              className="text-white cursor-pointer hover:underline"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
            .
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

