import Header from "@/components/header";
import React from "react";
import SingleAIPhoto from "@/components/ai-solution/single-photo-ai";

export const metadata = {
  title: "AI Photo Booth | Techkilla",
  description:
    "Experience the future of photo booths with Techkilla's AI Photo Booth. Transform user photographs into enchanting, themed masterpieces using advanced generative AI technology. Perfect for events and celebrations, both in-person and virtual.",
  keywords:
    "AI Photo Booth, generative AI, event engagement, virtual photo booth, interactive technology, Techkilla",
};

const PhotoAI = () => {
  return (
    <>
      <Header />
      <SingleAIPhoto />
    </>
  );
};

export default PhotoAI;
