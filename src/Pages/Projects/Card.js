import React from "react";
import compsol from "../../images/compsolution.png";
import fresh from "../../images/freshfeel.png";
import click from "../../images/clicklife.png";
import { useNavigate } from "react-router-dom";

const Card = ({ project }) => {
  const { id, name, description, title } = project;
  const navigate = useNavigate();
  const navigateToDetails =(id)=> {
    navigate(`/${id}`)
  }
  return (
    
      <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
        <figure class="px-4 pt-6 hover:scale-105 ease-in duration-300">
          <img src={compsol} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">CompSolution</h2>
          <p>A B2B type website of a PC parts manufacturer company.</p>
          <div class="card-actions">
            <button onClick={()=>navigateToDetails(id)} class="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
