import React from "react";
import { User } from "../icons";
import ButtonSetting from "./ButtonSetting";

function Profile() {
  return (
    <div className="Profile flex flex-col mb-8 items-start space-y-4 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <div className="flex flex-row gap-4">
        <User
          className="text-indigo-400"
          width="1.75rem"
          height="1.75rem"
        />
        <h2 className="font-semibold text-xl text-gray-100">Profile</h2>
      </div>

      <div className="flex flex-row items-center gap-4">
        <img
          className="rounded-full w-20 h-20"
          src="src/img/jone.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
      </div>
      <ButtonSetting titelButton=" Edit Profile"/>
    </div>
  );
}

export default Profile;
