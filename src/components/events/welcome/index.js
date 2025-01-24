import React from "react";
import "./welcome.scss";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex-col-center Welcome">
      <h1 className="heading">Welcome! Looks like you are new.</h1>

      <p className="paraGraph">
        Can't find your events? Perhaps you created them using our legacy
        system. No worries, those events are still available by clicking here.
        Or start by creating an event in our new system that will replace the
        old one and find out what's new!
      </p>

      <Link href="/events/new" className=" btn2">
        Create an Event
      </Link>
    </div>
  );
}
