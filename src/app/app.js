"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import TagManager from "react-gtm-module";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-TMCF5D4L" });
  }, []);
  return <></>;
};

export default App;
