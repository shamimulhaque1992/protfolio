import { init, sendForm } from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";


const ContactMe = () => {
  init("7Bmfp_2yDEK2QyLUk");
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    sendForm("default_service", "template_qiwzllo", "#contactform").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div id="contact">
      <hr className="w-8/12 mx-auto mt-40 " />
      <div className="hero min-h-screen ">
        <div className="container  mx-auto  hero-content flex-col mb-20 mt-10 lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contact Info.</h1>
            <p class="text-left my-10 text-2xl text-green-300">Bangladesh</p>
            <p class="text-left">
              <i class="fa-solid fa-location-dot mx-3 p-4"></i>
              kallyanpur, Dhaka
            </p>
            <p class="text-left">
              <i class="fa-solid fa-phone mx-3 p-4"></i>+880 1779-312970
            </p>
            <p class="text-left">
              <i class="fa-solid fa-envelope mx-3 p-4"></i>
              khandoker15-1992@diu.edu.bd
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    type="text"
                    placeholder="Your Message"
                    className="textarea textarea-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
