import { Lock01 } from "../icons";
import ButtonSetting from "./ButtonSetting";
import ToggleButton from "./ToggleButton";
import TitlePart from "./TitlePart";

function Security() {
  return (
    <div className="security mb-8 bg-menuBody p-6 rounded-lg border-bmenuBody border border-solid">
      <TitlePart
        iconTitlePart={
          <Lock01
            className="text-indigo-400"
            width="1.75rem"
            height="1.75rem"
          />
        }
        titlePart={"Security"}
      />
      <div className="togggleButtonSecurity text-base">
        <div className=" flex justify-between items-center py-3">
          <span className="text-gray-300 ">Two-Factor Authentication</span>
          <ToggleButton initialState={false} />
        </div>
      </div>
      <div className="mt-4">
        <ButtonSetting titelButton="  Change Password" />
      </div>
    </div>
  );
}

export default Security;
