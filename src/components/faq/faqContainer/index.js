"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Header from "@/components/header";

import "./faqQuery.scss";

export default function FaqContainer({ content, title }) {
  const [idx, setIdx] = useState();
  const [showDd, setShowDd] = useState(true);

  return (
    <>
      <Header />
      <div className="flex-col-center SingleFaq">
        <h1 className="grd-txt">{title}</h1>

        <div className="flex-col-center container">
          {content?.map((item, index) => (
            <dl
              key={index}
              onClick={() => {
                setIdx(index);
                setShowDd(true);
              }}
              className={`flex-col-center dl ${
                idx === index || !showDd ? "showDl" : ""
              }`}
            >
              <dt className="txt1 flex-row-center dt">
                {item.dt}
                {(idx !== index || !showDd) && (
                  <div className="flex-row-center svg">
                    <MdKeyboardDoubleArrowRight />
                  </div>
                )}
                {idx === index && showDd && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDd(false);
                    }}
                    className="flex-row-center svg"
                  >
                    <IoMdCloseCircleOutline />
                  </div>
                )}
              </dt>

              <dd
                className={`txt2 dd ${idx === index && showDd ? "showDd" : ""}`}
              >
                {item.dd}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </>
  );
}
