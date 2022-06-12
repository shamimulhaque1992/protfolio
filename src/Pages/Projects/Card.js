import React from "react";
import compsol from "../../images/compsolution.png";
import fresh from "../../images/freshfeel.png";
import click from "../../images/clicklife.png";
import { useNavigate } from "react-router-dom";

const Card = ({ project }) => {
  const { id,img, name, description, gitClient,gitServer,liveSite} = project;
  const navigate = useNavigate();
  const navigateToDetails =(id)=> {
    navigate(`/${id}`)
  }
  return (
    
      <div class="card w-96 sm:w-10/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
        <figure class="px-4 pt-6 hover:scale-105 ease-in duration-300">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <div class="">
            <button onClick={()=>navigateToDetails(id)} class="btn btn-base-100">See Details</button>
            
            <div className="links">
              <hr className="w-10/12 mx-auto"/>
                  {gitServer ? (
                    <>
                      <a
                        href={gitClient}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-base-100 mx-2 my-2 underline"
                      >
                        <i class="fa-brands fa-github mx-2"></i>Git Client
                      </a>
                      <a
                        href={gitServer}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-base-100 mx-2 my-2 underline"
                      >
                        <i class="fa-brands fa-github mx-2"></i>Git Server
                      </a>
                    </>
                  ) : (
                    <a
                      href={gitClient}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-base-100 mx-2 my-2 underline"
                    >
                      <i class="fa-brands fa-github mx-2"></i>Git
                    </a>
                  )}
                  <a
                    href={liveSite}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-base-100 mx-2 my-2 underline"
                  >
                    <i class="fa-solid fa-globe mx-2"></i>Live site
                  </a>
                </div>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
