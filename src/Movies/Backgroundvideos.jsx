import useTrailerby_id from "../Hooks/useTrailerHooks";

const BackgroundVideo = ({ id }) => {
  const { trailer_id } = useTrailerby_id(id);

  return (
    <div className=" aspect-video">
      <iframe
        className=" aspect-video "
        src={`https://www.youtube.com/embed/${trailer_id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer_id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BackgroundVideo; 

