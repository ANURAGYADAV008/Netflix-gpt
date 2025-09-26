import Buttons from "./button";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" aspect-video text-white absolute top-50 ml-4 bg-gradient-to-r">
      {/* Movie Title */}
      <h1 className="text-3xl font-extrabold drop-shadow-lg leading-tight ">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 text-lg text-white line-clamp-3 font-medium w-130">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-4">
        <Buttons />
      </div>
    </div>
  );
};

export default VideoTitle;

