import React from 'react';
import ReactPlayer from 'react-player/youtube';
import useFetch from "../hook/useFetchTrailer";

const VideoBack = ({ id }) => {
  const trailerURL = useFetch(id);

  if (!trailerURL) return null;

  return (
    <div className='top-0'>
      <ReactPlayer
        url={trailerURL}
        width="100%"
        height="800px"
        muted={true}
        playing={true}
        playbackRate={1.2}
      />
    </div>
  );
};

export default VideoBack;
