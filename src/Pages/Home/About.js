import React from "react";
import profilePic from "../../images/profilePic.png";

import MovingComponent from "react-moving-text";

const About = () => {
  
  return (
    <div id="about" class="hero min-h-screen bg-base-200 pb-20" >
      <div class="hero-content flex-col md:flex-row">
        <img
          src={profilePic}
          class="sm:w-6/12 md:w-4/12 mx-auto rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <MovingComponent
          type="fadeIn"
          duration="2000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="none"
        >
          <h1 className="text-5xl mt-32 font-bold">Front-End Web Developer</h1>
        </MovingComponent>
          <p class="py-6 sm:w-11/12 md:text-xl">
            I'm a Front-End Web Developer. I'm highly dedicated to work and passionate with my goal. <br /> <br />

            I completed my graduation from Daffodil International University. During my graduation I was involved with various projects and different kind of voluntary works. I was blased with some talented faculties who helped me to develop my skills, knowledge and character.
            <br /><br />
             Here's some information of mine.
          </p>
          <div className="flex text-left sm:flex-col sm:text-center md:text-left md:flex-row border md:justify-center mb-10">
            <div className="md:border-b-0 md:border-r-2 sm:border-b-2 sm:mb-5 sm:pb-5 md:mx-2 md:px-5">
              <p className="underline">Personal Information</p>
              <ul>
                <li>Birthday: 14th November, 1998</li>
                <li>Nationality: Bangladeshi</li>
                <li>Age: 23</li>
                <li>Religion: Islam</li>
              </ul>
            </div>
            <div className="mb-10 md:mx-4">
              <p className="underline">Educational Information</p>

              <ul>
                <li>Bsc: CSE</li>
                <li>Isntitute: Daffodil International University</li>
                <li>Passing Year: 2022</li>
                <li>CGPA: 3.74</li>
              </ul>
            </div>
          </div>
          <button class="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
