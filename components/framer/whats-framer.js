"use client";

import React, { useEffect } from "react";
import PrismLoader from "../prism-loader";
import Head from "next/head";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

function WhatsFramer() {
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

      <div className="overflow-hidden w-full h-[25rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 flex items-center justify-center">
        <div className="w-full h-full p-5 flex items-center justify-center">
          <pre className="language-html">
            <code className="language-html">
              {`
import { motion } from "framer-motion";

...

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 2.5 }}
>
  Hello world
</motion.div>
            `}
            </code>
          </pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WhatsFramer;
