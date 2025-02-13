import React from "react";
import { Trash } from "../icons";
import ButtonSetting from "./ButtonSetting";

function DangerZone() {
  return (
    <div className="dangerZone mb-8 bg-red-900 bg-opacity-50 p-6 rounded-lg border-red-700 border border-solid">
      <div className="flex flex-row gap-4 mb-4">
        <Trash
          className="text-red-400"
          width="1.75rem"
          height="1.75rem"
        />
        <h2 className="text-xl font-semibold text-gray-100">
          Connected Accounts
        </h2>
      </div>
      <p className="text-base text-gray-300 mb-4">
        Permanently delete your account and all of your content.
      </p>
      {/* <button className="py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-bold ">
        Delete Account
      </button> */}
      <ButtonSetting titelButton={"Delete Account"} />
    </div>
  );
}

export default DangerZone;
