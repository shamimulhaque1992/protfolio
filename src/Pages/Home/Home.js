import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import About from "./About";
import Profile from "./Profile";


import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div>
      
      <div className="flex">
        <SocialLinks></SocialLinks>
        <Profile></Profile>
      </div>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
