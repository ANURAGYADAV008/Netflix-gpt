import Buttons from "./button";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="text-white max-w-xl">
      {/* Movie Title */}
      <h1 className="text-5xl font-extrabold drop-shadow-lg leading-tight">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 text-lg text-gray-200 line-clamp-3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6">
        <Buttons />
      </div>
    </div>
  );
};

export default VideoTitle;

