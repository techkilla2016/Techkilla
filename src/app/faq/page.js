import React from "react";
// import "./faq.scss";
import Link from "next/link";
import Head from "next/head";
import FaqSection from "@/components/faq/faq";
import Header from "@/components/header";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { allRoutes } from "@/data/allRoutes";

export default function Faq() {
  return (
    <>
      <Head>
        {/* Inject the JSON-LD structured data
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        /> */}
      </Head>
      <Header />
      <FaqSection />
    </>
  );
}
