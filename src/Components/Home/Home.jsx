import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";

const Home = ({visible, update }) => {
  const [num, setNum] = useState(0);
  const [progress, setProgress] = useState(num);

  const boxList=[
   
    {
      img:"",
      top:"60%",
      left:"50%",
      bgColor:"blue",
      visibility:true

    } ,
    {
      img:"",
      top:"65%",
      left:"59%",
      bgColor:"white",
      visibility:false
    } ,
    {
      img:"",
      top:"70%",
      left:"43%",
      bgColor:"green",
      visibility:false

    } ,
    {
      img:"",
      top:"80%",
      left:"50%",
      bgColor:"red",
      visibility:false

    } ,
    {
      img:"",
      top:"85%",
      left:"60%",
      bgColor:"yellow",
      visibility:false

    } ,
  ] 

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(
      ".loader",
      {
        top: "-100%",
        duration: 0.5,
        delay: 4.1,
      },
      "same"
    );
    tl.to(
      ".text",
      {
        color: "#fff",
        duration: 1,
        delay: 4.2,
      },
      "same"
    );
    tl.to(".loader1", {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: function () {
        update(true);
      },
    });
  });

  useEffect(() => {
    setInterval(() => {
      setNum((pre) => pre + 1);
    }, 70);
  }, []);
  return (
    <div className="w-full relative h-screen bg-black text-white">
      <div className="loader  w-full h-full bg-yellow-300  absolute top-0 left-0 z-10 ">
        <div className=" w-[165vw] lg:w-[95%] h-[0.7vh] bg-white rounded overflow-hidden rotate-90 left-[2vh] ml-8 lg:rotate-0 absolute top-1/2 mt-0 lg:ml-0 -translate-y-1/2 lg:left-1/2 lg:top-0 lg:-translate-y-0 lg:-translate-x-1/2 lg:mt-5  ">
          <div
            style={{ width: `${num}%` }}
            className={` h-full bg-linear-to-t from-zinc-500 to-yellow-700 transition-all duration-200`}
          ></div>
        </div>
        <div className="w-40 h-40 bg-yellow-300 shadow-2xl lg:shadow-none lg:bg-transparent rounded-full absolute flex items-center justify-center top-[30%] left-1/2 lg:left-[85%] lg:top-[20%] -translate-x-1/2 -translate-y-1/2">
        <span className="  lg:bg-transparent text-black rounded-1/2  text-[13vw] lg:text-[10vw] px-8 py-3 lg:p-10  lg:flex  lg:items-end lg:justify-end">
          {Math.min(100, Math.max(num, 0))}%
        </span>
          </div>  
      </div>
      <div className="loader1 hidden lg:block w-full h-full  absolute top-0 left-0 z-9 overflow-hidden">
        <video autoPlay loop muted src="./Videos/video.mp4"></video>
      </div>
     <div className="flex items-center justify-center">
     <Nav visible={visible}/>
     </div>
      <div className=" text uppercase text-[16vw] lg:text-[14vw] font-semibold text-black tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <h1>Work</h1>
     
      </div>
      <div className={`w-full h-full   ${visible?"block":"hidden"} relative`}>
        {boxList.map((box,index)=>(
        <div key={index} style={{backgroundColor:`${box.bgColor}`,top:`${box.top}`,left:`${box.left}`}} className={` w-32 lg:w-[13vw] h-32 lg:h-[13vw] z-50 absolute ${box.visibility?"block":"hidden"} -translate-y-1/2 -translate-x-1/2 rounded-2xl `}></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
