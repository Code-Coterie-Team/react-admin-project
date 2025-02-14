import { IButtonSetting } from "../types/api";

function ButtonSetting(props: IButtonSetting) {
  return (
    <button
      className={`py-2 px-4 rounded font-bold bg-indigo-600 hover:bg-indigo-700 text-white ${
        props.titelButton === "Delete Account" ? "bg-red-600 hover:bg-red-700" : ""
      }`}
    >
      {props.titelButton}
    </button>
  );
}

export default ButtonSetting;
