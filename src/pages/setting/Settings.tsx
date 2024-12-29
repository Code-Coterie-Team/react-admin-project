// import React from 'react'

import { useState } from "react";
import { Help, Lock01, Notification03, Plus, Trash, User } from "../../icons";

function Settings() {
  const [notificationPush, setNotificationPush] = useState(true);
  const [notificationEmail, setNotificationEmail] = useState(false);
  const [notificationSms, setNotificationSms] = useState(true);
  const [toggleButtonSecurity, setToggleButtonSecurity] = useState(false);

  const [connectGoogle, setConnectGoogle] = useState(true);
  const [connectFacebook, setConnectFacebook] = useState(false);
  const [connectTwitter, setConnectTwitter] = useState(true);

  const handelTogleButtonNotificationPush = () => {
    setNotificationPush(!notificationPush);
  };

  const handelTogleButtonNotificationEmail = () => {
    setNotificationEmail(!notificationEmail);
  };
  const handelTogleButtonNotificationSms = () => {
    setNotificationSms(!notificationSms);
  };

  function handelTogleButtonSecurity() {
    setToggleButtonSecurity(!toggleButtonSecurity);
  }

  function ButtonConnectGoogle() {
    setConnectGoogle(!connectGoogle);
  }

  function ButtonConnectFacebook() {
    setConnectFacebook(!connectFacebook);
  }

  function ButtonConnectTwitter() {
    setConnectTwitter(!connectTwitter);
  }

  return (
    <div className="setting py-6 px-8 max-w-4xl mx-auto">
      <div className="profile flex flex-col mb-8 items-start space-y-4 bg-menuBody p-6 rounded-lg border-bmenuBody border-[1px] border-solid">
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
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-2 font-bold ">
          Edit Profule
        </button>
      </div>

      <div className="notifications mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border-[1px] border-solid">
        <div className="flex flex-row gap-4 mb-4">
          <Notification03
            className="text-indigo-400"
            width="1.75rem"
            height="1.75rem"
          />
          <h2 className="text-xl font-semibold text-gray-100">Notifications</h2>
        </div>
        <div className="flex flex-col  text-base">
          <div className="pushNotification flex justify-between items-center py-3">
            <span className="text-gray-300 ">Push Notifications</span>
            <button
              className={` h-6 w-11 rounded-full inline-flex items-center 
                 ${
                   notificationPush === false ? "bg-gray-600" : " bg-indigo-600"
                 }
                `}
              onClick={() => {
                handelTogleButtonNotificationPush();
              }}
            >
              <span
                className={`bg-gray-100 rounded-full size-4 inline-block 
               ${notificationPush === false ? "ml-1" : "ml-[1.5rem]"}`}
              ></span>
            </button>
          </div>
          <div className="emailNotification flex justify-between items-center py-3">
            <span className="text-gray-300 ">Email Notifications</span>
            <button
              className={` h-6 w-11 rounded-full inline-flex items-center 
                 ${
                   notificationEmail === false
                     ? "bg-gray-600"
                     : " bg-indigo-600"
                 }
                `}
              onClick={() => {
                handelTogleButtonNotificationEmail();
              }}
            >
              <span
                className={`bg-gray-100 rounded-full size-4 inline-block 
               ${notificationEmail === false ? "ml-1" : "ml-[1.5rem]"}`}
              ></span>
            </button>
          </div>
          <div className="smsNotification flex justify-between items-center py-3">
            <span className="text-gray-300 ">Email Notifications</span>
            <button
              className={` h-6 w-11 rounded-full inline-flex items-center 
                 ${notificationSms === false ? "bg-gray-600" : " bg-indigo-600"}
                `}
              onClick={() => {
                handelTogleButtonNotificationSms();
              }}
            >
              <span
                className={`bg-gray-100 rounded-full size-4 inline-block 
               ${notificationSms === false ? "ml-1" : "ml-[1.5rem]"}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div className="security mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border-[1px] border-solid">
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
            <button
              className={` h-6 w-11 rounded-full inline-flex items-center 
                 ${
                   toggleButtonSecurity === false
                     ? "bg-gray-600"
                     : " bg-indigo-600"
                 }
                `}
              onClick={() => {
                handelTogleButtonSecurity();
              }}
            >
              <span
                className={`bg-gray-100 rounded-full size-4 inline-block 
               ${toggleButtonSecurity === false ? "ml-1" : "ml-[1.5rem]"}`}
              ></span>
            </button>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Change Password
          </button>
        </div>
      </div>

      <div className="connectedAccounts mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border-[1px] border-solid">
        <div className="flex flex-row gap-4 mb-4">
          <Help
            className="text-indigo-400"
            width="1.75rem"
            height="1.75rem"
          />
          <h2 className="text-xl font-semibold text-gray-100">
            Connected Accounts
          </h2>
        </div>
        <div className="flex flex-row justify-between py-3">
          <div className="flex flex-row gap-2">
            <img
              className="size-6"
              src="src/img/google.png"
              alt=""
            />
            <span className="text-base">Google</span>
          </div>
          <button
            onClick={() => {
              ButtonConnectGoogle();
            }}
            className={` py-1 rounded focus:outline-none  ${
              connectGoogle === false
                ? "bg-gray-600 hover:bg-gray-700 px-3"
                : "bg-green-600 hover:bg-green-700 px-5"
            }`}
          >
            {connectGoogle ? "Connected" : "Conect"}
          </button>
        </div>
        <div className="flex flex-row justify-between py-3">
          <div className="flex flex-row gap-2">
            <img
              className="size-6"
              src="src/img/facebook.svg"
              alt=""
            />
            <span className="text-base">Facebook</span>
          </div>
          <button
            onClick={() => {
              ButtonConnectFacebook();
            }}
            className={` py-1 rounded focus:outline-none ${
              connectFacebook === false
                ? "bg-gray-600 hover:bg-gray-700 px-3"
                : "bg-green-600 hover:bg-green-700 px-5"
            }`}
          >
            {connectFacebook ? "Connected" : "Conect"}
          </button>
        </div>
        <div className="flex flex-row justify-between py-3">
          <div className="flex flex-row gap-2">
            <img
              className="size-6"
              src="src/img/x.png"
              alt=""
            />
            <span className="text-base">Twitter</span>
          </div>
          <button
            onClick={() => {
              ButtonConnectTwitter();
            }}
            className={` py-1 rounded focus:outline-none ${
              connectTwitter === false
                ? "bg-gray-600 hover:bg-gray-700 px-3"
                : "bg-green-600 hover:bg-green-700 px-5"
            }`}
          >
            {connectTwitter ? "Connected" : "Conect"}
          </button>
        </div>

        <button className="flex gap-2 items-center text-indigo-400 hover:text-indigo-300">
          <Plus
         
            width="1.25rem"
            height="1.25rem"
          />
          <span>Add Account</span>
        </button>
      </div>

      <div className="dangerZone mb-8 bg-red-900 bg-opacity-50 p-6 rounded-lg border-red-700 border-[1px] border-solid">
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
        <button className="py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-bold ">
        Delete Account
        </button>
      </div>
    </div>
  );
}

export default Settings;
