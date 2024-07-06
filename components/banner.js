import React from "react";

function Banner(props) {
  return (
    <React.Fragment>
      <div className={`overflow-hidden w-full h-[7rem] ${props.background} shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center relative`}>
        <div className="absolute w-full h-full flex items-center justify-center font-page font-extrabold tracking-wide text-page4 text-lg sm:text-2xl md:text-3xl overflow-x-scroll text-nowrap">
          {props.text}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;
