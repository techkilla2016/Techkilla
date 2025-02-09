import React from "react";
import Link from "next/link";
import "./blogHeader.scss";
// import { allRoutes } from "@/data/allRoutes";

export default function BlogHeader() {
  return (
    <nav className="flex-row-center nav">
      <Link href="/">
        <button className="buttonStyle">Home</button>
      </Link>
      <Link href={"/events"}>
        <button className="buttonStyle">Create your Photobooth</button>
      </Link>
      <Link href={"/contact"}>
        <button className="buttonStyle">Contact us</button>
      </Link>
    </nav>
  );
}
