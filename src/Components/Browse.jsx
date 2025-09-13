import { Link } from "react-router-dom"
import BrowseHeader from "./BrowseHeader"
import Footer from "./Footer"
const Login = () => {
    return (
        <div>
            <div className="relative h-screen w-screen bg-black text-white">
                {/* BrowseHeader */}
                <BrowseHeader />


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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">
                    {/* Headings */}
                    <span className="text-4xl md:text-5xl font-bold">
                        Unlimited movies, TV shows
                    </span>
                    <span className="text-4xl md:text-5xl font-bold mt-2">
                        and more
                    </span>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl font-semibold mt-4">
                        Starts at ₹149. Cancel at any time.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mt-2 max-w-2xl">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    {/* Input + Button */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center">
                        <input
                            className="h-12 px-4 rounded-md w-45 sm:w-45 bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                            type="email"
                            placeholder="Email address"
                        />
                        <Link
                            to="/login"
                            className="mt-4 sm:mt-0 sm:ml-4 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Login
