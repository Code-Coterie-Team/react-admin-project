import React, { useState } from "react";
import { InitialState } from "../types/api";

function ToggleButton({ initialState }: InitialState) {
  const [toggleButton, setToggleButton] = useState(initialState);

  const handleToggleButton = () => {
    setToggleButton((prevState:any) => !prevState);
  };
  return (
    <button
      className={` h-6 w-11 rounded-full inline-flex items-center 
     ${toggleButton === false ? "bg-gray-600" : " bg-indigo-600"}
    `}
      onClick={() => {
        handleToggleButton();
      }}
    >
      <span
        className={`bg-gray-100 rounded-full size-4 inline-block 
   ${toggleButton === false ? "ml-1" : "ml-[1.5rem]"}`}
      ></span>
    </button>
  );
}

export default ToggleButton;
