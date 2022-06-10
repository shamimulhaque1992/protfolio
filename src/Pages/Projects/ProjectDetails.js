import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectsDescription.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const selectedProduct = projects.find((project) => project.id == id);

  console.log(selectedProduct);

  return (
    <div>
      <div className="mx-auto relative">
        <div
          className="h-96"
          style={{
            backgroundImage: `url("${
              selectedProduct?.img ? selectedProduct?.img : ""
            }")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="container w-11/12 mx-auto absolute top-3/4 inset-0 rounded-lg shadow-lg">
          <div className="bg-base-100 shadow-lg ">
            <h1 className="text-2xl">{selectedProduct?.mame}</h1>
            <h1>{selectedProduct?.description}</h1>
          </div>
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 justify-items-center mb-20 bg-base-100 shadow-lg pb-20 pt-20">
            <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
              <figure>
                <img src={selectedProduct?.sc1} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {selectedProduct?.sc1title}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{selectedProduct?.sc1text}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>

            <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
              <figure>
                <img src={""} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>

            <div class="card w-96 sm:w-8/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
              <figure>
                <img src={""} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  Shoes!
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">Fashion</div>
                  <div class="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
              <h1 className="text-center">Features</h1>
              <ul className="list-decimal text-left ">
                  <li>ReactJs is used for designing front end.</li>
                  <li>NodeJs is used to develop back end.</li>
                  <li>Firebase is used for authentication purposes.</li>
                  <li>Implemented google authentication.</li>
                  <li>React Router Dom is used to navigate.</li>
              </ul>
              <div className="">
                  <h1>Technology used</h1>
                  <p></p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
