import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
/* import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll' */
import profilePic from "../../../images/profilePic.png"

const Navbar = () => {
  const navitem = (
    <>
      <li>
        <HashLink to="/#home" spy={true} smooth={true} offset={50} duration={1000} >
          <i class="fa-solid fa-house mx-2"></i>Home
        </HashLink>
      </li>
      <li>
        <HashLink to="/#about" spy={true} smooth={true} offset={50} duration={1000} >
          <i class="fa-solid fa-address-card mx-2"></i>About
        </HashLink>
      </li>
      <li>
        <HashLink to="/#skills" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-sliders mx-2"></i>Skills
        </HashLink>
      </li>
      <li>
        <HashLink to="/#projects" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-diagram-project mx-2"></i>Projects
        </HashLink>
      </li>
      <li>
        <HashLink to="/#contact" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-handshake mx-2"></i>Contact Me
        </HashLink>
      </li>
      <li>
        <Link to="blogs" spy={true} smooth={true} offset={50} duration={500} >
          <i class="fa-solid fa-handshake mx-2"></i>Blogs
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar sticky top-0 z-50 p-0 bg-transparent lg:bg-base-100/75">
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
