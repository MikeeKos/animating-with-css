"use client";

import React from "react";
import PrismLoader from "./prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";

function WhatsTransition() {
  const starSVG2 = (
    <motion.svg
      animate={{
        scale: [1, 1.2],
        rotate: [0, 30],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 3.5,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="w-12 h-12"
    >
      <path
        stroke="#383434"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92l-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92l1.697 1.697"
      ></path>
    </motion.svg>
  );

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <PrismLoader />

      <div className="overflow-hidden w-full h-[15rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center relative">
        <div className="absolute w-full h-full">
          <div className="w-full h-full right-0 top-0 m-2 opacity-0 md:opacity-100">
            {starSVG2}
          </div>
        </div>
        <pre className="language-css">
          <code className="language-css">
            {`
.element {
  transition: transform 2s ease-in-out 1s;
}
            `}
          </code>
        </pre>
      </div>
    </React.Fragment>
  );
}

export default WhatsTransition;
