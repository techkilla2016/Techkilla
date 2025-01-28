import React from "react";
import "./welcome.scss";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex-col-center Welcome">
      <h1 className="heading">
        Welcome!
        <br />
        Looks like you are new.
      </h1>

      <p className="paraGraph">
        Create, manage, and explore exciting events effortlessly.
      </p>
      <div className="flex-row-center buttonEvent">
        <Link href="/events/new" className="createBtn">
          Create an Event
        </Link>
        <Link href="/contact" className="createBtn1">
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
