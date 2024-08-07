import PrismLoader from "../prism-loader";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import style from "./panel.module.css";
import style2 from "./panel2.module.css";
import style3 from "./panel3.module.css";

function Panel() {
  const [chosen, setChosen] = useState("container");
  const [shownCode, setShownCode] = useState("container");

  useEffect(() => {
    Prism.highlightAll();
  }, [shownCode]);

  const getCurrentStyle = () => {
    switch (chosen) {
      case "container":
        return style;
      case "element":
        return style2;
      case "hover":
        return style3;
      default:
        return style;
    }
  };

  const currentStyle = getCurrentStyle();

  useEffect(() => {
    if (chosen === "container") {
      setShownCode(`
      .container {
        background-color: rgb(40, 44, 36);
        border-radius: 20px;
        height: 100%;
        width: 100%;
        transition: transform 1s;
      }
      
      .element {
        background-color: rgb(241, 240, 232);
        height: 50%;
        width: 50%;
        border-radius: 20px;
      }
      
      .container:hover .element {
        transform: translateY(100%);
      }
      `);
    } else if (chosen === "element") {
      setShownCode(`
      .container {
        background-color: rgb(40, 44, 36);
        border-radius: 20px;
        height: 100%;
        width: 100%;
      }
      
      .element {
        background-color: rgb(241, 240, 232);
        height: 50%;
        width: 50%;
        border-radius: 20px;
        transition: transform 1s;
      }
      
      .container:hover .element {
        transform: translateY(100%);
      }
      `);
    } else if (chosen === "hover") {
      setShownCode(`
      .container {
        background-color: rgb(40, 44, 36);
        border-radius: 20px;
        height: 100%;
        width: 100%;
      }
      
      .element {
        background-color: rgb(241, 240, 232);
        height: 50%;
        width: 50%;
        border-radius: 20px;
      }
      
      .container:hover .element {
        transform: translateY(100%);
        transition: transform 1s;
      }
      `);
    }
  }, [chosen]);

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

  const sadSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      className="w-[66%] h-[66%] fill-page4"
    >
      <path d="M8.36 15.33a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 00.64.23 1 1 0 00.64-1.76 5.81 5.81 0 00-7.28 0zm.85-4.79a1 1 0 001.41 0 1 1 0 000-1.41 3.08 3.08 0 00-4.24 0 1 1 0 101.41 1.41 1 1 0 011.42 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5.62-10.87a3.08 3.08 0 00-4.24 0 1 1 0 001.41 1.41 1 1 0 011.42 0 1 1 0 001.41 0 1 1 0 000-1.41z"></path>
    </svg>
  );

  function clickHander(typeOfClick) {
    setChosen(typeOfClick);
  }

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <PrismLoader />

      <div className="w-full h-[50rem] md:h-[35rem] bg-page1 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)] border-2 border-page4 md:flex">
        <div className="w-full h-1/2 border-b-4 md:w-1/2 md:h-full md:border-r-4 md:border-b-0 border-page4 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
          <div className="w-full h-full px-10 py-10">
            <div className="w-full h-[3rem] bg-page2 border-x-4 border-page4 border-y-4">
              <div className="w-full h-full flex">
                <div
                  onClick={() => clickHander("container")}
                  className={`${
                    chosen === "container" && "underline"
                  } text-page4 hover:cursor-pointer duration-100 hover:text-sm w-1/3 h-full flex items-center justify-center font-page tracking wide text-xs font-bold`}
                >
                  .container
                </div>
                <div
                  onClick={() => clickHander("element")}
                  className={`${
                    chosen === "element" && "underline"
                  } hover:cursor-pointer duration-100 hover:text-sm w-1/3 h-full border-x-4 border-page4 flex items-center justify-center font-page tracking wide text-page4 text-xs font-bold`}
                >
                  .element
                </div>
                <div
                  onClick={() => clickHander("hover")}
                  className={`${
                    chosen === "hover" && "underline"
                  } hover:cursor-pointer duration-100 hover:text-sm w-1/3 h-full flex items-center justify-center font-page tracking wide text-page4 text-xs font-bold`}
                >
                  .container:hover .element
                </div>
              </div>
            </div>
            <div className="w-full h-[calc(100%-3rem)] overflow-scroll bg-[#282c24]">
              <pre className="language-css">
                <code className="language-css">{shownCode}</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full bg-page2 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-2/3 md:h-1/2 aspect-square bg-page4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-3xl">
              <div className={currentStyle.container}>
                <div className={currentStyle.element}>
                  <div className="w-full h-full flex items-center justify-center">
                    {chosen === "element" ? smileSVG : sadSVG}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Panel;
