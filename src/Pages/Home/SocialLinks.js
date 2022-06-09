import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex md:items-end sm:items-start md:mt-0 sm:mt-60">
      <ul class="flex flex-col mx-10">
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
        <li className="mb-3">
          <a href="#0">
            <i class="fab fa-skype" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
