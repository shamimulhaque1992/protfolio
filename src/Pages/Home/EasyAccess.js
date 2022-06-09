import React from "react";
import resume from "../../assets/Khandoker Shamimul Haque_Resume.pdf";

const EasyAccess = () => {
  return (
    <div>
      <div>
        <a className="border-l-1 border-green-50" href={resume} download={resume}>
          <button
            download={resume}
            className="btn bg-nutral rounded-none border-l-1 border-green-50"
          >
            Download CV<i class="fa-solid mx-3 fa-download"></i>
          </button>
        </a>
        <button className="btn bg-nutral rounded-none border-l-1 border-green-50">
          More About Me
        </button>
        <button className="btn bg-nutral rounded-none border-l-1 border-green-50">
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default EasyAccess;
