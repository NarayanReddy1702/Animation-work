import React from "react";

const BoxAnime = ({ visible }) => {
  return (
    <div
      className={`w-full h-screen ${
        visible ? "block" : "hidden"
      } flex items-center justify-center bg-black text-zinc-300`}
    >
      <div className="p-3 w-full  flex items-center justify-center  ">
        <div className="w-full lg:w-[80%]  items-center justify-center  flex flex-col lg:flex lg:flex-row ">
          <div className="w-full lg:w-[20vw] bg-violet-400 shodow rounded-tl-2xl  rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none p-5">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-xl">Works</h1>
              <div className="arrow w-5 h-5 bg-white"></div>
            </div>
            <h1 className="text-xl text-center lg:text-start  mt-26 mb-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              placeat accusamus amet, deserunt molestiae doloremque?
            </h1>
          </div>
          <div className="w-full lg:w-[55vw] bg-violet-600 px-5  flex items-start flex-col lg:px-10 py-5 rounded-bl-2xl rounded-br-2xl lg:rounded-bl-none lg:rounded-tr-2xl ">
            <div className="w-full flex items-center justify-between">
              <div>
              </div>
              <div className="arrow w-5 h-5 bg-green-400"></div>
            </div>
            <h1 className="text-xl text-center lg:text-start lg:w-[60%] mt-28 mb-10 lg:ml-10 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              veritatis praesentium quisquam, aliquid deleniti, fugit quae illo
              obcaecati porro commodi esse laudantium cupiditate quidem
              dignissimos explicabo vitae quasi atque quas.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxAnime;
