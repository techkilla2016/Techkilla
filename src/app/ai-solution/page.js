"use client";
import React, { useEffect } from "react";
import SingleAIPhoto from "@/components/ai-solution/single-photo-ai";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/ai-photobooth");
  }, []);
  return (
    <>
      <Header />
      <SingleAIPhoto />
    </>
  );
};

export default page;
