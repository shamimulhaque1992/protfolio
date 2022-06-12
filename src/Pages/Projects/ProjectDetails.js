import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projectsDescription.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const selectedProduct = projects.find((project) => project.id == id);

  return (
    <div>
      <div className="mx-auto relative">
        <div
          className="h-96"
          style={{
            backgroundImage: `url("${selectedProduct?.img}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="w-10/12 mx-auto absolute top-3/4 inset-0 rounded-lg shadow-lg ">
          <div className="bg-base-100 shadow-lg pt-10">
            <h1 className="text-2xl">{selectedProduct?.name}</h1>
            <h1>{selectedProduct?.description}</h1>
          </div>
          <div className="sm:flex sm:flex-col items-center lg:grid gap-4  lg:grid-cols-3 bg-base-100 shadow-lg pb-20 pt-20 justify-items-center">
            <div class="card w-96 sm:w-11/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
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
                  <div class="badge badge-outline">React.js</div>
                  <div class="badge badge-outline">Node.js</div>
                </div>
              </div>
            </div>

            <div class="card w-96 sm:w-11/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
              <figure>
                <img src={selectedProduct?.sc2} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {selectedProduct?.sc2title}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{selectedProduct?.sc2text}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">React.js</div>
                  <div class="badge badge-outline">Node.js</div>
                </div>
              </div>
            </div>

            <div class="card w-96 sm:w-11/12 md:w-5/12 lg:w-10/12 bg-base-100 shadow-2xl">
              <figure>
                <img src={selectedProduct?.sc3} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {selectedProduct?.sc3title}
                  <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{selectedProduct?.sc3text}</p>
                <div class="card-actions justify-end">
                  <div class="badge badge-outline">React.js</div>
                  <div class="badge badge-outline">Node.js</div>
                </div>
              </div>
            </div>
            <div className="col-span-3 mt-10 w-full lg:w-10/12 mx-auto pb-20 shadow-zinc-900 rounded-lg justify-self-end shadow-lg">
              <div className="mt-10 flex flex-col items-center">
                <hr className="w-5/12 mt-10" />
                <h1 className="text-center text-xl text-secondary underline">
                  Features
                </h1>
                <ul className="sm:text-sm md:text-base list-decimal text-left sm:w-9/12">
                  <li>{selectedProduct?.feature1}</li>
                  <li>{selectedProduct?.feature2}</li>
                  <li>{selectedProduct?.feature3}</li>
                  <li>{selectedProduct?.feature4}</li>
                  <li>{selectedProduct?.feature5}</li>
                  <li>{selectedProduct?.feature6}</li>
                  <li>{selectedProduct?.feature7}</li>
                </ul>
                <hr className="w-5/12 pt-10 mt-10" />
                <div className="">
                  <h1 className="text-center text-xl text-secondary underline">
                    Technology used
                  </h1>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology1}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology2}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology3}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology4}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology5}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology6}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology7}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology8}
                  </kbd>
                  <kbd class="mx-2 my-2 kbd kbd-md">
                    {selectedProduct?.technology9}
                  </kbd>
                </div>
                <div className="links mt-20">
                  {selectedProduct?.gitServer ? (
                    <>
                      <a
                        href={selectedProduct?.gitClient}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-base-100 mx-2 my-2 underline"
                      >
                        <i class="fa-brands fa-github mx-2"></i>Git Client
                      </a>
                      <a
                        href={selectedProduct?.gitServer}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-base-100 mx-2 my-2 underline"
                      >
                        <i class="fa-brands fa-github mx-2"></i>Git Server
                      </a>
                    </>
                  ) : (
                    <a
                      href={selectedProduct?.gitClient}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-base-100 mx-2 my-2 underline"
                    >
                      <i class="fa-brands fa-github mx-2"></i>Git
                    </a>
                  )}
                  <a
                    href={selectedProduct?.liveSite}
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

          {/* <div className="flex flex-col items-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
