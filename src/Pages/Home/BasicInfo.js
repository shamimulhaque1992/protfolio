import React from "react";
import TypeAnimation from "react-type-animation";
import MovingComponent from "react-moving-text";

const BasicInfo = () => {
  return (
    <div className="mt-40">
      <div>
        <div className="sm:w-full sm:text-left md:text-center sm:mx-0 md:mx-auto ">
          <TypeAnimation
        
          cursor={true}
          sequence={[
            "Assalamu A'laikum",
            2000,
            "Welcome To My Portfolio",
            2000,
            "I'm",
            2000,
          ]}
          wrapper="a"
          repeat={3}
        />
        </div>
        <h1 className="sm:text-2xl sm:mx-0 md:text-5xl sm:w-9/12 md:w-full font-bold mt-10 mb-10 md:mx-auto">
          KHANDOKER SHAMIMUL HAQUE <span className="text-red-400 ">.</span>
        </h1>

        <p className="py-6 sm:w-full md:w-6/12 md:mx-auto sm:mx-0 sm:text-left md:text-center">
          I'm a fresh graduate from Daffold International University.I completed
          my graduation in Computer Science and Engineering.Now I'm actively
          looking fro a job as a Full stack Web Developer.
        </p>
        <MovingComponent
          type="fadeIn"
          duration="500ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease-out"
          iteration="infinite"
          fillMode="both"
        >
          <h1 className="sm:w-full md:w-6/12 md:mx-auto sm:mx-0 sm:text-left md:text-center font-bold">
            <a href="https://www.linkedin.com/in/khandoker-shamimul-haque-1b6a42169">
              Check out my LinkedIn Profile
            </a>
          </h1>
        </MovingComponent>
      </div>
    </div>
  );
};

export default BasicInfo;
