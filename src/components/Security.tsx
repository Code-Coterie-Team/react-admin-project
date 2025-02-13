import React, { useState } from "react";
import { Lock01 } from "../icons";
import ButtonSetting from "./ButtonSetting";
import ToggleButton from "./ToggleButton";

function Security() {
  return (
    <div className="security mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <div className="flex flex-row gap-4 mb-4">
        <Lock01
          className="text-indigo-400"
          width="1.75rem"
          height="1.75rem"
        />
        <h2 className="text-xl font-semibold text-gray-100">Security</h2>
      </div>

      <div className="togggleButtonSecurity text-base">
        <div className=" flex justify-between items-center py-3">
          <span className="text-gray-300 ">Two-Factor Authentication</span>
          <ToggleButton initialState={false}/>
        </div>
      </div>
      <div className="mt-4">
        <ButtonSetting titelButton="  Change Password" />
      </div>
    </div>
  );
}

export default Security;
