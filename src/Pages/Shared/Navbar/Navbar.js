import React from "react";
import { Link, Outlet } from "react-router-dom";
/* import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll' */
import profilePic from "../../../images/profilePic.png"

const Navbar = () => {
  const navitem = (
    <>
      <li>
        <Link to="/" spy={true} smooth={true} offset={50} duration={1000} >
          <i class="fa-solid fa-house mx-2"></i>Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={50} duration={1000} >
          <i class="fa-solid fa-address-card mx-2"></i>About
        </Link>
      </li>
      <li>
        <Link to="/skills" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-sliders mx-2"></i>Skills
        </Link>
      </li>
      <li>
        <Link to="/projects" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-diagram-project mx-2"></i>Projects
        </Link>
      </li>
      <li>
        <Link to="/contact" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-handshake mx-2"></i>Contact Me
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar">
            <div
              class="flex-none tooltip tooltip-right cursor-pointer"
              data-tip="Khandoker Shamimul Haque"
            >
              <i class="text-5xl fab fa-korvue"></i>
            </div>

            <div class="grow justify-center hidden lg:block">
              <ul class="menu menu-horizontal">{navitem}</ul>
            </div>

            <div class="flex-1 justify-end lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>

          <ul class="menu p-4 overflow-y-auto w-72 bg-base-100">
            <div className="flex  items-center">
              <h1 className="text-emerald-300">Navigate to</h1>
              <hr className="mx-2 w-5/12"/>
              
            </div>
            <img
              className="w-5/12 mx-auto mt-20 mb-10 border-4 rounded-md"
              src={profilePic}
              alt=""
            />
            {navitem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
