import { useState } from "react";
import { InitialState } from "../types/types";

function ButtonConnect({ initialState }: InitialState) {
  const [connectAccounts, setConnectAccounts] = useState(initialState);

  function ButtonConnectAccounts() {
    setConnectAccounts((prevState: any) => !prevState);
  }
  return (
    <button
      onClick={() => {
        ButtonConnectAccounts();
      }}
      className={` py-1 rounded focus:outline-none ${
        connectAccounts === false
          ? "bg-gray-600 hover:bg-gray-700 px-3"
          : "bg-green-600 hover:bg-green-700 px-5"
      }`}
    >
      {connectAccounts ? "Connected" : "Conect"}
    </button>
  );
}

export default ButtonConnect;
