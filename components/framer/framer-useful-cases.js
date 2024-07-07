"use client";

import React, { useEffect, useState } from "react";
import PrismLoader from "../prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

function FramerUsefulCasses() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [homepageIsHovered, setHomepageIsHovered] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <PrismLoader />

      {/* <pre className="language-html">
        <code className="language-html">
          {`

            `}
        </code>
      </pre> */}

      <div className="overflow-hidden w-full h-[120rem] lg:h-[40rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center">
        <div className="w-full h-full lg:flex">
          <div className="w-full h-1/3 border-b-4 lg:border-b-0 lg:border-r-4 border-page4 lg:w-1/3 lg:h-full">
            <div className="w-full h-full">
              <div className="w-full h-1/2 p-10">
                <pre className="language-html">
                  <code className="language-html">
                    {`
  <motion.div
    animate={{ x: [-100, 100] }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      type: "spring",
      stiffness: 120,
      mass: 0.9,
      duration: 3,
  }}
  ></motion.div>
            `}
                  </code>
                </pre>
              </div>
              <div className="w-full h-1/2 flex items-center justify-center">
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    type: "spring",
                    stiffness: 120,
                    mass: 0.9,
                    duration: 3,
                  }}
                  className="w-20 h-20 bg-page4 rounded-xl shadow-xl"
                ></motion.div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 border-b-4 lg:border-b-0 lg:border-r-4 border-page4 lg:w-1/3 lg:h-full">
            <div className="w-full h-full">
              <div className="w-full h-1/2 p-10">
                <pre className="language-html">
                  <code className="language-html">
                    {`
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
  Play
  </motion.div>
            `}
                  </code>
                </pre>
              </div>
              <div className="w-full h-1/2 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="hover:cursor-pointer w-60 h-16 bg-page2 border-4 border-page4 rounded-xl font-page text-page4 tracking-widest font-extrabold text-3xl flex items-center justify-center shadow-xl"
                >
                  Play
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 border-b-4 lg:border-b-0 border-page4 lg:w-1/3 lg:h-full">
            <div className="w-full h-full">
              <div className="w-full h-1/2 p-10">
                <pre className="language-html">
                  <code className="language-html">
                    {`
  <div
    onMouseEnter={() => setHomepageIsHovered(true)}
    onMouseLeave={() => setHomepageIsHovered(false)}
  >
  ...
    <motion.path
      initial={{ pathLength: 1 }}
      animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
      transition={{ duration: 3 }}
      stroke="(...)"
      d="(...)"
    ></motion.path>
            `}
                  </code>
                </pre>
              </div>
              <div
                onMouseEnter={() => setHomepageIsHovered(true)}
                onMouseLeave={() => setHomepageIsHovered(false)}
                className="w-full h-1/2 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-24 h-24"
                >
                  <g stroke="#000" strokeWidth="1.7">
                    <motion.path
                      stroke="#383434"
                      initial={{ pathLength: 1 }}
                      animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
                      transition={{ duration: 3 }}
                      strokeLinecap="round"
                      d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5M4 22V9.5M20 22V9.5"
                    ></motion.path>
                    <motion.path
                      stroke="#383434"
                      d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
                      initial={{ pathLength: 1 }}
                      animate={{ pathLength: homepageIsHovered ? [0, 1] : 1 }}
                      transition={{ duration: 3 }}
                    ></motion.path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FramerUsefulCasses;
