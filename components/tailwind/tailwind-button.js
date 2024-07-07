"use client";

import React, { useEffect } from "react";
import PrismLoader from "../prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

function TailwindButton() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <PrismLoader />

      <div className="overflow-hidden w-full h-[55rem] md:h-[30rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center">
        <div className="w-full h-full md:flex">
          <div className="w-full h-1/2 border-b-4 border-page4 md:border-b-0 md:border-r-4 md:w-1/2 md:h-full">
            <div className="w-full h-full">
              <div className="w-full h-1/2 flex items-center justify-center">
                <pre className="language-html">
                  <code className="language-html">
                    {`
<button className="w-60 h-16 duration-100 hover:cursor-pointer 
  hover:text-4xl hover:w-72 hover:h-20 active:w-52 active:h-16 
  active:text-2xl (...)">
    PLAY
</button>
            `}
                  </code>
                </pre>
              </div>
              <div className="w-full h-1/2 flex items-center justify-center">
                <div className="active:w-52 active:h-16 active:text-2xl duration-100 hover:text-4xl hover:w-72 hover:h-20 hover:cursor-pointer w-60 h-16 bg-page2 border-4 border-page4 rounded-xl font-page text-page4 tracking-widest font-extrabold text-3xl flex items-center justify-center shadow-xl">
                  PLAY
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 md:w-1/2 md:h-full">
            <div className="w-full h-full">
              <div className="w-full h-1/2 flex items-center justify-center">
                <pre className="language-html">
                  <code className="language-html">
                    {`
<button className="w-60 h-16 duration-100 hover:cursor-pointer 
hover:scale-110 active:scale-90
(...)">
    PLAY
</button>
            `}
                  </code>
                </pre>
              </div>
              <div className="w-full h-1/2 flex items-center justify-center">
                <div className="active:scale-[80%] duration-100 hover:scale-[120%] hover:cursor-pointer w-60 h-16 bg-page2 border-4 border-page4 rounded-xl font-page text-page4 tracking-widest font-extrabold text-3xl flex items-center justify-center shadow-xl">
                  PLAY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TailwindButton;
