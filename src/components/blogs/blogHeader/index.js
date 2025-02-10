import React from "react";
import Link from "next/link";
import "./blogHeader.scss";
// import { allRoutes } from "@/data/allRoutes";

export default function BlogHeader() {
  return (
    <nav className="flex-row-center navs">
      <Link href="/">
        <button className="buttonStyle">Home</button>
      </Link>
      <Link href={"/ai-photo-booth"}>
        <button className="buttonStyle">Photobooth</button>
      </Link>
      <Link href={"/contact"}>
        <button className="buttonStyle">Contact us</button>
      </Link>
    </nav>
  );
}
