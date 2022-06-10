import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import About from "./About";
import "./Home.css";
import Profile from "./Profile";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div id="home">
      <div className="flex">
        <SocialLinks></SocialLinks>
        <Profile></Profile>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Blogs></Blogs>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
