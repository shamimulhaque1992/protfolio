import React from "react";

const VideoResume = () => {
  return (
    <div className="shadow-lg rounded-lg shadow-blue-500/50 sm:w-11/12 sm:h-72 md:w-6/12 mx-auto mt-20 mb-20">
      <div class="">
        <a
          class=""
          href="https://drive.google.com/file/d/194MYflyr3E3IIyTMpRjplVVxLnqd4NoQ/view?usp=sharing"
          data-lity
        >
          <div className="mx-auto mt-10 mb-8 ">
            <i class="sm:text-9xl fa-solid fa-circle-play text-fuchsia-700"></i>
          </div>
          <span class="text-stone-500 text-2xl hover:text-red-500">Watch My Video Resume</span>
        </a>
      </div>
    </div>
  );
};

export default VideoResume;
