import React from "react";
import Link from "next/link";
// import { allRoutes } from "@/data/allRoutes";

export default function BlogHeader({ styles }) {
  {
    /* nav bar */
  }
  return (
    <nav className={`flex-row-center ${styles.nav}`}>
      <Link href="/">
        <button className={styles.buttonStyle}>Home</button>
      </Link>
      <Link href={"/"}>
        <button className={styles.buttonStyle}>Face Swap</button>
      </Link>
      <Link href={"/#contact"}>
        <button className={styles.buttonStyle}>Contact us</button>
      </Link>
    </nav>
  );
}
