"use client";

import Image from "next/image";
import styles from "./page.module.css";
import PrismLoader from "../components/prism-loader";
import React from "react";
import Head from "next/head";
import Panel from "../components/panels/panel";
import Welcome from "../components/welcome";
import Banner from "../components/banner";
import WhatsTransition from "../components/whats-transition";
import WhatsAnimation from "../components/whats-animation";
import PanelAnimation from "../components/panels/panel-animation";
import PanelAnimationDirection from "../components/panels/panel-animation-direction";
import OtherAnimationTools from "../components/other-animation-tools";
import WhatsTailwindCSS from "../components/tailwind/whats-tailwind";
import TailwindAnimation from "../components/tailwind/tailwind-animation";
import TailwindButton from "../components/tailwind/tailwind-button";
import WhatsFramer from "../components/framer/whats-framer";
import FramerUsefulCasses from "../components/framer/framer-useful-cases";
import Footer from "../components/footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Animating with CSS</title>
        <meta name="description" content="animating with CSS" />
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>

      <PrismLoader />
      <Welcome />
      <Banner text={"CSS transition - what it is?"} background={"bg-page2"} />
      <WhatsTransition />
      <Banner text={"CSS transition - where should I place this class?"} />
      <Panel />
      <Banner text={"CSS animation - what it is?"} background={"bg-page1"} />
      <WhatsAnimation />
      <Banner
        text={"CSS animation - what is animation-fill-mode?"}
        background={"bg-page1"}
      />
      <PanelAnimation />
      <Banner
        text={"CSS animation - what is animation-direction?"}
        background={"bg-page1"}
      />
      <PanelAnimationDirection />
      <Banner text={"Useful CSS tools"} background={"bg-page1"} />
      <OtherAnimationTools />
      <Banner
        text={"Tailwind CSS - how does it work?"}
        background={"bg-page1"}
      />
      <WhatsTailwindCSS />
      <Banner
        text={"Tailwind CSS - animate-(...) class"}
        background={"bg-page1"}
      />
      <TailwindAnimation />
      <Banner
        text={"Tailwind CSS - two approaches to buttons"}
        background={"bg-page1"}
      />
      <TailwindButton />
      <Banner
        text={"Framer Motion - how does it work?"}
        background={"bg-page1"}
      />
      <WhatsFramer />
      <Banner
        text={"Framer Motion - When to use this library?"}
        background={"bg-page1"}
      />
      <FramerUsefulCasses />
      <Footer />
    </React.Fragment>
  );
}
