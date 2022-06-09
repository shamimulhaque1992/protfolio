import React from "react";
import compsol from "../../images/compsolution.png";
import fresh from "../../images/freshfeel.png";
import click from "../../images/clicklife.png";

const Card = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-20">
      <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
        <figure class="px-4 pt-6 hover:scale-105 ease-in duration-300">
          <img src={compsol} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">CompSolution</h2>
          <p>A B2B type website of a PC parts manufacturer company.</p>
          <div class="card-actions">
            <button class="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>

      <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
        <figure class="px-4 pt-6 hover:scale-105 ease-in duration-300">
          <img src={fresh} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">FreshFeel.com</h2>
          <p>A website to manage inventory of a fragrance warehouse.</p>
          <div class="card-actions">
            <button class="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>

      <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
        <figure class="px-4 pt-6 hover:scale-105 ease-in duration-300">
          <img src={click} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Click-Life</h2>
          <p>A B2C type website that provide photography service.</p>
          <div class="card-actions">
            <button class="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
