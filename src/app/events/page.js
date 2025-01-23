import React from "react";

import EventsPage from "./eventsPage";
import { allRoutes } from "@/data/allRoutes";

const siteUrl = process.env.SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${allRoutes.imageEnhancer}`,
    languages: {
      "en-US": `${allRoutes.imageEnhancer}/en-US`,
      "de-DE": `${allRoutes.imageEnhancer}/de-DE`,
    },
  },
  title: "Enhance Photos in Seconds with AI - Snapshawt",
  description:
    "Enhance your photos instantly with Snapshawt's AI-powered image enhancer. Improve quality, adjust details, and bring out the best in your images with advanced AI technology for stunning, high-definition results",
  keywords:
    "AI image enhancer, enhance photo quality online, AI photo editor, best photo enhancer, high-resolution image enhancement, free online photo enhancer, AI-powered photo improvement, realistic photo enhancement, image quality booster, photo sharpener AI, upscale images online, advanced photo retouching, picture enhancement software, AI-driven image clarity, improve photo resolution, free image quality enhancer, photo enhancer app, clear blurry images AI, professional photo enhancement, AI photo clarity tool, sharpen image details, image upscaling software, noise reduction tool, smart photo editor, AI photo improvement tool, photo quality enhancer online, automatic photo editing, AI-powered photo fixer, picture sharpness booster, easy photo enhancement, restore old photos AI, upscale image resolution, photo retouching software, improve picture sharpness, online image repair, enhance details in photos, professional image enhancer, AI image optimization tool, color correction AI, photo brightness enhancer, advanced photo clarity, sharpen low-quality images, AI-powered photo restoration, automatic image editing, best AI photo enhancer, enhance photo colors, fix blurry images online, AI detail enhancement, high-quality photo editor, image sharpness software, realistic photo fixer, AI tools for photo improvement",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    site_name: "Snapshawt",
    title: "Enhance Photos in Seconds with AI - Snapshawt",
    description:
      "Enhance your photos instantly with Snapshawt's AI-powered image enhancer. Improve quality, adjust details, and bring out the best in your images with advanced AI technology for stunning, high-definition results",
    images: {
      url: "/og-images/home-og.png",
      width: 1200,
      height: 630,
      alt: "AI-powered face swap preview image",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Snapshawt",
    title: "Enhance Photos in Seconds with AI - Snapshawt",
    description:
      "Enhance your photos instantly with Snapshawt's AI-powered image enhancer. Improve quality, adjust details, and bring out the best in your images with advanced AI technology for stunning, high-definition results",
    images: {
      url: "/og-images/home-og.png",
      width: 1200,
      height: 630,
      alt: "AI-powered face swap preview image",
    },
  },
};

export default function page() {
  return (
    <>
      <EventsPage />
    </>
  );
}
