"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Welcome() {
  const starSVG = (
    <motion.svg
      animate={{
        scale: [1, 1.05],
        rotate: [0, 20],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
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

  const starSVG3 = (
    <motion.svg
      animate={{
        scale: [1.05, 0.95],
        rotate: [0, 15],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
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
    <div className="overflow-hidden w-full h-[60rem] lg:h-[30rem] bg-page1 border-2 border-page4 shadow-[inset_0_-8px_16px_rgba(0,0,0,0.2)]">
      <div className="w-full h-full lg:grid lg:grid-cols-2">
        <div className="w-full h-1/2 lg:h-full lg:col-span-1 border-page4 p-3">
          <div className="relative w-full h-full border-page4 p-3">
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 right-20 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.4],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  delay: 2.5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-9 h-9"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.2],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-14 h-14"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="opacity-0 sm:opacity-100 lg:opacity-0 min-[1200px]:opacity-100 right-7 top-20 absolute w-full h-full flex items-start justify-end pt-6 pe-5">
              <motion.svg
                animate={{
                  scale: [1, 1.2],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 5,
                  delay: 1.5,
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-7 h-7"
              >
                <path
                  stroke="#383434"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3l2.036 5.162c.188.476.282.714.425.915.128.178.284.334.462.462.2.143.439.237.915.425L21 12l-5.162 2.036c-.476.188-.714.282-.915.425a1.998 1.998 0 00-.462.462c-.143.2-.237.439-.425.915L12 21l-2.036-5.162c-.188-.476-.282-.714-.425-.915a1.999 1.999 0 00-.462-.462c-.2-.143-.439-.237-.915-.425L3 12l5.162-2.036c.476-.188.714-.282.915-.425a2 2 0 00.462-.462c.143-.2.237-.439.425-.915L12 3z"
                ></path>
              </motion.svg>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-2/5 relative">
                <div className="absolute w-full h-full flex justify-center items-end">
                  <div className="ml-24 w-60 h-20 flex justify-center scale-150">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-full"
                    >
                      <path d="M483.111.501l-42.59 461.314-184.524 49.684L71.47 461.815 28.889.501h454.222zM397.29 94.302H111.866l6.885 55.708h144.78l-7.7 3.205-132.07 55.006 4.38 54.453 127.69.414 68.438.217-4.381 72.606-64.058 18.035v-.057l-.525.146-61.864-15.617-3.754-45.07H131.898l7.511 87.007 116.423 34.429v-.062l.21.062 115.799-33.802 15.021-172.761H255.509l.323-.14 135.83-58.071 5.628-55.708z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full h-1/3 flex items-end md:items-center">
                  <span className="md:ps-0 hover:scale-105 hover:text-page3 duration-200 font-page font-extrabold text-pageMenu text-4xl sm:text-6xl lg:text-6xl tracking-wide">
                    Animating
                  </span>
                </div>
                <div className="w-full h-1/3 flex items-center">
                  <span className="ps-4 md:ps-10 hover:scale-105 hover:text-page3 duration-200 font-page font-extrabold text-pageMenu text-4xl sm:text-6xl lg:text-6xl tracking-wide">
                    with
                  </span>
                </div>
                <div className="ps-8 md:ps-20 w-full h-1/3 flex items-start md:items-center flex-row">
                  <span className="ps-4 md:ps-10 hover:scale-105 hover:text-page3 duration-200 font-page font-extrabold text-pageMenu text-4xl sm:text-6xl lg:text-6xl tracking-wide">
                    CSS
                  </span>
                </div>
              </div>
              <div className="pt-16 md:pt-20 w-full h-2/5 p-3">
                <span className="p-2 float-left font-extrabold text-3xl font-page text-pageMenu">
                  CSS
                </span>
                <span className="bg-page2 leading-[-15px] font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                  {" "}
                  a stylesheet language used to define the presentation and
                  layout of web apps. It is useful for animations because it
                  enables the creation of smooth, efficient transitions and
                  visual effects without relying on JavaScript. Discover the
                  Basics of CSS Animation
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-1/2 lg:h-full lg:col-span-1 flex items-center justify-center">
          <div className="absolute w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
            <div className="col-span-6 row-span-4">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0 p-2 sm:p-3">
                <div className="col-span-8 row-span-6 border-4 border-page4 z-10">
                  <div className="w-full h-full bg-page1 shadow-2xl">
                    <div className="relative w-full h-1/5 border-b-4 border-page4 bg-page2 flex items-center justify-center">
                      <span className="absolute font-page font-extrabold tracking-wide text-pageMenu text-md sm:text-xl md:text-xl">
                        topics
                      </span>
                    </div>
                    <div className="w-full h-4/5 p-1 sm:p-2 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 float-right"
                      >
                        <path
                          stroke="#383434"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"
                        ></path>
                      </svg>
                      <div className="font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                        <div>-transition</div>
                        <div>-animation</div>
                        <div>-other animation tools</div>
                        <div>-tailwind CSS</div>
                        <div>-Framer Motion</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 row-span-4 col-start-9 border-b-4 border-page4 z-10"></div>
                <div className="col-span-4 row-span-2 col-start-9 row-start-5"></div>
              </div>
            </div>
            <div className="col-span-6 row-span-4 col-start-7">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0 p-2 sm:p-3">
                <div className="col-span-4 row-span-2 border-b-4 border-page4 z-50"></div>
                <div className="col-span-4 row-span-4 col-start-1 row-start-3"></div>
                <div className="col-span-8 row-span-6 col-start-5 row-start-1 border-4 border-page4 z-50 bg-page1">
                  <div className="w-full h-full bg-page1 shadow-2xl">
                    <div className="relative w-full h-1/5 border-b-4 border-page4 bg-page2 flex items-center justify-center">
                      <span className="absolute font-page font-extrabold tracking-wide text-pageMenu text-md sm:text-xl md:text-xl">
                        But why?
                      </span>
                    </div>
                    <div className="w-full h-4/5 p-1 sm:p-2 overflow-hidden">
                      <span className="font-body font-semibold lg:font-normal text-pageMenu text-[9px] min-[360px]:text-[12px] leading-[0px] min-[470px]:text-[16px] sm:text-[20px] md:text-[22px] lg:text-[15px] min-[1200px]:text-[19px]">
                        <span>
                          Explore the capabilities of CSS animations and you
                          might be inspired to create an even better UI{" "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 row-span-2 col-start-7 row-start-1">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
                <div className="col-span-4 row-span-6 flex items-center">
                  <span className="ps-2 rotate-12">{starSVG2}</span>
                </div>
                <div className="col-span-4 row-span-6 col-start-5 flex items-center justify-center">
                  <span className="pb-12">{starSVG}</span>
                </div>
                <div className="col-span-4 row-span-6 col-start-9 flex items-end justify-center overflow-hidden">
                  <span className="pb-3 rotate-45">{starSVG3}</span>
                </div>
              </div>
            </div>
            <div className="col-span-6 row-span-2 row-start-5">
              <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-0">
                <div className="col-span-3 row-span-6 flex justify-start items-center">
                  <span className="ps-2">{starSVG}</span>
                </div>
                <div className="col-span-3 row-span-6 col-star flex justify-center items-start">
                  <span className="pt-5">{starSVG2}</span>
                </div>
                <div className="col-span-6 row-span-6 col-start-7 flex items-end justify-center">
                  <span className="pe-5">{starSVG3}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
              className="absolute z-30"
              animate={{
                y: [-11, 11],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
              }}
            >
              <Image
                src={"/floatphone.png"}
                alt="Image"
                placeholder="blur"
                height={1750}
                width={1290}
                blurDataURL={"/floatphone.png"}
                className="w-[15rem]"
              />
            </motion.div>
            <motion.div
              className="absolute top-[14.5rem] z-30"
              animate={{
                scale: [1.14, 1],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 4,
              }}
            >
              <Image
                src={"/floatblob.png"}
                alt="Image"
                placeholder="blur"
                height={1750}
                width={1290}
                blurDataURL={"/floatblob.png"}
                className="w-[15rem]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
