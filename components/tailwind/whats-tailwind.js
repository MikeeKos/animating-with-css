"use client";

import React, { useEffect } from "react";
import PrismLoader from "../prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

function WhatsTailwindCSS() {
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

      <div className="overflow-hidden w-full h-[15rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center">
        <div className="w-full h-full p-5 flex items-center justify-center">
          <pre className="language-html">
            <code className="language-html">
              {`
<span className="absolute w-full h-full flex items-center justify-center font-page font-extrabold tracking-wide text-page4 text-lg sm:text-2xl md:text-3xl overflow-x-scroll text-nowrap">
  hello world
</span>
            `}
            </code>
          </pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhatsTailwindCSS;
