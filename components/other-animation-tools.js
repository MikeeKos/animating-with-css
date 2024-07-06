import React from "react";

function OtherAnimationTools(props) {
  return (
    <React.Fragment>
      <div className="py-4 md:py-4 md:px-4 overflow-hidden w-full h-[35rem] md:h-[25rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center relative">
        <div className="w-full h-full md:flex">
          <div className="w-full h-1/3 md:h-full md:w-1/3 flex items-center justify-center">
            <div className="p-6 text-xl md:text-2xl lg:text-4xl flex items-center font-page text-page1 tracking-widest font-extrabold w-[90%] h-[90%] bg-page4">
              Useful tools for animation
            </div>
          </div>
          <div className="w-full h-1/3 md:h-full md:w-1/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] bg-page4 block items-center">
              <span className="p-2 text-sm md:text-lg w-full h-1/4 flex items-center font-page text-page1 tracking-widest font-extrabold">
                Anime.js - JavaScript animation engine
              </span>
              <span className="p-2 border-x-4 border-page4 bg-page1 text-sm md:text-lg w-full h-1/4 flex items-center font-page text-page4 tracking-widest font-extrabold">
                Three.js - JavaScript 3D Library
              </span>
              <span className="p-2 text-sm md:text-lg w-full h-1/4 flex items-center font-page text-page1 tracking-widest font-extrabold">
                Tailwind CSS - utility-first CSS framework
              </span>
              <span className="p-2 border-x-4 border-b-4 border-page4 bg-page1 text-sm md:text-lg w-full h-1/4 flex items-center font-page text-page4 tracking-widest font-extrabold">
                Framer Motion - animation library
              </span>
            </div>
          </div>
          <div className="w-full h-1/3 md:h-full md:w-1/3 flex items-center justify-center">
            <div className="w-[90%] h-[90%] bg-page4">
              <div className="p-3 text-sm md:text-sm lg:text-base flex items-center font-page text-page1 tracking-widest font-extrabold w-[90%] h-[90%] bg-page4">
                Using pure CSS for animations can be challenging to refactor and
                maintain as projects scale. As a result, several libraries have
                been developed to simplify these tasks, offering features that
                improve maintainability and efficiency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OtherAnimationTools;
