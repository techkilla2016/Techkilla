import React from "react";
import "./welcome.scss";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex-row-center Welcome">
      <div className="flex-col-center context-part">
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
      {/* <div className="flex-row-center img-part">
        <Image
          src="/events/blog8-08.jpg"
          alt="welcome-photobooth"
          className="ai-photobooth"
          width={500}
          height={300}
        />
      </div> */}
    </div>
  );
}
