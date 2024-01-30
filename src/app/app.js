"use client";
import React, { useEffect } from "react";
import AOS from "aos";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return <></>;
};

export default App;
