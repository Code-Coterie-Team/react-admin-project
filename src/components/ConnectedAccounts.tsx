import React, { useState } from "react";
import { Help, Plus } from "../icons";

function ConnectedAccounts() {

  const [connectGoogle, setConnectGoogle] = useState(true);
  const [connectFacebook, setConnectFacebook] = useState(false);
  const [connectTwitter, setConnectTwitter] = useState(true);

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
    <div className="connectedAccounts mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
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
  );
}

export default ConnectedAccounts;
