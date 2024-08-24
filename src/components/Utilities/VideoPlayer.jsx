"use client";
import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handlerVideoPlayer = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handlerVideoPlayer} className="text-color-primary float-right">
          <XCircle size={32} weight="fill" />
        </button>
        <YouTube videoId={videoId} onReady={(e) => e.target.pauseVideo()} opts={option} onError={() => alert("Trailer not found")} />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button onClick={handlerVideoPlayer} className="fixed bottom-2 right-2 bg-color-primary text-color-dark rounded p-1">
        Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
