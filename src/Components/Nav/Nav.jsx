import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = ({visible}) => {
  
  return (
    <nav  className={` container z-10 w-full flex px-3  ${visible?"flex":"hidden"} justify-between top-0 items-center max-w-[1200px] fixed mx-auto h-[10vh]`}>
    <div>
      <svg fill="none" viewBox="0 0 71 16">
        <path
          fill="#000"
          d="M0 .854h4.124L5.15 5.718c.336 1.548.691 3.95.691 3.95h.04s.375-2.124.73-3.752L7.696.854h3.73l1.085 5.022c.355 1.648.71 3.792.71 3.792h.04s.374-2.402.71-3.99L14.997.854h4.223L15.51 15.05h-4.164l-1.262-6.015a62 62 0 0 1-.494-2.76h-.04s-.237 1.53-.494 2.76L7.833 15.05H3.611zm18.081 14.035 1.697-1.906c-1.065-1.29-1.657-3.017-1.657-4.982 0-4.25 2.762-7.406 7.143-7.406 1.697 0 3.157.477 4.302 1.31L31.263 0l1.223 1.111-1.696 1.926c1.065 1.291 1.657 3.017 1.657 4.964 0 4.249-2.802 7.384-7.183 7.384-1.697 0-3.137-.476-4.282-1.29L19.305 16zm4.46-5.043 4.598-5.202c-.473-.457-1.086-.735-1.854-.735-1.973 0-2.98 1.767-2.98 4.09q0 1.013.236 1.847m5.723-1.847c0-.655-.079-1.29-.257-1.826l-4.578 5.181c.473.457 1.085.715 1.854.715 1.973 0 2.981-1.747 2.981-4.07M32.858.854h7.006c2.88 0 5.328 1.33 5.328 4.228 0 1.628-.829 2.78-2.31 3.455v.06c1.145.437 1.737 1.231 1.974 2.343.374 1.706.058 3.751.573 3.891v.219h-4.066c-.395-.278-.237-2.024-.533-3.295-.258-1.092-.731-1.648-1.934-1.648h-1.914v4.943h-4.124zm4.124 6.294h2.21c1.183 0 1.835-.516 1.835-1.509 0-.933-.592-1.528-1.776-1.528h-2.27zM45.771.854h4.124V5.5L54.159.853h4.737l-5.27 5.717 5.565 8.477h-4.795L50.804 9.43l-.907 1.032v4.585h-4.124z"
        ></path>
        <path
          fill="#000"
          d="M57.563 10.522h4.223c.139 1.132 1.007 1.667 2.367 1.667.81 0 1.796-.317 1.796-1.171s-.947-1.072-2.683-1.509c-2.367-.595-5.228-1.41-5.228-4.427 0-3.256 2.643-4.487 5.82-4.487 2.92 0 5.605 1.231 5.663 4.329h-4.084c-.119-.775-.671-1.27-1.796-1.27-.908 0-1.54.417-1.54.992 0 .833 1.205.952 3.317 1.468 2.367.577 4.736 1.509 4.736 4.527s-2.743 4.744-6.078 4.744c-3.671 0-6.453-1.587-6.513-4.863"
        ></path>
      </svg>
    </div>
    <ol className=" hidden lg:flex items-center gap-x-16">
      <a className="cursor-pointer" href="/">
        Home
      </a>
      <a className="cursor-pointer" href="/About">
        About
      </a>
      <a className="cursor-pointer" href="/Work">
        Work
      </a>
      <a className="cursor-pointer" href="/Service">
        Service
      </a>
    </ol>
    <div className="text-[8vw] block lg:hidden">
      <IoMenuSharp />
    </div>
    <hr className="absolute bottom-0 left-0 w-full h-[0.5px] text-gray-500" />
  </nav>

  );
};

export default Nav;
