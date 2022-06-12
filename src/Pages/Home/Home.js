import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Projects from "../Projects/Projects";
import About from "./About";
import "./Home.css";
import Profile from "./Profile";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";
import { HashLink } from 'react-router-hash-link';
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div id="home" className="relative">
      <div className="flex mb-20">
        <SocialLinks></SocialLinks>
        <Profile></Profile>
      </div>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
