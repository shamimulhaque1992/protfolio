import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const navitem = (
    <>
      <li>
        <a>Navbar Item 1</a>
      </li>
      <li>
        <a>Navbar Item 2</a>
      </li>
    </>
  );
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar">
            <div class="flex-none tooltip tooltip-right cursor-pointer" data-tip="Khandoker Shamimul Haque">
              <i class="text-5xl fab fa-korvue"></i>
            </div>

            <div class="grow justify-center hidden lg:block">
              <ul class="menu menu-horizontal">
                {navitem}
              </ul>
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
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100">
            {navitem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
