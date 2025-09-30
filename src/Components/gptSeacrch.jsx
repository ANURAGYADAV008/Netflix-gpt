import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./Gptsearchbar";
const GptSearch = () => {
    return (
        <div>

            <div className="absolute inset-0 -z-20">
                <img
                    className="w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
                    alt="Background"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />

        </div>
    )
}
export default GptSearch;