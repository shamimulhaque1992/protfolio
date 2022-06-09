import React from "react";
import profilePic from "../../images/profilePic.png";

const About = () => {
  return (
    <div class="hero min-h-screen bg-base-200" id="about">
      <div class="hero-content flex-col md:flex-row">
        <img
          src={profilePic}
          class="sm:w-6/12 md:w-4/12 mx-auto rounded-lg shadow-2xl"
          alt=""
        />
        <div>
          <h1 class="sm:text-2xl md:text-5xl font-bold">Front-End Web Developer</h1>
          <p class="py-6 sm:w-11/12 md:text-xl">
            I'm a Front-End Web Developer. I'm highly dedicated to work and passionate with my goal. Here's some information of mine.
          </p>
          <div className="flex text-left sm:flex-col sm:text-center md:text-left md:flex-row border md:justify-center mb-10">
            <div className="md:border-b-0 md:border-r-2 sm:border-b-2 sm:mb-5 sm:pb-5 md:mx-2 md:px-5">
              <p className="underline">Information</p>
              <ul>
                <li>Birthday: </li>
                <li>Nationality: Bangladeshi</li>
                <li>Age: 23</li>
                <li>Religion: Islam</li>
              </ul>
            </div>
            <div className="mb-10 md:mx-4">
              <p className="underline">Information</p>

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
