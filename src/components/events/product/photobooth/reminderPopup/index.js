import React from 'react';
import "./reminderPopup.scss";

export default function ReminderPopup({title}) {
  return (
    <div >
        <p>{title}</p>
        <button>close</button>
    </div>
  )
}
