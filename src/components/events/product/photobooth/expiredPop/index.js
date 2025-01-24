import React from 'react';
import "./expiredPopup.scss";
import Image from 'next/image';

import warningPng from "@/../public/events/popupImages/warning-sign.png";

export default function ExpiredPopupProduct({title,onClose,component,eventData}) {
  return (
    <div className={`flex-row-center 
            ${eventData.screen =="responsive" ? "modal-overlay-responsive" : "modal-overlay-vertical"}`}
            >
      <div className="flex-col-center modal-content">
        
        {/* {!component && <div className='warningImg'>
          <Image src={warningPng} alt='warning-png' />
        </div>
        } */}
        
        <p className="eventPre">{title}</p>

        <div className="flex-col-center detailCon">
          <p className="flex-row-center modalHead">
            {component=="reminder" ? "Your can update your event duration from event manager" :"Please update duration from event manager to continue!"}  
          </p>
        </div>

        {component && (
        <button onClick={()=>onClose(false)} className="close-preview">
          Close
        </button>
        )}
        
      </div>
    </div>
  )
}
