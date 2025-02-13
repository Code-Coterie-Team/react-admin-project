import React, { useState } from "react";
import { Notification03 } from "../icons";
import ToggleButton from "./ToggleButton";
import ItemNOtifiication from "./ItemNOtifiication";

function Notifications() {
  const listNotifications = [
    {
      title: "Push Notifications",
      state: <ToggleButton initialState={true} />,
    },
    {
      title: "Email Notifications",
      state: <ToggleButton initialState={false} />,
    },
    {
      title: "Email Notifications",
      state: <ToggleButton initialState={true} />,
    },
  ];
  return (
    <div className="notifications mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <div className="flex flex-row gap-4 mb-4">
        <Notification03
          className="text-indigo-400"
          width="1.75rem"
          height="1.75rem"
        />
        <h2 className="text-xl font-semibold text-gray-100">Notifications</h2>
      </div>
      <ItemNOtifiication itemNotification={listNotifications} />
    </div>
  );
}

export default Notifications;
