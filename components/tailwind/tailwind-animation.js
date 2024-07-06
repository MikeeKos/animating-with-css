"use client";

import React, { useState, useEffect } from "react";
import PrismLoader from "../prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

function TailwindAnimation() {
  const [animationType, setAnimationType] = useState("animate-none");
  const [shownCode, setShownCode] = useState("none");

  const smileSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-2/3 h-2/3 fill-page4"
    >
      <path
        fill="#282c24"
        d="M14.935 13.172c.43.173.647.668.389 1.053a4 4 0 01-6.751-.162c-.24-.397 0-.882.44-1.033.438-.151.906.097 1.203.454a2.32 2.32 0 003.495.084c.313-.342.793-.567 1.224-.396zM10 9a1 1 0 00-2 0v1a1 1 0 102 0V9zM16 9a1 1 0 10-2 0v1a1 1 0 102 0V9z"
      ></path>
      <path
        fill="#282c24"
        fillRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  useEffect(() => {
    Prism.highlightAll();
  }, [shownCode]);

  function handleChange(type) {
    setAnimationType(type);
  }

  useEffect(() => {
    if (animationType === "animate-none") {
      setShownCode(`
<div className="animate-none">(...)</div>
      `);
    } else if (animationType === "animate-spin") {
      setShownCode(`
<div className="animate-spin">(...)</div>
      `);
    } else if (animationType === "animate-ping") {
      setShownCode(`
<div className="animate-ping">(...)</div>
      `);
    } else if (animationType === "animate-pulse") {
      setShownCode(`
<div className="animate-pulse">(...)</div>
      `);
    } else if (animationType === "animate-bounce") {
      setShownCode(`
<div className="animate-bounce">(...)</div>
      `);
    }
  }, [animationType]);

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
          className="animate"
        />
      </Head>

      <PrismLoader />

      <div className="overflow-hidden w-full h-[33.5rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 items-center justify-center">
        <div className="w-full h-[7.5rem] flex justify-center">
          <pre className="language-html">
            <code className="language-html">{shownCode}</code>
          </pre>
        </div>
        <div className="w-full h-[26rem] relative">
          <div
            className={`${animationType} absolute w-16 h-16 md:w-32 md:h-32 bg-page1 ml-auto mr-auto left-0 right-0 mt-28 flex items-center justify-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-full"
            >
              <path
                className="fill-page4"
                d="M483.111.501l-42.59 461.314-184.524 49.684L71.47 461.815 28.889.501h454.222zM397.29 94.302H111.866l6.885 55.708h144.78l-7.7 3.205-132.07 55.006 4.38 54.453 127.69.414 68.438.217-4.381 72.606-64.058 18.035v-.057l-.525.146-61.864-15.617-3.754-45.07H131.898l7.511 87.007 116.423 34.429v-.062l.21.062 115.799-33.802 15.021-172.761H255.509l.323-.14 135.83-58.071 5.628-55.708z"
              ></path>
            </svg>
          </div>
          <div className="w-full h-1/3">
            <div className="w-full h-full flex justify-between items-center">
              <div
                onClick={() => handleChange("animate-none")}
                className={`
                ${animationType === "animate-none" && "underline"}
                hover:cursor-pointer hover:rounded-2xl duration-150 hover:underline text-sm md:text-lg lg:text-xl font-page text-page1 p-3 md:p-5 font-bold tracking-widest flex items-center justify-center bg-page4 ml-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative`}
              >
                <span className="z-50">animate-none</span>
                <div className="absolute w-[30rem] h-2 lg:w-2 lg:h-[30rem] bg-page4 lg:top-0 right-0 lg:right-auto"></div>
              </div>
              <div
                onClick={() => handleChange("animate-spin")}
                className={`
                ${animationType === "animate-spin" && "underline"}
                hover:cursor-pointer hover:rounded-2xl duration-150 hover:underline text-sm md:text-lg lg:text-xl font-page text-page1 p-3 md:p-5 font-bold tracking-widest flex items-center justify-center bg-page4 mr-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative`}
              >
                <span className="z-50">animate-spin</span>
                <div className="absolute w-[30rem] h-2 lg:w-2 lg:h-[30rem] bg-page4 lg:top-0 left-0 lg:left-auto"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3">
            <div className="w-full h-full flex justify-around items-center">
              <div
                onClick={() => handleChange("animate-ping")}
                className={`
                ${animationType === "animate-ping" && "underline"}
                hover:cursor-pointer hover:rounded-2xl duration-150 hover:underline text-sm md:text-lg lg:text-xl font-page text-page1 p-3 md:p-5 font-bold tracking-widest flex items-center justify-center bg-page4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative`}
              >
                <span className="z-50">animate-ping</span>
                <div className="absolute w-[30rem] h-2 lg:w-2 lg:h-[30rem] bg-page4 lg:top-0 right-0 lg:right-auto"></div>
              </div>
              <div
                onClick={() => handleChange("animate-pulse")}
                className={`
                ${animationType === "animate-pulse" && "underline"}
                hover:cursor-pointer hover:rounded-2xl duration-150 hover:underline text-sm md:text-lg lg:text-xl font-page text-page1 p-3 md:p-5 font-bold tracking-widest flex items-center justify-center bg-page4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative`}
              >
                <span className="z-50">animate-pulse</span>
                <div className="absolute w-[30rem] h-2 lg:w-2 lg:h-[30rem] bg-page4 lg:top-0 left-0 lg:left-auto"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 flex justify-center items-center">
            <div
              onClick={() => handleChange("animate-bounce")}
              className={`
              ${animationType === "animate-bounce" && "underline"}
              hover:cursor-pointer hover:rounded-2xl duration-150 hover:underline text-sm md:text-lg lg:text-xl font-page text-page1 p-3 md:p-5 font-bold tracking-widest flex items-center justify-center bg-page4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] relative`}
            >
              <span className="z-50">animate-bounce</span>
              <div className="absolute w-2 h-[30rem] bg-page4 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TailwindAnimation;
