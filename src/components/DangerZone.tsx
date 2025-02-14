import { Trash } from "../icons";
import ButtonSetting from "./ButtonSetting";
import TitlePart from "./TitlePart";

function DangerZone() {
  return (
    <div className="dangerZone mb-8 bg-red-900 bg-opacity-50 p-6 rounded-lg border-red-700 border border-solid">
      <TitlePart
        iconTitlePart={
          <Trash
            className="text-red-400"
            width="1.75rem"
            height="1.75rem"
          />
        }
        titlePart={"Danger Zone"}
      />
      <p className="text-base text-gray-300 mb-4">
        Permanently delete your account and all of your content.
      </p>
      <ButtonSetting titelButton={"Delete Account"} />
    </div>
  );
}

export default DangerZone;
