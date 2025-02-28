"use client";
import React from "react";
import Image from "next/image";
import { ImHappy } from "react-icons/im";
import { PiNotePencilLight } from "react-icons/pi";
import { IoIosContacts } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import "./counter.scss";

export default function Counter() {
  const experience = [
    { name: "Happy Customers", number: "90+", icon: ImHappy },
    { name: "Projects Completed", number: "700+", icon: PiNotePencilLight },
    { name: "Organic Impressions", number: "5M+", icon: IoIosContacts },
    { name: "Pro Awards Winner", number: "3+", icon: FaAward },
  ];

  return (
    <div className="flex-col-center Counter">
      {/* <h1 className="headExp">Our Experience</h1> */}
      <div className="flex-col-center imgExp">
        <Image
          src="/assets/home/8-year.png"
          alt="Experience"
          width={500}
          height={300}
        />
      </div>
      <div className="flex-row-center expSection">
        {experience.map((exp, index) => {
          const IconComponent = exp.icon;
          return (
            <div key={index} className="flex-col-center expItem">
              <h2 className="expNumber">{exp.number}</h2>
              <p className="expName">{exp.name}</p>
              <div className="flex-col-center icon-part">
                <IconComponent className="expIcon" />{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
