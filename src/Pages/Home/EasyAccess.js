import React from "react";
import resume from "../../assets/Khandoker Shamimul Haque_Resume.pdf";

const EasyAccess = () => {
  return (
    <div className="">
      <div>
        <a className="border-l-1 border-green-50" href={resume} download={resume}>
          <button
            download={resume}
            className="btn btn-base-100 m-5"
          >
            Download CV<i class="fa-solid mx-3 fa-download"></i>
          </button>
        </a>
        <button className="btn btn-base-100 m-5"><i class="fa-solid fa-address-card mx-2"/>
          More About Me
        </button>
        <button className="btn btn-base-100 m-5">
          <i class="fa-solid fa-handshake mx-2"></i>Let's Talk
        </button>
      </div>
    </div>
  );
};

export default EasyAccess;
