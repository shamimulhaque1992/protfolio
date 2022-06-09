import React from "react";
import ReactPlayer from "react-player";
import "./VideoResum.css"

const VideoResume = () => {
  return (
    <div className="">
      <div class="home-content__video">
        <a
          class="video-link"
          href="https://player.vimeo.com/video/117310401?color=01aef0&title=0&byline=0&portrait=0"
          data-lity
        >
          <span class="video-icon"></span>
          <span class="video-text">Watch Video</span>
        </a>
      </div>
    </div>
  );
};

export default VideoResume;
