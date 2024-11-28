"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import TagManager from "react-gtm-module"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  useEffect(()=>{
    TagManager.initialize({ gtmId: 'GTM-PVH2G66V' });
  },[])
  return <></>;
};

export default App;
